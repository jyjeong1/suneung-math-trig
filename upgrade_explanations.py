#!/usr/bin/env python3
"""AI 생성 문제의 해설을 상세 업그레이드 (기초개념 + 오답 분석)"""
import json, os, sys, time, re
import urllib.request, ssl

API_KEY = os.environ.get("CLAUDE_API_KEY", "")
API_URL = "https://api.anthropic.com/v1/messages"
MODEL = "claude-haiku-4-5-20251001"
QUESTIONS_FILE = os.path.join(os.path.dirname(__file__), 'questions.js')
PROGRESS_FILE = os.path.join(os.path.dirname(__file__), 'exp_progress.json')

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
sys.stdout = open(sys.stdout.fileno(), 'w', buffering=1)

def call_api(prompt, retries=3):
    body = json.dumps({
        "model": MODEL,
        "max_tokens": 2000,
        "messages": [{"role": "user", "content": prompt}]
    }).encode()
    req = urllib.request.Request(API_URL, data=body, method='POST')
    req.add_header('x-api-key', API_KEY)
    req.add_header('anthropic-version', '2023-06-01')
    req.add_header('content-type', 'application/json')
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=60) as resp:
                data = json.loads(resp.read().decode())
                return data['content'][0]['text']
        except Exception as e:
            if attempt < retries - 1:
                time.sleep((attempt + 1) * 3)
            else:
                raise

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_progress(progress):
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f, ensure_ascii=False)

def main():
    with open(QUESTIONS_FILE, 'r') as f:
        c = f.read()
    questions = json.loads(c[c.find('['):c.rfind(']')+1])

    progress = load_progress()

    # AI 생성 문제 중 아직 업그레이드 안 된 것
    ai_indices = [(i, q) for i, q in enumerate(questions)
                  if q.get('_source') == 'ai' and q['_qid'] not in progress]

    done = sum(1 for q in questions if q.get('_source') == 'ai' and q['_qid'] in progress)
    total_ai = sum(1 for q in questions if q.get('_source') == 'ai')
    print(f"📦 AI 문제 {total_ai}개 | 완료 {done} | 남은 {len(ai_indices)}")

    if not ai_indices:
        print("✅ 모든 해설 업그레이드 완료!")
        apply_progress(questions, progress)
        return

    success = 0
    fail = 0
    start_time = time.time()

    for idx, (qi, q) in enumerate(ai_indices):
        num = done + idx + 1
        qid = q['_qid']

        choices_text = ''
        if q.get('choices'):
            choices_text = '\n'.join(q['choices'])

        prompt = f"""아래 수능 수학 삼각함수 문제의 해설을 상세하게 작성해주세요.

[문제]
{q.get('problem', '')}

[선택지]
{choices_text}

[정답]
{"①②③④⑤"[q['answer']] if q.get('answerType') == 'choice' and isinstance(q['answer'], int) and 0 <= q['answer'] <= 4 else q['answer']}

아래 형식으로 해설을 작성하세요. 다른 텍스트 없이 해설만 출력:

**[핵심 개념]**
이 문제에 필요한 기초 개념과 공식을 먼저 설명

**[풀이]**
단계별로 상세한 풀이 (KaTeX 수식 $...$ 사용)

**[정답 확인]**
정답이 맞는 이유 한 줄 정리

**[오답 분석]**
각 오답 선지가 왜 틀린지 간단히 설명 (객관식인 경우)

**[핵심 포인트]**
이 문제에서 기억할 핵심 1~2줄"""

        try:
            text = call_api(prompt)
            if text and len(text) > 100:
                progress[qid] = text.strip()
                success += 1
                elapsed = time.time() - start_time
                rate = (idx + 1) / elapsed * 60 if elapsed > 0 else 0
                eta = (len(ai_indices) - idx - 1) / (rate / 60) if rate > 0 else 0
                print(f"  ✅ [{num}/{total_ai}] {qid} | {len(text)}자 | {rate:.0f}/분 | ETA:{eta/60:.0f}분")
            else:
                fail += 1
                print(f"  ❌ [{num}/{total_ai}] {qid} | 너무 짧음")
        except Exception as e:
            fail += 1
            print(f"  ❌ [{num}/{total_ai}] {qid} | {e}")

        if (idx + 1) % 50 == 0:
            save_progress(progress)
            print(f"  💾 저장 ({len(progress)}개)")

        time.sleep(1.5)

    save_progress(progress)
    print(f"\n📊 결과: 성공 {success} | 실패 {fail} | 총 {len(progress)}/{total_ai}")
    apply_progress(questions, progress)

def apply_progress(questions, progress):
    applied = 0
    for q in questions:
        if q['_qid'] in progress:
            q['explanation'] = progress[q['_qid']]
            applied += 1
    js = 'const QUESTION_BANK = ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n'
    with open(QUESTIONS_FILE, 'w') as f:
        f.write(js)
    print(f"✅ questions.js 업데이트: {applied}문제 해설 업그레이드")

if __name__ == '__main__':
    main()
