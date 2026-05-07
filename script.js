const processStages = [
  {
    id: "prepare",
    phase: "准备阶段",
    title: "挖掘故事，形成讲座大纲初稿",
    summary: "从导师自身故事出发，先把主题、对象、场景和核心问题写清楚。",
    intro:
      "研发流程的起点不是先做 PPT，而是先回答：这场讲座到底要帮助学生理解什么、感受到什么、开始做什么。",
    outputs: ["讲座大纲初稿", "主题方向判断", "学生对象与场景说明"],
    actions: [
      "挖掘宣讲人自身故事，先找真实冲突、关键转折和方法变化。",
      "明确适用年级、讲座场景和主题模块。",
      "用 1-2 页内容先讲清楚这场讲座的结构，而不是一上来做满页 PPT。",
    ],
    focus: [
      "别急着讲履历，先找学生最能共鸣的那个问题。",
      "讲座大纲必须能回答“这和学生有什么关系”。",
    ],
  },
  {
    id: "outline",
    phase: "一轮打磨",
    title: "主题大纲打磨",
    summary: "把最初的讲述欲，打磨成有明确结构和主线的问题解决方案。",
    intro:
      "这一轮重点不在漂亮表达，而在逻辑成立。教研视角会先看：讲座有没有主线、有没有问题意识、有没有学生视角。",
    outputs: ["主题大纲", "核心故事段落", "初步方法框架"],
    actions: [
      "检查讲座是否有一条清晰主线，而不是多个想讲点的简单拼接。",
      "确认故事、观点、方法之间是否存在自然过渡。",
      "筛掉和学生关系不大的履历式内容。",
    ],
    focus: [
      "一场讲座最好只抓一个主矛盾，不要把五个主题一次讲完。",
      "导师需要先想清楚：学生听完整场后最该带走哪一句话。",
    ],
  },
  {
    id: "ppt",
    phase: "二轮打磨",
    title: "逐字稿与 PPT 打磨",
    summary: "把结构进一步落成可讲的内容，形成逐字稿、PPT 和页面顺序。",
    intro:
      "这一轮是把“知道要讲什么”推进到“知道怎么讲出来”。逐字稿和 PPT 都服务于表达，而不是替代表达。",
    outputs: ["逐字稿", "PPT 草稿", "关键互动设计"],
    actions: [
      "按开场、案例、方法、互动、结尾补齐完整内容。",
      "让 PPT 只承载提示、结构和关键视觉，不把整段话堆进页面。",
      "提前设计互动方式，确认它是为内容服务而不是单纯活跃气氛。",
    ],
    focus: [
      "新导师非常适合写逐字稿，但正式上台前要把逐字稿练成自己的话。",
      "每一页都可以反问一句：这页是为了帮助学生理解什么、做到什么、感受到什么。",
    ],
  },
  {
    id: "rehearsal",
    phase: "三轮打磨",
    title: "PPT 打磨与试讲",
    summary: "把纸面内容变成真实表达，暴露节奏、音量、互动和过渡的问题。",
    intro:
      "很多问题只有一开口才会暴露。比如节奏拖沓、案例太长、方法太空、互动收不回来，试讲就是为了把这些问题提前暴露。",
    outputs: ["试讲版本", "PPT 终稿方向", "节奏与互动反馈"],
    actions: [
      "完整试讲一遍，确认时间是否落在可控范围内。",
      "观察哪些段落学生最容易进入，哪些段落最容易掉线。",
      "调整故事长短、页数节奏和互动位置。",
    ],
    focus: [
      "试讲时重点听有没有‘能打动人但不知能做什么’或‘方法很多但没有记忆点’的问题。",
      "PPT 终稿应当在试讲后再收敛，而不是试讲前就完全定死。",
    ],
  },
  {
    id: "review",
    phase: "四轮打磨",
    title: "教研评审与正式定稿",
    summary: "由教研组评审讲座试讲效果，完成内容、表达和交付质量的最后校准。",
    intro:
      "到这一步，讲座已经不是个人表达练习，而是组织级内容资产。需要从学生效果、讲座稳定性和可复制性三个角度看。",
    outputs: ["评审反馈", "演讲考核结果", "正式交付版本"],
    actions: [
      "根据评审意见优化大段表达、案例顺序和方法比重。",
      "确认场景适配度，例如大礼堂、年级会、班会、冲刺动员是否都能成立。",
      "对关键话术、核心互动和结尾行动号召做最后打磨。",
    ],
    focus: [
      "优秀内容要能复盘、可迭代、可复制，而不是只靠个人天赋发挥。",
      "评审最关注的是学生能否听进去，而不是导师讲得有没有‘热血感’。",
    ],
  },
  {
    id: "delivery",
    phase: "交付阶段",
    title: "线下交付与复盘入库",
    summary: "前往县域学校交付讲座，并将成熟内容沉淀回导师内容库。",
    intro:
      "真正的讲座研发直到现场交付和复盘完成才算结束。复盘不是补手续，而是帮助下一场讲得更稳、更准。",
    outputs: ["线下交付", "现场反馈", "内容复盘与入库"],
    actions: [
      "课前对齐校方场景、设备、时间和学生状态。",
      "现场讲座完成后记录互动反应、常见问题和时间使用情况。",
      "把有效内容沉淀为后续可复用版本，进入组织内容库。",
    ],
    focus: [
      "交付不是‘上去讲完’，而是保证学生体验、现场节奏和互动质量。",
      "优秀讲座经过验证后，才会真正变成组织资产。",
    ],
  },
];

const modules = [
  {
    id: "goal",
    icon: "🎯",
    name: "目标力",
    tagline: "让每一个孩子找到学习的动力",
    summary:
      "“目标力”不是单纯讲梦想，也不是让学生喊口号、写愿望。它要帮助学生建立一种方向感。",
    badges: ["可能自我", "自我决定理论", "SMART 目标法"],
    quickFacts: [
      { label: "适用对象", value: "经济不发达地区县域学生" },
      { label: "典型场景", value: "励志讲座、升学动员、学习动力不足专题" },
      { label: "核心问题", value: "我为什么还要继续读书" },
    ],
    pdf: "./assets/docs/🎯 目标力模块工具包 副本.pdf",
    tabs: [
      {
        id: "overview",
        label: "主题解读",
        blocks: [
          {
            title: "这门讲座真正要回答什么",
            items: [
              "我为什么还要继续读书。",
              "读书到底能给我带来什么。",
              "我现在坚持的意义是什么。",
              "为什么一个人需要尽早建立方向感。",
              "当条件有限时，我还能不能争取一种不一样的人生路径。",
            ],
          },
          {
            title: "面对的典型学生画像",
            items: [
              "家庭经济条件有限，很早就接触“出去打工赚钱”的路径。",
              "对大学、职业、城市、行业缺少具体想象。",
              "容易觉得“读书离自己很远，赚钱离自己很近”。",
              "对未来缺少图景，对当下缺少动力，通过读书取得成功的样本有限。",
            ],
          },
          {
            title: "导师备课前要提醒自己",
            text:
              "这不是一群已经相信“读书有用”的学生，而是一群正在认真怀疑这件事的学生。所以目标力不能一上来就讲理想、使命、热爱，而要帮助他们回答“读书的价值到底是什么”。",
          },
        ],
      },
      {
        id: "story",
        label: "故事切入",
        blocks: [
          {
            title: "目标力主题最值得挖的五个方向",
            items: [
              "我是在什么情况下开始有目标的。",
              "我曾经是否怀疑、会动摇，为什么没有停下。",
              "我后来遇到了什么事件、什么人、什么机会。",
              "我先改变了哪一件事，给自己定过什么小目标。",
              "我最后得到的，不只是成绩，还有什么变化。",
            ],
          },
          {
            title: "更贴合县域学生的三种叙事",
            items: [
              "走出去，看见更大的世界。",
              "走出去，再决定怎么回来。",
              "即使不离开，也更有选择。",
            ],
          },
          {
            title: "一个重要提醒",
            text:
              "县域场景里的目标力故事，最好不要讲成“逃离”。更适合强调：读书让人拥有更大的视野、更强的判断力和更多的选择权。",
          },
        ],
      },
      {
        id: "tools",
        label: "方法工具",
        blocks: [
          {
            title: "可能自我",
            items: [
              "不直接追问“你的梦想是什么”，而是引导学生想：我可能成为谁、我希望成为谁、我最不想变成谁。",
              "可以从“我想争取什么”“我最不想失去什么”“我最害怕后悔什么”这些问题打开方向感。",
            ],
          },
          {
            title: "自我决定理论",
            items: [
              "帮助学生从“别人告诉我读书重要”，慢慢走到“我自己开始相信，读书对我有用”。",
              "围绕自主性、胜任感、关系感三个维度解释为什么很多目标看起来正确，却始终没有持续行动动力。",
            ],
          },
          {
            title: "SMART 目标法",
            items: [
              "SMART 帮学生把“我要努力”变成可以被说清楚、拆下来、做起来的目标。",
            ],
          },
        ],
      },
      {
        id: "interaction",
        label: "互动设计",
        blocks: [
          {
            title: "这类主题更适合的互动原则",
            items: [
              "学生一听就能代入。",
              "不需要长时间发言。",
              "能自然接到导师自己的故事或后面的理论。",
            ],
          },
          {
            title: "互动一：猜猜哪个是真的",
            text:
              "导师给出自己身上的三条信息，让学生猜哪一条是真的，或哪一条后来真的实现了。它特别适合拆掉“优秀的人从小就目标明确”的距离感。",
          },
          {
            title: "互动二：举手判断——你更像哪一种",
            text:
              "围绕“总被游戏带走”“想到成绩就先觉得自己不行”“我没有具体目标”“我说要努力但总开始不了”等状态让学生举手，帮助他们完成快速对号入座。",
          },
        ],
      },
      {
        id: "script",
        label: "逐字稿",
        blocks: [
          {
            title: "目标力讲座建议结构",
            items: [
              "开场：先破除预期，不空讲梦想，也不直接讲大道理。",
              "导师故事引入：讲自己的迷茫、关键转折和目标如何慢慢被认领。",
              "方法论：可能自我、自我决定理论、SMART 目标法。",
              "互动：猜测判断、举手判断，根据个人故事自然承接。",
              "结尾：行动呼吁、价值升华、Q&A。",
            ],
          },
        ],
      },
      {
        id: "faq",
        label: "FAQ",
        qas: [
          {
            q: "如果我的目标一开始其实是父母、老师希望我有的，那还算目标吗？",
            a: "很真实，也很常见。关键不在于这个目标是不是别人提出来的，而在于你能不能慢慢想清楚：这件事和我自己有什么关系，我愿不愿意把它变成自己也认领的方向。",
          },
          {
            q: "我现在连未来做什么都不知道，那我还需要想目标吗？",
            a: "需要，但不一定是一开始就特别完整、特别长远的目标。也可以先从“我不想一直停在这里”“我最不想成为什么样的人”开始。",
          },
          {
            q: "读书真的能改变什么吗？",
            a: "读书不一定让每个人一下子变得多成功，但它确实能让你以后多一点选择、多一点判断力，也不至于太早把人生的路走窄。",
          },
        ],
      },
    ],
  },
  {
    id: "resilience",
    icon: "💪",
    name: "心理韧性",
    tagline: "让每一个孩子在挫折中成长",
    summary:
      "心理韧性不是永远稳定，而是在面对逆境、压力、失误和不确定时，仍能逐步恢复基本稳定并继续行动。",
    badges: ["六大核心能力", "成长型思维", "三步重建信心法", "支持帮助系统"],
    quickFacts: [
      { label: "适用对象", value: "初中及高中高一、高二学生" },
      { label: "讲座定位", value: "成长支持型，而非单纯提分课" },
      { label: "核心问题", value: "怎么在波动中慢慢恢复节奏" },
    ],
    pdf: "./assets/docs/💪 心理韧性模块工具包 副本.pdf",
    tabs: [
      {
        id: "overview",
        label: "主题解读",
        blocks: [
          {
            title: "心理韧性的价值",
            items: [
              "遇到挫折时，不会被一次结果完全击垮。",
              "情绪波动后，能够慢慢恢复节奏。",
              "面对压力时，能把问题拆开，而不是被情绪淹没。",
              "即使状态不佳，也还能恢复一点行动能力。",
            ],
          },
          {
            title: "学生常见风险点",
            items: [
              "一次失利后全盘否定自己，把阶段性问题看成永久性问题。",
              "压力一直累积在心里，不会表达情绪，最后靠崩溃来释放。",
              "被他人的比较和评价拖垮，总觉得自己落后。",
            ],
          },
          {
            title: "导师讲解的基本姿态",
            text:
              "要帮助学生意识到：压力、失落和波动在成长中并不罕见，关键在于能否逐步看清自己的状态，并学会寻求支持、调整认知和恢复行动。",
          },
        ],
      },
      {
        id: "story",
        label: "故事切入",
        blocks: [
          {
            title: "可优先调动的三类个人经历",
            items: [
              "挫折经历：一次失败、失利或被否定后的感受与后续调整。",
              "压力经历：长期高压、疲惫、情绪起伏时的真实状态。",
              "比较经历：被同伴、成绩、评价牵动时，情绪如何受影响、又如何慢慢稳定。",
            ],
          },
          {
            title: "故事分享重点",
            text:
              "重点放在“当时遇到了什么问题、通过习得什么心态调整方法，最后是怎么理解和调整的”，而不是只展示自己现在已经恢复得很好。",
          },
          {
            title: "外部素材怎么用",
            text:
              "名人经历、体育人物案例、社会热点都可以用，但核心一定是“经历—反应—调整—恢复”的过程，而不是名气本身。",
          },
        ],
      },
      {
        id: "tools",
        label: "方法工具",
        blocks: [
          {
            title: "心理韧性的六大核心能力",
            items: [
              "情绪识别能力：能觉察并说清自己当前的情绪。",
              "压力拆解能力：能把笼统压力拆成学业、比较、评价、人际等具体来源。",
              "认知调整能力：不把一次结果直接等同于对整个人的否定。",
              "恢复行动能力：波动后还能从一个小任务开始恢复节奏。",
              "耐受能力：接受成长中存在失误、起伏和不确定。",
              "求助能力：知道找谁说、如何获取支持。",
            ],
          },
          {
            title: "固定型思维 VS 成长型思维",
            text:
              "要帮助学生把“我就是不行”转成“我这次还没有处理好”“我现在先解决下一步”，让比较和评价从定义自我，变成提供信息。",
          },
          {
            title: "三步重建信心法与支持帮助系统",
            items: [
              "第一步接纳情绪，允许自己难过，但不沉溺。",
              "第二步寻找学习点，把“我很糟糕”转回“这件事到底发生了什么”。",
              "第三步制定一个小而具体、可以马上开始的行动计划。",
              "同时帮助学生知道：支持不只来自自己，还包括家人、老师、朋友和专业支持。",
            ],
          },
        ],
      },
      {
        id: "interaction",
        label: "互动设计",
        blocks: [
          {
            title: "互动一：情绪状态互动",
            text:
              "开场 3 分钟内请学生用一个词形容最近的情绪，让他们先进入主题，建立“心理韧性和每个人都有关”的课堂真实感。",
          },
          {
            title: "互动二：给自己一句话",
            text:
              "把固定型表达替换成更具体、更有行动感的句子，再邀请全场齐声读一遍，让成长型思维从概念变成身体体验。",
          },
          {
            title: "使用原则",
            text:
              "心理韧性主题更适合轻量、直接、可快速响应的互动，目的在于帮助学生建立共鸣和一点点自我觉察，而不是做重型游戏。",
          },
        ],
      },
      {
        id: "script",
        label: "逐字稿",
        blocks: [
          {
            title: "心理韧性讲座建议结构",
            items: [
              "开场：从学生成长中常见的波动、焦虑、比较切入。",
              "案例引入：用导师个人经历或学生熟悉的社会案例，让他们理解情绪波动的普遍性。",
              "方法论：六大核心能力、成长型思维、三步重建信心法、支持帮助系统。",
              "互动：选择 1-2 个轻量互动帮助学生完成自我觉察。",
              "结尾：总结、行动落点、价值升华、Q&A。",
            ],
          },
        ],
      },
      {
        id: "faq",
        label: "FAQ",
        qas: [
          {
            q: "我知道自己不能总和别人比，但我忍不住要比较，怎么办？",
            a: "比较很正常，更现实的做法是减少“比较完之后直接否定自己”这一步，不让比较代替对自我的判断。",
          },
          {
            q: "向他人开口寻求心理帮助，我觉得很羞耻怎么办？",
            a: "可以先从低门槛方式开始，比如先说一个具体问题、找一个更安全的人、先写下来再决定要不要说出口。很多时候真正开口以后，会比想象中容易一些。",
          },
          {
            q: "我一直沉浸在负面情绪里走不出来，怎么办？",
            a: "先承认情绪，缩小问题范围，再尽快让一个信任的人知道。如果这种状态已经持续多天并明显影响睡眠、学习和日常生活，寻求专业支持更重要。",
          },
        ],
      },
    ],
  },
  {
    id: "study",
    icon: "📚",
    name: "学习方法",
    tagline: "让每一个孩子掌握高效学习的秘诀",
    summary:
      "学习方法是指在学习过程中提高效率、减少浪费的技巧和策略，但它最容易被讲成空泛的“学霸经验”。",
    badges: ["时间管理", "高效笔记", "复习方法", "知识体系", "错题整理"],
    quickFacts: [
      { label: "适用对象", value: "多个年龄段，但要按学段调整深浅" },
      { label: "典型问题", value: "学很久却记不住、刷题多却不改错" },
      { label: "讲法提醒", value: "少讲万能公式，多讲真实调整过程" },
    ],
    pdf: "./assets/docs/📚 学习方法模块工具包 副本.pdf",
    tabs: [
      {
        id: "overview",
        label: "主题解读",
        blocks: [
          {
            title: "学生最常见的学习方法问题",
            items: [
              "死记硬背，不理解。",
              "刷题很多，但不改错。",
              "笔记记得很好，但不看。",
              "假努力：学习 10 小时但没效率。",
            ],
          },
          {
            title: "这类主题最容易讲空的原因",
            items: [
              "方法罗列过多，重点不清。",
              "讲成“学霸经验”，普通学生难以代入。",
              "讲完以后学生觉得有道理，但不知道该怎么做。",
            ],
          },
          {
            title: "按学段调整重点",
            items: [
              "小学高年级至初一：学习习惯、任务拆分、如何消化课堂内容。",
              "初二、高一、高二：错题整理、时间管理、练习与复盘衔接。",
              "初三、高三：错题与高频失误处理、考试时间分配、考前冲刺节奏。",
            ],
          },
        ],
      },
      {
        id: "story",
        label: "故事切入",
        blocks: [
          {
            title: "有效开头要达到的三个目标",
            items: [
              "让学生迅速产生代入感。",
              "让导师建立可信度，证明自己真的懂学生在卡什么。",
              "为后文的方法部分搭桥，而不只是吸引注意力。",
            ],
          },
          {
            title: "个人经历更适合讲哪些片段",
            items: [
              "以前的方法为什么效果不明显。",
              "后来是怎么改变、找到适合自己的学习方法。",
              "改变后的学习状态和学习成果。",
              "一段“我以前也这样”的经历，往往比冗长成功故事更有用。",
            ],
          },
          {
            title: "热点素材怎么辅助",
            text:
              "可以从 AI 工具、短视频对专注力的影响、效率焦虑等现实话题切入，但进入主题后，通常还是故事比热点更有效。",
          },
        ],
      },
      {
        id: "tools",
        label: "方法工具",
        blocks: [
          {
            title: "时间管理",
            items: [
              "借艾森豪威尔矩阵帮助学生判断：哪些事情应该先做，哪些事情可以安排到后面，哪些事情不值得现在花太多时间。",
              "重点落在“重要但不紧急”的第二象限，因为预习、复习、错题整理和薄弱补救最决定长期成绩。",
            ],
          },
          {
            title: "高效记笔记",
            items: [
              "先记知识点框架、老师讲题思路、提醒和自己的总结，不是照抄每一句话。",
              "笔记不要写太满，语言尽量简洁，听懂优先于记全。",
            ],
          },
          {
            title: "复习方法、知识体系与错题整理",
            items: [
              "借艾宾浩斯遗忘曲线帮助学生理解：忘记是正常的，所以当天复习、间隔复习和多次复习都重要。",
              "知识体系强调从碎片知识点走向结构化网络，避免题目一变形就不会。",
              "错题本不能做成抄题本，关键是分清错因、回到知识点、优先抓重复错和高频错。",
            ],
          },
        ],
      },
      {
        id: "interaction",
        label: "互动设计",
        blocks: [
          {
            title: "互动一：举手判断，你最像哪一种",
            text:
              "围绕“听懂了但做题不会”“题做了不少但同类错误总重复”“背了很多但总忘”“每天很忙却没抓到重点”等状态举手，快速建立代入感。",
          },
          {
            title: "互动二：真假判断——这算学会了吗？",
            text:
              "让学生对“看答案时觉得明白了”“老师一讲觉得听懂了”“知识点能背出来但不会用”等场景做真假判断，区分“看懂了”和“真正学会了”。",
          },
          {
            title: "互动三：猜猜老师当年是哪一种",
            text:
              "用故事反差打破“名校导师从小就会学习”的刻板印象，让学生看到导师也经历过忙、乱、不会学的阶段。",
          },
        ],
      },
      {
        id: "script",
        label: "逐字稿",
        blocks: [
          {
            title: "学习方法讲座建议结构",
            items: [
              "开场：不是讲学霸秘诀，也不是讲一堆新要求，而是解释为什么有些同学很努力却还是学得累、记不住、做不对。",
              "案例引入：点出四种学习状态，再接导师故事或热点素材。",
              "方法论：时间管理、高效记笔记、复习方法、知识体系、错题整理三步法。",
              "互动：优先选择适合千人讲座的举手判断和真假判断。",
              "结尾：总结、行动呼吁、价值升华、Q&A。",
            ],
          },
        ],
      },
      {
        id: "faq",
        label: "FAQ",
        qas: [
          {
            q: "我也知道这些方法有用，但就是坚持不下来，怎么办？",
            a: "先把标准降下来，不要一开始就要求自己做得很完整。方法能不能坚持，很多时候和起步门槛有关，先从最小的一个动作开始。",
          },
          {
            q: "我总觉得自己听课能听懂，但一做题就不会，怎么办？",
            a: "这是很典型的“听懂了，但没学透”。可以顺势引到知识体系：把知识点与练习题联系起来，而不是只停留在“老师讲过”。",
          },
          {
            q: "错题本我也做过，但没什么用，怎么办？",
            a: "很多学生不是没做过错题本，而是做成了抄题本。真正关键的是：有没有分清错在哪里、有没有回顾、有没有重复出错。",
          },
        ],
      },
    ],
  },
  {
    id: "career",
    icon: "🧭",
    name: "生涯规划",
    tagline: "让每一个孩子看见更大的世界",
    summary:
      "生涯规划的重点，不是让学生马上选出标准答案，而是更早理解升学、专业、职业之间是相互关联的。",
    badges: ["5 Steps", "选科规划", "升学路径", "专业认知", "School Research"],
    quickFacts: [
      { label: "适用对象", value: "希望拓展视野、建立方向感的中学生" },
      { label: "核心价值", value: "方向感、路径感、判断能力" },
      { label: "典型误区", value: "只看分数、只看热度、只看单一路径" },
    ],
    pdf: "./assets/docs/🧭 生涯规划模块工具包.pdf",
    tabs: [
      {
        id: "overview",
        label: "主题解读",
        blocks: [
          {
            title: "为什么要讲生涯规划",
            items: [
              "帮助学生和家长更早理解：未来的升学、专业选择与职业发展是相互关联的。",
              "帮助学生建立基本的方向感、路径感与判断能力，而不是只会被动接受信息。",
            ],
          },
          {
            title: "越早开始越重要",
            items: [
              "升学准备前置：选科、多元升学准备、背景积累都不能等到高三才开始。",
              "试错成本上升：越晚思考，后续调整的时间、精力和机会成本越高。",
              "外部变化加快：专业与行业变化迅速，需要更早建立动态认知。",
            ],
          },
          {
            title: "生涯规划最常见的三类误区",
            items: [
              "信息偏差：不清楚大学、专业、行业和职业的真实情况。",
              "自我偏差：高估或低估自己，把一次成绩当成对能力和兴趣的判断。",
              "路径偏差：默认升学只有高考竞争一条路，对多元路径了解不足。",
            ],
          },
        ],
      },
      {
        id: "story",
        label: "故事切入",
        blocks: [
          {
            title: "导师最适合分享的三类经历",
            items: [
              "升学经验：当年的升学路径如何形成，如何做选科、选学校、选专业判断。",
              "专业经验：专业实际学习内容与最初想象之间的差异。",
              "职业经验：当前工作与大学专业的关系，职业路径是否经历过调整或转向。",
            ],
          },
          {
            title: "热点材料怎么用",
            items: [
              "教育政策变化：新高考、选科要求、多元升学路径。",
              "就业与行业变化：专业与就业并不完全一一对应。",
              "社会讨论：名校光环、转专业、考研考编升温、年轻人职业焦虑。",
            ],
          },
          {
            title: "开讲结构建议",
            items: [
              "先从学生熟悉的现实问题切入。",
              "再用个人经历、热点素材或外部案例补充现实感。",
              "接着落下本场讲座的核心观点。",
              "最后再进入升学路径、专业认知、职业地图或目标设定等工具。",
            ],
          },
        ],
      },
      {
        id: "tools",
        label: "方法工具",
        blocks: [
          {
            title: "5 Steps 总框架",
            text:
              "生涯规划不是一次性的“选答案”，而是持续认识自己、理解外部世界、形成方向并不断调整的过程。它可以帮助学生从“我是谁”走到“我要怎么走”。",
          },
          {
            title: "学业规划",
            items: [
              "选科规划：理解选科与专业、升学路径、长期方向的关系。",
              "升学路径规划：帮助学生建立“升学不只有一条路”的整体认知。",
              "志愿填报规划：学校、专业、城市、培养方式与未来方向之间的综合判断。",
            ],
          },
          {
            title: "导师讲这部分时要抓住什么",
            items: [
              "不要替学生直接给答案，更重要的是教他们如何做判断。",
              "不要把任何路径包装成捷径，而要讲清要求、准备方式与潜在风险。",
              "专业不能只看名字，关键是学习内容、培养方式与后续发展路径。",
            ],
          },
        ],
      },
      {
        id: "interaction",
        label: "互动设计",
        blocks: [
          {
            title: "互动一：自我认知工具",
            text:
              "可借助 MBTI、霍兰德等轻量自我探索工具，让学生圈画关键词、描述自己的行为倾向和决策方式。重点不在固定类型，而在帮助他们更具体地描述自己。",
          },
          {
            title: "互动二：学校 / 专业认知工具",
            text:
              "用 School Research 引导学生通过学校官网、本科招生网和院系页面查学校特点、专业内容、培养方式与未来去向，而不是只依赖分数线和名称印象。",
          },
          {
            title: "互动的目标",
            text:
              "帮助学生从“听懂”进一步走向“会说、会想、会判断”，把抽象的生涯规划转成可以操作的探索动作。",
          },
        ],
      },
      {
        id: "script",
        label: "逐字稿",
        blocks: [
          {
            title: "生涯规划讲座建议结构",
            items: [
              "开场：从学生熟悉的现实问题切入，让他们意识到生涯规划已经和当下学习、选科与目标有关。",
              "现实 / 案例引入：用导师经历或热点案例解释为什么同样努力，最后的选择和结果会差很多。",
              "方法框架：从选科、升学路径、专业认知、职业方向入手，把零散困惑整理成可逐步思考的问题。",
              "互动：让学生说出自己更感兴趣的方向、想进一步了解的学校或下一步最需要查什么。",
              "结尾：总结、价值收束、行动呼吁、Q&A。",
            ],
          },
        ],
      },
      {
        id: "faq",
        label: "FAQ",
        qas: [
          {
            q: "我现在完全不知道自己想做什么，怎么办？",
            a: "这是很常见的情况。可以先从“我擅长什么、我不喜欢什么、我想进一步了解什么”开始，不要急着给自己一个完美答案，先进入探索。",
          },
          {
            q: "家长只看重分数怎么办？",
            a: "分数高当然会带来更多选择空间，但“分数高”解决的是能不能进去，“适不适合”解决的是进去以后能不能走得长远。",
          },
          {
            q: "选科和生涯规划冲突怎么办？",
            a: "先分清楚冲突在哪：是兴趣和成绩冲突，还是选科要求和目标专业冲突。更有效的做法是先看硬性要求，再看哪些空间可以调整。",
          },
        ],
      },
    ],
  },
  {
    id: "sprint",
    icon: "⏰",
    name: "备考冲刺",
    tagline: "让每一个孩子在最后时刻实现突破",
    summary:
      "冲刺阶段最重要的，不是做得更多，而是做得更准、更有针对性，并且拥有更稳定的心态和节奏。",
    badges: ["自我分析", "时间管理", "复习策略", "错题整理", "冲刺互动"],
    quickFacts: [
      { label: "适用对象", value: "初三、高三，尤其考前 100 天左右" },
      { label: "典型问题", value: "焦虑、没有优先级、计划落实困难、考场崩盘" },
      { label: "核心目标", value: "把有限时间用在最值得解决的问题上" },
    ],
    pdf: "./assets/docs/⏰ 备考冲刺模块工具包 副本.pdf",
    tabs: [
      {
        id: "overview",
        label: "主题解读",
        blocks: [
          {
            title: "备考冲刺最常见的现实问题",
            items: [
              "焦虑紧张，无法复习。",
              "复习没有优先级。",
              "计划很多但落实困难，效率低下。",
              "考试时心态崩盘。",
            ],
          },
          {
            title: "为什么这个主题特别重要",
            text:
              "很多学生在冲刺阶段的问题，大多数不是不知道要努力，而是不知道怎么抓重点、怎么安排时间、怎么稳住心态。最后阶段真正重要的是做得更准、更有针对性。",
          },
          {
            title: "导师可以先帮学生区分的三类问题",
            items: [
              "认知问题：什么都想做、没有优先级、不知道哪些最值得补救。",
              "执行问题：计划很满但执行混乱、刷题很多却没有复盘、每天很累但没有推进感。",
              "状态问题：越临近考试越崩溃、一次失利后明显失去信心、持续性焦虑和疲惫。",
            ],
          },
        ],
      },
      {
        id: "story",
        label: "故事切入",
        blocks: [
          {
            title: "最适合讲的备考经历",
            items: [
              "当年冲刺阶段最容易踩的坑是什么。",
              "什么时候开始意识到“不是做得越多越好”。",
              "最后阶段真正帮助自己提分的是什么。",
              "自己如何处理焦虑、疲惫、失控感和自我怀疑。",
            ],
          },
          {
            title: "开讲结构建议",
            items: [
              "背景切入：先说大部分学生冲刺时最常见的现象。",
              "经验补充：结合导师自己的备考经历，增强可信度。",
              "观点落点：确认本场讲座的主题和核心矛盾。",
              "进入方法：再展开自我分析、时间管理、复习策略、心态管理。",
            ],
          },
        ],
      },
      {
        id: "tools",
        label: "方法工具",
        blocks: [
          {
            title: "备考前的自我分析策略",
            items: [
              "先看分数定位和区间判断，而不是先被情绪带走。",
              "把目标分成保底、合理、冲刺三个层次。",
              "区分保分学科、提分学科和高风险学科。",
              "把题型问题拆成“不会”“不熟”“会但总错”。",
              "识别自己的高效时间、低效时间和被浪费的时间。",
            ],
          },
          {
            title: "时间管理策略",
            items: [
              "备考阶段先判断现在更应该查漏补缺、重点突破还是稳定发挥。",
              "以周为最实用单位，先定本周最重要的 2-3 件事。",
              "日安排至少区分攻坚任务、巩固任务、复盘任务。",
              "考场时间管理强调预算、取舍、止损、检查，而不是单纯做得快。",
            ],
          },
          {
            title: "复习策略与错题整理",
            items: [
              "高频优先：优先回收高频考点和常错题型。",
              "错题回收：不只重做，更要分析错因、归类问题、回到知识点。",
              "真题训练：练节奏、练顺序、练考感和稳定性。",
              "学会保分：先稳基础题和中档题，再谈难题突破。",
            ],
          },
        ],
      },
      {
        id: "interaction",
        label: "互动设计",
        blocks: [
          {
            title: "互动一：激活讲座氛围",
            text:
              "用快速举手、齐答或现场回应让学生先进入状态，再切到“你更像认知问题、执行问题，还是状态问题”。",
          },
          {
            title: "互动二：梦想宣誓环节",
            text:
              "在结尾邀请学生在心里确定自己最先要处理的一件事，再用统一动作和口号完成一次公开承诺。",
          },
          {
            title: "互动三：冲刺口令互动",
            text:
              "总结完核心内容后，全场齐声回应，把“我知道了”推到“我准备行动了”。这种互动很适合冲刺类主题的收束。",
          },
        ],
      },
      {
        id: "script",
        label: "逐字稿",
        blocks: [
          {
            title: "备考冲刺讲座建议结构",
            items: [
              "开场：从学生常见的冲刺问题切入，抛出“最后阶段最容易拉开差距的，到底是多学一点，还是学得更有重点”。",
              "案例引入：讲导师自己的备考经验，并引导学生代入认知、执行、状态三类痛点。",
              "方法论：自我分析、时间管理、复习策略、错题整理策略。",
              "互动：根据重点选择 1-2 个互动工具。",
              "结尾：总结、行动落点、价值升华、Q&A。",
            ],
          },
        ],
      },
      {
        id: "faq",
        label: "FAQ",
        qas: [
          {
            q: "学生觉得来不及了怎么办？",
            a: "最后阶段不等于来不及。关键是先分清哪些内容最值得优先抓、哪些分最值得先保住，而不是试图把所有内容重来一遍。",
          },
          {
            q: "我每天学很久，但还是觉得没有进步，怎么办？",
            a: "先分析最近的学习有没有明确重点、错题和失分问题有没有真正分析原因、时间是不是花在了优先级任务上。",
          },
          {
            q: "一想到考试结果就很紧张，怎么办？",
            a: "这种紧张很多时候来自对结果的过度提前想象。把注意力从结果拉回最近几天能处理的具体任务上：今天先完成什么、这两天先稳住什么、下次测试先改掉哪个问题。",
          },
        ],
      },
    ],
  },
];

const processNav = document.querySelector("#process-nav");
const processDetail = document.querySelector("#process-detail");
const moduleCards = document.querySelector("#module-cards");
const moduleDetail = document.querySelector("#module-detail");
const progressBar = document.querySelector("#scroll-progress-bar");

const state = {
  activeProcessId: processStages[0].id,
  activeModuleId: modules[0].id,
  activeModuleTab: modules[0].tabs[0].id,
};

function renderList(items) {
  return `<ul class="clean-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderBlocks(blocks = []) {
  return blocks
    .map((block) => {
      const title = block.title ? `<h4>${block.title}</h4>` : "";
      const text = block.text ? `<p>${block.text}</p>` : "";
      const items = block.items ? renderList(block.items) : "";
      return `<article class="module-block">${title}${text}${items}</article>`;
    })
    .join("");
}

function renderModuleFaq(qas = []) {
  return `
    <div class="module-faq">
      ${qas
        .map(
          (item) => `
            <details>
              <summary>${item.q}</summary>
              <p>${item.a}</p>
            </details>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProcessNav(activeId) {
  processNav.innerHTML = processStages
    .map(
      (stage, index) => `
        <button class="process-step ${stage.id === activeId ? "is-active" : ""}" data-process-id="${stage.id}">
          <small>0${index + 1} / ${stage.phase}</small>
          <strong>${stage.title}</strong>
        </button>
      `
    )
    .join("");
}

function renderProcessDetail(activeId) {
  const stage = processStages.find((item) => item.id === activeId) || processStages[0];

  processDetail.innerHTML = `
    <div class="process-detail-header">
      <div>
        <span class="process-badge">${stage.phase}</span>
        <h3>${stage.title}</h3>
        <p>${stage.intro}</p>
      </div>
      <span class="chip">讲座研发流程</span>
    </div>

    <div class="process-panels">
      <article class="process-panel">
        <h4>关键动作</h4>
        ${renderList(stage.actions)}
      </article>
      <article class="process-panel">
        <h4>本阶段交付物</h4>
        ${renderList(stage.outputs)}
      </article>
      <article class="process-panel">
        <h4>导师重点关注</h4>
        ${renderList(stage.focus)}
      </article>
      <article class="process-panel">
        <h4>阶段目标</h4>
        <p>${stage.summary}</p>
      </article>
    </div>
  `;
}

function setActiveProcess(id) {
  state.activeProcessId = id;
  renderProcessNav(id);
  renderProcessDetail(id);
}

function renderModuleCards(activeId) {
  moduleCards.innerHTML = modules
    .map(
      (module) => `
        <button class="module-card ${module.id === activeId ? "is-active" : ""}" data-module-id="${module.id}">
          <div class="module-card-head">
            <div>
              <span class="module-card-icon">${module.icon}</span>
              <h3>${module.name}</h3>
              <p>${module.tagline}</p>
            </div>
            <span class="chip">模块</span>
          </div>
          <div class="module-card-meta">
            ${module.badges.map((badge) => `<span>${badge}</span>`).join("")}
          </div>
        </button>
      `
    )
    .join("");
}

function renderModuleDetail(activeModuleId, activeTabId) {
  const module = modules.find((item) => item.id === activeModuleId) || modules[0];
  const tab = module.tabs.find((item) => item.id === activeTabId) || module.tabs[0];

  moduleDetail.innerHTML = `
    <div class="module-header">
      <div class="module-title">
        <span>${module.icon}</span>
        <div>
          <h3>${module.name}</h3>
          <p>${module.summary}</p>
        </div>
      </div>

      <div class="module-actions">
        <div class="module-card-meta">
          ${module.badges.map((badge) => `<span>${badge}</span>`).join("")}
        </div>
        <a class="button button-secondary" href="${module.pdf}" target="_blank" rel="noreferrer">查看原始 PDF</a>
      </div>

      <div class="module-quickfacts">
        ${module.quickFacts
          .map(
            (fact) => `
              <article class="quickfact">
                <span>${fact.label}</span>
                <strong>${fact.value}</strong>
              </article>
            `
          )
          .join("")}
      </div>
    </div>

    <div class="module-tabs" role="tablist" aria-label="${module.name}内容导航">
      ${module.tabs
        .map(
          (item) => `
            <button
              class="module-tab ${item.id === tab.id ? "is-active" : ""}"
              data-module-id="${module.id}"
              data-tab-id="${item.id}"
              role="tab"
              aria-selected="${item.id === tab.id}"
            >
              ${item.label}
            </button>
          `
        )
        .join("")}
    </div>

    <div class="module-content">
      ${tab.qas ? renderModuleFaq(tab.qas) : renderBlocks(tab.blocks)}
    </div>
  `;
}

function setActiveModule(moduleId, tabId) {
  const module = modules.find((item) => item.id === moduleId) || modules[0];
  const nextTabId = tabId || module.tabs[0].id;

  state.activeModuleId = module.id;
  state.activeModuleTab = nextTabId;

  renderModuleCards(module.id);
  renderModuleDetail(module.id, nextTabId);
}

function mountProcess() {
  if (!processNav || !processDetail) return;

  setActiveProcess(state.activeProcessId);

  processNav.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-process-id]");
    if (!trigger) return;
    setActiveProcess(trigger.dataset.processId);
  });
}

function mountToolkit() {
  if (!moduleCards || !moduleDetail) return;

  setActiveModule(state.activeModuleId, state.activeModuleTab);

  moduleCards.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-module-id]");
    if (!trigger) return;
    setActiveModule(trigger.dataset.moduleId);
  });

  moduleDetail.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-tab-id]");
    if (!trigger) return;
    setActiveModule(trigger.dataset.moduleId, trigger.dataset.tabId);
  });
}

function mountReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function mountProgress() {
  if (!progressBar) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

mountProcess();
mountToolkit();
mountReveal();
mountProgress();
