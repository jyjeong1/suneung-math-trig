const FORMULA_BANK = [
  {
    category: "삼각함수 기본",
    formulas: [
      { name: "삼각함수 정의 (단위원)", formula: "$\\sin\\theta = y,\\quad \\cos\\theta = x,\\quad \\tan\\theta = \\frac{y}{x}$", description: "단위원 위의 점 (x, y)에서 정의된다.", example: "$\\sin 90° = 1,\\; \\cos 0° = 1$", tip: "단위원 위의 점의 좌표가 곧 (cosθ, sinθ)이다." },
      { name: "삼각함수 기본 관계", formula: "$\\sin^2\\theta + \\cos^2\\theta = 1$", description: "피타고라스 정리에서 유도되는 가장 기본적인 항등식이다.", example: "$\\sin^2 30° + \\cos^2 30° = \\frac{1}{4} + \\frac{3}{4} = 1$", tip: "$\\sin^2\\theta = 1 - \\cos^2\\theta$로 변환하여 자주 사용한다." },
      { name: "탄젠트와 사인·코사인 관계", formula: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta},\\quad 1 + \\tan^2\\theta = \\sec^2\\theta$", description: "탄젠트를 사인과 코사인으로 표현한다.", example: "$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = 1$", tip: "분모가 0이 되는 각도($90°, 270°$)에서는 정의되지 않는다." },
      { name: "특수각의 삼각함수 값", formula: "$\\sin 30° = \\frac{1}{2},\\; \\sin 45° = \\frac{\\sqrt{2}}{2},\\; \\sin 60° = \\frac{\\sqrt{3}}{2}$", description: "30°, 45°, 60°에서의 삼각함수 값을 암기한다.", example: "$\\cos 60° = \\frac{1}{2},\\; \\tan 60° = \\sqrt{3}$", tip: "sin은 0, 1/2, √2/2, √3/2, 1 순서로 외운다." },
      { name: "호도법 변환", formula: "$180° = \\pi\\text{ rad},\\quad 1° = \\frac{\\pi}{180}\\text{ rad}$", description: "각도법과 호도법(라디안)의 변환 공식이다.", example: "$60° = \\frac{\\pi}{3},\\; 90° = \\frac{\\pi}{2}$", tip: "수능에서는 호도법이 기본이다." },
      { name: "부채꼴의 호의 길이와 넓이", formula: "$l = r\\theta,\\quad S = \\frac{1}{2}r^2\\theta = \\frac{1}{2}rl$", description: "반지름 r, 중심각 θ(라디안)인 부채꼴이다.", example: "반지름 3, 중심각 $\\frac{\\pi}{3}$이면 $l = \\pi,\\; S = \\frac{3\\pi}{2}$", tip: "θ는 반드시 라디안으로 대입해야 한다." }
    ]
  },
  {
    category: "삼각함수 그래프·주기",
    formulas: [
      { name: "사인·코사인 함수 그래프", formula: "$y = a\\sin(bx + c) + d$", description: "진폭 |a|, 주기 $\\frac{2\\pi}{|b|}$, 위상이동 $-\\frac{c}{b}$, 수직이동 d이다.", example: "$y = 2\\sin(3x - \\frac{\\pi}{2}) + 1$ → 진폭 2, 주기 $\\frac{2\\pi}{3}$", tip: "주기 = $\\frac{2\\pi}{|b|}$, 진폭 = $|a|$를 빠르게 읽어내는 연습을 하자." },
      { name: "탄젠트 함수 그래프", formula: "$y = \\tan(bx + c)$의 주기: $\\frac{\\pi}{|b|}$", description: "탄젠트 함수의 주기는 사인·코사인의 절반이다.", example: "$y = \\tan 2x$의 주기 = $\\frac{\\pi}{2}$", tip: "점근선: $bx + c = \\frac{\\pi}{2} + n\\pi$" },
      { name: "삼각함수의 최댓값·최솟값", formula: "$-|a| + d \\leq a\\sin(bx+c)+d \\leq |a| + d$", description: "삼각함수의 치역은 진폭과 수직이동으로 결정된다.", example: "$y = 3\\sin x + 2$의 최댓값 5, 최솟값 $-1$", tip: "최대: $\\sin = 1$일 때, 최소: $\\sin = -1$일 때이다." },
      { name: "삼각함수의 대칭·이동", formula: "$\\sin(-\\theta) = -\\sin\\theta,\\quad \\cos(-\\theta) = \\cos\\theta$", description: "사인은 기함수, 코사인은 우함수이다.", example: "$\\sin(-30°) = -\\frac{1}{2},\\; \\cos(-60°) = \\frac{1}{2}$", tip: "sin: 원점 대칭, cos: y축 대칭" },
      { name: "삼각함수 사이 관계", formula: "$\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta,\\quad \\cos(\\frac{\\pi}{2} - \\theta) = \\sin\\theta$", description: "여각의 관계로, sin과 cos를 서로 바꿀 수 있다.", example: "$\\sin 60° = \\cos 30°$", tip: "$\\frac{\\pi}{2} \\pm \\theta$에서 sin↔cos가 바뀐다." }
    ]
  },
  {
    category: "덧셈정리",
    formulas: [
      { name: "사인 덧셈정리", formula: "$\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$", description: "두 각의 합(차)의 사인을 전개한다.", example: "$\\sin 75° = \\sin(45°+30°) = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$", tip: "sin은 'sin cos cos sin'으로 외운다 (교차 곱)." },
      { name: "코사인 덧셈정리", formula: "$\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$", description: "두 각의 합(차)의 코사인을 전개한다. 부호가 반대임에 주의.", example: "$\\cos 15° = \\cos(45°-30°) = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$", tip: "cos은 'cos cos sin sin'으로 외우고, 합이면 -, 차이면 +이다." },
      { name: "탄젠트 덧셈정리", formula: "$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}$", description: "두 각의 합(차)의 탄젠트를 구한다.", example: "$\\tan 75° = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45°\\tan 30°} = 2 + \\sqrt{3}$", tip: "분모 부호가 분자와 반대임을 기억하자." }
    ]
  },
  {
    category: "배각·반각 공식",
    formulas: [
      { name: "2배각 공식 (사인)", formula: "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$", description: "2배각의 사인은 sin과 cos의 곱의 2배이다.", example: "$\\sin 60° = 2\\sin 30°\\cos 30° = 2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$", tip: "sinα cosα = ½ sin2α로 역이용 가능하다." },
      { name: "2배각 공식 (코사인)", formula: "$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 2\\cos^2\\alpha - 1 = 1 - 2\\sin^2\\alpha$", description: "3가지 형태가 있으며, 상황에 따라 유리한 것을 선택한다.", example: "$\\cos 60° = 1 - 2\\sin^2 30° = 1 - 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$", tip: "반각 공식으로 변형: $\\cos^2\\alpha = \\frac{1+\\cos 2\\alpha}{2}$" },
      { name: "2배각 공식 (탄젠트)", formula: "$\\tan 2\\alpha = \\frac{2\\tan\\alpha}{1 - \\tan^2\\alpha}$", description: "탄젠트의 2배각 공식이다.", example: "$\\tan 2\\alpha$에서 $\\tan\\alpha = \\frac{1}{2}$이면 $\\frac{2 \\cdot \\frac{1}{2}}{1 - \\frac{1}{4}} = \\frac{4}{3}$", tip: "덧셈정리에서 α=β로 놓으면 유도된다." },
      { name: "반각 공식", formula: "$\\sin^2\\frac{\\alpha}{2} = \\frac{1-\\cos\\alpha}{2},\\quad \\cos^2\\frac{\\alpha}{2} = \\frac{1+\\cos\\alpha}{2}$", description: "cos 2배각 공식을 변형하여 얻는다.", example: "$\\cos^2 15° = \\frac{1 + \\cos 30°}{2} = \\frac{2+\\sqrt{3}}{4}$", tip: "적분에서 $\\sin^2 x$, $\\cos^2 x$를 처리할 때 필수이다." }
    ]
  },
  {
    category: "삼각함수 합성",
    formulas: [
      { name: "삼각함수 합성", formula: "$a\\sin\\theta + b\\cos\\theta = \\sqrt{a^2+b^2}\\sin(\\theta + \\phi)$", description: "여기서 $\\cos\\phi = \\frac{a}{\\sqrt{a^2+b^2}},\\; \\sin\\phi = \\frac{b}{\\sqrt{a^2+b^2}}$이다.", example: "$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4})$", tip: "최댓값 $\\sqrt{a^2+b^2}$, 최솟값 $-\\sqrt{a^2+b^2}$이 바로 나온다." },
      { name: "합차 공식 (곱→합)", formula: "$\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$", description: "두 삼각함수의 합을 곱으로 변환한다.", example: "$\\sin 50° + \\sin 10° = 2\\sin 30°\\cos 20° = \\cos 20°$", tip: "합→곱, 곱→합 변환은 수능 단골 출제 유형이다." },
      { name: "곱→합 공식", formula: "$2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$", description: "두 삼각함수의 곱을 합으로 변환한다.", example: "$2\\sin 3x\\cos x = \\sin 4x + \\sin 2x$", tip: "적분이나 극한 계산에서 유용하다." }
    ]
  },
  {
    category: "삼각방정식·부등식",
    formulas: [
      { name: "삼각방정식 기본", formula: "$\\sin\\theta = k \\;(|k| \\leq 1)$일 때 $\\theta = \\alpha + 2n\\pi$ 또는 $\\theta = \\pi - \\alpha + 2n\\pi$", description: "사인 방정식은 두 계열의 해를 갖는다.", example: "$\\sin\\theta = \\frac{1}{2}$ → $\\theta = \\frac{\\pi}{6} + 2n\\pi$ 또는 $\\frac{5\\pi}{6} + 2n\\pi$", tip: "단위원에서 수평선 y=k와 만나는 두 점을 찾으면 된다." },
      { name: "코사인 방정식", formula: "$\\cos\\theta = k$일 때 $\\theta = \\pm\\alpha + 2n\\pi$", description: "코사인 방정식은 ±로 대칭인 해를 갖는다.", example: "$\\cos\\theta = \\frac{1}{2}$ → $\\theta = \\pm\\frac{\\pi}{3} + 2n\\pi$", tip: "단위원에서 수직선 x=k와 만나는 두 점이다." },
      { name: "삼각부등식", formula: "$\\sin\\theta > k$ → 단위원에서 $y > k$인 영역", description: "삼각부등식은 단위원 또는 그래프에서 영역을 찾는다.", example: "$\\sin\\theta > \\frac{1}{2}$ → $\\frac{\\pi}{6} < \\theta < \\frac{5\\pi}{6}$ (0~2π)", tip: "그래프를 그려서 해를 구간으로 표현하는 것이 정확하다." }
    ]
  },
  {
    category: "사인법칙·코사인법칙",
    formulas: [
      { name: "사인법칙", formula: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$", description: "삼각형의 변과 대각의 사인의 비는 일정하며, 외접원 지름과 같다.", example: "$a = 2R\\sin A$로 변의 길이를 구한다.", tip: "변↔각 관계, 외접원 반지름 R을 구할 때 사용한다." },
      { name: "코사인법칙", formula: "$a^2 = b^2 + c^2 - 2bc\\cos A$", description: "세 변과 한 각의 관계를 나타낸다. 피타고라스 정리의 일반화이다.", example: "$b=3, c=5, A=60°$이면 $a^2 = 9+25-30\\cdot\\frac{1}{2} = 19$", tip: "세 변을 알 때 각을 구할 수 있다: $\\cos A = \\frac{b^2+c^2-a^2}{2bc}$" },
      { name: "삼각형 넓이 공식", formula: "$S = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B$", description: "두 변과 끼인각의 사인으로 넓이를 구한다.", example: "$a=4, b=6, C=30°$이면 $S = \\frac{1}{2}\\cdot4\\cdot6\\cdot\\frac{1}{2} = 6$", tip: "헤론의 공식보다 수능에서 훨씬 자주 출제된다." },
      { name: "헤론의 공식", formula: "$S = \\sqrt{s(s-a)(s-b)(s-c)},\\quad s = \\frac{a+b+c}{2}$", description: "세 변의 길이만으로 넓이를 구한다.", example: "$a=3, b=4, c=5$이면 $s=6$, $S = \\sqrt{6\\cdot3\\cdot2\\cdot1} = 6$", tip: "세 변을 알고 각을 모를 때 유용하지만, 수능에서는 코사인법칙 후 넓이 공식이 더 일반적이다." }
    ]
  }
];
