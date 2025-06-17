export type AuthorWork = {
  id: number
  title: string
  titleRomaji: string
  year: string
  image: string
  slug: string
  status: string
  description: string
}

export type Award = {
  name: string
  year: string
  work?: string
}

export type Magazine = {
  name: string
  publisher: string
  years: string
}

export type Author = {
  id: number
  name: string
  nameRomaji: string
  birthYear?: string
  debut: string
  gender: string
  birthPlace: string
  status: string
  description: string
  works: AuthorWork[]
  awards: Award[] // 受賞歴を追加
  magazines: Magazine[] // 掲載雑誌を追加
  workCount: number // 作品数を追加
}

export const authorData: Record<string, Author> = {
  "akutami-gege": {
    id: 1,
    name: "芥見下々",
    nameRomaji: "アクタミ ゲゲ",
    birthYear: "1992年",
    debut: "2014年",
    gender: "男性",
    birthPlace: "岩手県",
    status: "活動中",
    description: "2018年より『週刊少年ジャンプ』にて『呪術廻戦』を連載開始。独特な世界観と緻密な設定で人気を博す。",
    works: [
      {
        id: 1,
        title: "呪術廻戦",
        titleRomaji: "Jujutsu Kaisen",
        year: "2018-",
        image: "/images/jujutsu-kaisen/volume-1.png",
        slug: "jujutsu-kaisen",
        status: "連載中",
        description: "呪いと戦う呪術師たちの物語。週刊少年ジャンプの看板作品の一つ。",
      },
      {
        id: 2,
        title: "東京都立呪術高等専門学校",
        titleRomaji: "Tokyo Toritsu Jujutsu Koto Senmon Gakko",
        year: "2017",
        image: "/placeholder.svg?height=200&width=150",
        slug: "tokyo-jujutsu-high",
        status: "完結",
        description: "呪術廻戦の前身となる読み切り作品。",
      },
    ],
    awards: [
      {
        name: "第66回小学館漫画賞 少年向け部門",
        year: "2021年",
        work: "呪術廻戦",
      },
      {
        name: "第24回手塚治虫文化賞 マンガ大賞",
        year: "2020年",
        work: "呪術廻戦",
      },
      {
        name: "第2回TSUTAYAコミック大賞",
        year: "2019年",
        work: "呪術廻戦",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2018-",
      },
      {
        name: "ジャンプGIGA",
        publisher: "集英社",
        years: "2017",
      },
    ],
    workCount: 2,
  },
  "gotouge-koyoharu": {
    id: 2,
    name: "吾峠 呼世晴",
    nameRomaji: "ゴトウゲ コヨハル",
    birthYear: "1989年",
    debut: "2013年",
    gender: "女性",
    birthPlace: "福岡県",
    status: "活動中",
    description: "2016年より『週刊少年ジャンプ』にて『鬼滅の刃』を連載。社会現象を巻き起こした。",
    works: [
      {
        id: 1,
        title: "鬼滅の刃",
        titleRomaji: "Kimetsu no Yaiba",
        year: "2016-2020",
        image: "/images/kimetsu-no-yaiba/volume-1.jpg",
        slug: "kimetsu-no-yaiba",
        status: "完結",
        description: "大正時代を舞台にした鬼退治の物語。アニメ化により大ブームを巻き起こした。",
      },
      {
        id: 2,
        title: "吾峠呼世晴短編集",
        titleRomaji: "Gotouge Koyoharu Tanpenshuu",
        year: "2019",
        image: "/placeholder.svg?height=200&width=150",
        slug: "gotouge-koyoharu-tanpenshuu",
        status: "完結",
        description: "吾峠呼世晴の初期の読み切り作品を収録した短編集。",
      },
    ],
    awards: [
      {
        name: "第2回鳥山明賞",
        year: "2013年",
        work: "過狩り狩り",
      },
      {
        name: "第44回講談社漫画賞 少年部門",
        year: "2020年",
        work: "鬼滅の刃",
      },
      {
        name: "第24回手塚治虫文化賞 マンガ大賞",
        year: "2020年",
        work: "鬼滅の刃",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2016-2020",
      },
      {
        name: "ジャンプSQ.RISE",
        publisher: "集英社",
        years: "2013-2015",
      },
    ],
    workCount: 2,
  },
  "isayama-hajime": {
    id: 3,
    name: "諫山創",
    nameRomaji: "イサヤマ ハジメ",
    birthYear: "1986年",
    debut: "2009年",
    gender: "男性",
    birthPlace: "大分県",
    status: "活動中",
    description: "2009年より『別冊少年マガジン』にて『進撃の巨人』を連載開始。独特な世界観で世界的人気を獲得。",
    works: [
      {
        id: 1,
        title: "進撃の巨人",
        titleRomaji: "Shingeki no Kyojin",
        year: "2009-2021",
        image: "/images/shingeki-no-kyojin/volume-1.jpg",
        slug: "shingeki-no-kyojin",
        status: "完結",
        description: "巨人と人類の戦いを描いた壮大な物語。世界的なヒット作品。",
      }
    ],
    awards: [
      {
        name: "第35回講談社漫画賞 少年部門",
        year: "2011年",
        work: "進撃の巨人",
      },
      {
        name: "第16回文化庁メディア芸術祭 マンガ部門優秀賞",
        year: "2012年",
        work: "進撃の巨人",
      },
      {
        name: "第17回手塚治虫文化賞 新生賞",
        year: "2013年",
        work: "進撃の巨人",
      },
    ],
    magazines: [
      {
        name: "別冊少年マガジン",
        publisher: "講談社",
        years: "2009-2021",
      },
    ],
    workCount: 1,
  },
  "oda-eiichiro": {
    id: 4,
    name: "尾田栄一郎",
    nameRomaji: "オダ エイイチロウ",
    birthYear: "1975年",
    debut: "1992年",
    gender: "男性",
    birthPlace: "熊本県",
    status: "活動中",
    description: "1997年より『週刊少年ジャンプ』にて『ONE PIECE』を連載中。日本の漫画界を代表する作家の一人。",
    works: [
      {
        id: 1,
        title: "ONE PIECE",
        titleRomaji: "One Piece",
        year: "1997-",
        image: "/images/one-piece/volume-1.jpg",
        slug: "one-piece",
        status: "連載中",
        description: "海賊王を目指すルフィの冒険物語。世界で最も売れている漫画シリーズ。",
      },
      {
        id: 2,
        title: "ROMANCE DAWN",
        titleRomaji: "Romance Dawn",
        year: "1996",
        image: "/placeholder.svg?height=200&width=150",
        slug: "romance-dawn",
        status: "完結",
        description: "ONE PIECEの原型となった読み切り作品。",
      },
      {
        id: 3,
        title: "WANTED!",
        titleRomaji: "Wanted!",
        year: "1992",
        image: "/placeholder.svg?height=200&width=150",
        slug: "wanted",
        status: "完結",
        description: "デビュー作となる読み切り作品。",
      },
    ],
    awards: [
      {
        name: "第41回手塚治虫文化賞 マンガ大賞",
        year: "2012年",
        work: "ONE PIECE",
      },
      {
        name: "第2回日本漫画家協会賞 大賞",
        year: "2003年",
        work: "ONE PIECE",
      },
      {
        name: "第24回小学館漫画賞 少年向け部門",
        year: "2001年",
        work: "ONE PIECE",
      },
      {
        name: "ギネス世界記録「単一作者による最も多く発行された漫画シリーズ」",
        year: "2015年",
        work: "ONE PIECE",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "1997-",
      },
    ],
    workCount: 5,
  },
  "horikoshi-kohei": {
    id: 5,
    name: "堀越耕平",
    nameRomaji: "ホリコシ コウヘイ",
    birthYear: "1986年",
    debut: "2007年",
    gender: "男性",
    birthPlace: "愛知県",
    status: "活動中",
    description: "2014年より『週刊少年ジャンプ』にて『僕のヒーローアカデミア』を連載中。ヒーロー漫画の新境地を開拓。",
    works: [
      {
        id: 1,
        title: "僕のヒーローアカデミア",
        titleRomaji: "Boku no Hero Academia",
        year: "2014-",
        image: "/images/boku-no-hero-academia/volume-1.jpg",
        slug: "boku-no-hero-academia",
        status: "連載中",
        description: "個性を持つ人々の世界でヒーローを目指す少年の物語。",
      },
      {
        id: 2,
        title: "逢魔ヶ刻動物園",
        titleRomaji: "Oumagadoki Doubutsuen",
        year: "2010-2011",
        image: "/placeholder.svg?height=200&width=150",
        slug: "oumagadoki-doubutsuen",
        status: "完結",
        description: "動物園を舞台にしたファンタジー作品。",
      },
      {
        id: 3,
        title: "戦星のバルジ",
        titleRomaji: "Sensei no Bulge",
        year: "2013",
        image: "/placeholder.svg?height=200&width=150",
        slug: "sensei-no-bulge",
        status: "完結",
        description: "SF要素を含んだアクション作品。",
      },
    ],
    awards: [
      {
        name: "第4回次にくるマンガ大賞 大賞",
        year: "2015年",
        work: "僕のヒーローアカデミア",
      },
      {
        name: "第62回小学館漫画賞 少年向け部門",
        year: "2017年",
        work: "僕のヒーローアカデミア",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2014-",
      },
      {
        name: "ジャンプSQ",
        publisher: "集英社",
        years: "2010-2011",
      },
    ],
    workCount: 3,
  },
  "togashi-yoshihiro": {
    id: 6,
    name: "冨樫義博",
    nameRomaji: "トガシ ヨシヒロ",
    birthYear: "1966年",
    debut: "1987年",
    gender: "男性",
    birthPlace: "山形県",
    status: "活動中",
    description: "『幽☆遊☆白書』『HUNTER×HUNTER』などの代表作を持つ。緻密な設定と心理描写で知られる。",
    works: [
      {
        id: 1,
        title: "HUNTER×HUNTER",
        titleRomaji: "Hunter x Hunter",
        year: "1998-",
        image: "/images/hunter-x-hunter/volume-1.jpg",
        slug: "hunter-x-hunter",
        status: "休載中",
        description: "ハンターを目指す少年ゴンの冒険物語。複雑な念能力システムが特徴。",
      },
      {
        id: 2,
        title: "幽☆遊☆白書",
        titleRomaji: "Yu Yu Hakusho",
        year: "1990-1994",
        image: "/images/yu-yu-hakusho/volume-1.jpg",
        slug: "yu-yu-hakusho",
        status: "完結",
        description: "霊界探偵として活動する浦飯幽助の物語。90年代を代表する作品。",
      },
      {
        id: 3,
        title: "レベルE",
        titleRomaji: "Level E",
        year: "1995-1997",
        image: "/images/level-e/volume-1.jpg",
        slug: "level-e",
        status: "完結",
        description: "宇宙人をテーマにしたSFコメディ作品。",
      },
      {
        id: 4,
        title: "てんで性悪キューピッド",
        titleRomaji: "Ten de Shōwaru Cupid",
        year: "1989-1990",
        image: "/placeholder.svg?height=200&width=150",
        slug: "ten-de-showaru-cupid",
        status: "完結",
        description: "悪魔と人間のハーフである主人公のラブコメディ。",
      },
      {
        id: 5,
        title: "狼なんて怖くない",
        titleRomaji: "Ookami Nante Kowakunai",
        year: "1993",
        image: "/placeholder.svg?height=200&width=150",
        slug: "ookami-nante-kowakunai",
        status: "完結",
        description: "幸運をもたらす少女と出会った少年の物語。",
      },
    ],
    awards: [
      {
        name: "第39回小学館漫画賞 少年向け部門",
        year: "1994年",
        work: "幽☆遊☆白書",
      },
      {
        name: "第26回日本漫画家協会賞 優秀賞",
        year: "1997年",
        work: "レベルE",
      },
      {
        name: "第22回手塚治虫文化賞 マンガ大賞",
        year: "2018年",
        work: "HUNTER×HUNTER",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "1990-",
      },
    ],
    workCount: 5,
  },
  "fujimoto-tatsuki": {
    id: 7,
    name: "藤本タツキ",
    nameRomaji: "フジモト タツキ",
    birthYear: "1992年",
    debut: "2013年",
    gender: "男性",
    birthPlace: "秋田県",
    status: "活動中",
    description: "独特な世界観とストーリーテリングで注目を集める新世代の漫画家。映画的な演出が特徴。",
    works: [
      {
        id: 1,
        title: "チェンソーマン",
        titleRomaji: "Chainsaw Man",
        year: "2018-2020",
        image: "/images/chainsaw-man/volume-1.jpg",
        slug: "chainsaw-man",
        status: "第一部完結",
        description: "悪魔と契約した少年デンジの物語。独特な世界観で話題を呼んだ。",
      },
      {
        id: 2,
        title: "チェンソーマン 第二部",
        titleRomaji: "Chainsaw Man Part 2",
        year: "2022-",
        image: "/images/chainsaw-man-part-2/volume-1.jpg",
        slug: "chainsaw-man-part-2",
        status: "連載中",
        description: "チェンソーマンの続編。高校生となったデンジの新たな物語。",
      },
      {
        id: 3,
        title: "ファイアパンチ",
        titleRomaji: "Fire Punch",
        year: "2016-2018",
        image: "/images/fire-punch/volume-1.jpg",
        slug: "fire-punch",
        status: "完結",
        description: "氷河期の世界を舞台にしたダークファンタジー作品。",
      },
      {
        id: 4,
        title: "ルックバック",
        titleRomaji: "Look Back",
        year: "2021",
        image: "/images/look-back/cover.jpg",
        slug: "look-back",
        status: "完結",
        description: "漫画家を目指す2人の少女の物語。2021年7月に発表された読み切り作品。",
      },
      {
        id: 5,
        title: "さよなら絵梨",
        titleRomaji: "Sayonara Eri",
        year: "2022",
        image: "/images/sayonara-eri/cover.jpg",
        slug: "sayonara-eri",
        status: "完結",
        description: "映画制作をテーマにした読み切り作品。2022年4月に発表。",
      },
      {
        id: 6,
        title: "妹の姉",
        titleRomaji: "Imouto no Ane",
        year: "2014",
        image: "/images/imouto-no-ane/cover.jpg",
        slug: "imouto-no-ane",
        status: "完結",
        description: "初期の読み切り作品の一つ。",
      },
      {
        id: 7,
        title: "17-21",
        titleRomaji: "17-21",
        year: "2013",
        image: "/images/17-21/cover.jpg",
        slug: "17-21",
        status: "完結",
        description: "デビュー作の読み切り作品。",
      },
      {
        id: 8,
        title: "恋は盲目",
        titleRomaji: "Koi wa Moumoku",
        year: "2014",
        image: "/images/koi-wa-moumoku/cover.jpg",
        slug: "koi-wa-moumoku",
        status: "完結",
        description: "初期の読み切り作品。",
      },
    ],
    awards: [
      {
        name: "第66回小学館漫画賞 少年向け部門",
        year: "2021年",
        work: "チェンソーマン",
      },
      {
        name: "第12回マンガ大賞",
        year: "2019年",
        work: "チェンソーマン",
      },
      {
        name: "第67回芸術選奨文部科学大臣新人賞",
        year: "2017年",
        work: "ファイアパンチ",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2018-2020",
      },
      {
        name: "ジャンプ+",
        publisher: "集英社",
        years: "2022-",
      },
      {
        name: "少年ジャンプ+",
        publisher: "集英社",
        years: "2016-2018",
      },
    ],
    workCount: 8,
  },
  "kishimoto-masashi": {
    id: 8,
    name: "岸本斉史",
    nameRomaji: "カシモト マサシ",
    birthYear: "1974年",
    debut: "1999年",
    gender: "男性",
    birthPlace: "岡山県",
    status: "活動中",
    description: "『NARUTO』で世界的な成功を収めた漫画家。忍者をテーマにした作品で知られる。",
    works: [
      {
        id: 1,
        title: "NARUTO -ナルト-",
        titleRomaji: "Naruto",
        year: "1999-2014",
        image: "/images/naruto/volume-1.jpg",
        slug: "naruto",
        status: "完結",
        description: "忍者を目指す少年ナルトの成長物語。世界的なヒット作品。",
      },
      {
        id: 2,
        title: "BORUTO -ボルト-",
        titleRomaji: "Boruto",
        year: "2016-",
        image: "/placeholder.svg?height=200&width=150",
        slug: "boruto",
        status: "連載中",
        description: "NARUTOの続編。ナルトの息子ボルトが主人公。",
      },
      {
        id: 3,
        title: "サムライ8 八丸伝",
        titleRomaji: "Samurai 8",
        year: "2019-2020",
        image: "/placeholder.svg?height=200&width=150",
        slug: "samurai-8",
        status: "完結",
        description: "SF要素を含んだサムライ作品。",
      },
    ],
    awards: [
      {
        name: "第26回小学館漫画賞 少年向け部門",
        year: "2002年",
        work: "NARUTO",
      },
      {
        name: "第14回手塚治虫文化賞 マンガ大賞",
        year: "2010年",
        work: "NARUTO",
      },
      {
        name: "第59回芸術選奨文部科学大臣賞",
        year: "2009年",
        work: "NARUTO",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "1999-2014",
      },
      {
        name: "Vジャンプ",
        publisher: "集英社",
        years: "2016-",
      },
    ],
    workCount: 4,
  },
  "wakui-ken": {
    id: 9,
    name: "和久井健",
    nameRomaji: "ワクイ ケン",
    birthYear: "1983年",
    debut: "2005年",
    gender: "男性",
    birthPlace: "東京都",
    status: "活動中",
    description: "ヤンキー・不良漫画を得意とする漫画家。『東京リベンジャーズ』で大ブレイク。",
    works: [
      {
        id: 1,
        title: "東京リベンジャーズ",
        titleRomaji: "Tokyo Revengers",
        year: "2017-2022",
        image: "/images/tokyo-revengers/volume-1.jpg",
        slug: "tokyo-revengers",
        status: "完結",
        description: "タイムリープしてヤンキー時代に戻った主人公が未来を変えようとする物語。",
      },
      {
        id: 2,
        title: "シャーマンキング レッドクリムゾン",
        titleRomaji: "Shaman King Red Crimson",
        year: "2018-2020",
        image: "/placeholder.svg?height=200&width=150",
        slug: "shaman-king-red-crimson",
        status: "完結",
        description: "シャーマンキングのスピンオフ作品。",
      },
      {
        id: 3,
        title: "WORST",
        titleRomaji: "Worst",
        year: "2009-2013",
        image: "/placeholder.svg?height=200&width=150",
        slug: "worst",
        status: "完結",
        description: "不良漫画の金字塔『WORST』の続編。",
      },
    ],
    awards: [
      {
        name: "第44回講談社漫画賞 少年部門",
        year: "2020年",
        work: "東京リベンジャーズ",
      },
      {
        name: "第6回次にくるマンガ大賞 大賞",
        year: "2018年",
        work: "東京リベンジャーズ",
      },
    ],
    magazines: [
      {
        name: "週刊少年マガジン",
        publisher: "講談社",
        years: "2017-2022",
      },
      {
        name: "月刊少年チャンピオン",
        publisher: "秋田書店",
        years: "2009-2013",
      },
    ],
    workCount: 5,
  },
  "hayashida-q": {
    id: 10,
    name: "林田球",
    nameRomaji: "ハヤシダ クウ",
    birthYear: "1982年",
    debut: "2005年",
    gender: "女性",
    birthPlace: "鹿児島県",
    status: "活動中",
    description: "独特の世界観と画風で知られる漫画家。『ドロヘドロ』で高い評価を得る。",
    works: [
      {
        id: 1,
        title: "大ダーク",
        titleRomaji: "Dai Dark",
        year: "2019-",
        image: "/images/dai-dark/volume-1.jpg",
        slug: "dai-dark",
        status: "連載中",
        description: "宇宙を舞台にしたダークファンタジー。骨を狙われる少年の物語。",
      },
      {
        id: 2,
        title: "ドロヘドロ",
        titleRomaji: "Dorohedoro",
        year: "2000-2018",
        image: "/placeholder.svg?height=200&width=150",
        slug: "dorohedoro",
        status: "完結",
        description: "魔法使いと人間が住む歪んだ世界を描いた作品。",
      },
      {
        id: 3,
        title: "不安の種",
        titleRomaji: "Fuan no Tane",
        year: "2004-2006",
        image: "/placeholder.svg?height=200&width=150",
        slug: "fuan-no-tane",
        status: "完結",
        description: "短編ホラー作品集。",
      },
    ],
    awards: [
      {
        name: "第15回文化庁メディア芸術祭 マンガ部門優秀賞",
        year: "2011年",
        work: "ドロヘドロ",
      },
      {
        name: "第19回手塚治虫文化賞 マンガ大賞",
        year: "2015年",
        work: "ドロヘドロ",
      },
    ],
    magazines: [
      {
        name: "月刊!スピリッツ",
        publisher: "小学館",
        years: "2019-",
      },
      {
        name: "月刊IKKI",
        publisher: "小学館",
        years: "2000-2014",
      },
      {
        name: "ゲッサン",
        publisher: "小学館",
        years: "2014-2018",
      },
    ],
    workCount: 3,
  },
  "iwaaki-hitoshi": {
    id: 11,
    name: "岩明均",
    nameRomaji: "イワキ ヒトシ",
    birthYear: "1960年",
    debut: "1985年",
    gender: "男性",
    birthPlace: "熊本県",
    status: "活動中",
    description: "緻密な描写と独特の世界観で知られる漫画家。『寄生獣』『ヒストリエ』などの代表作がある。",
    works: [
      {
        id: 1,
        title: "ヒストリエ",
        titleRomaji: "Historie",
        year: "2003-",
        image: "/images/historie/volume-1.jpg",
        slug: "historie",
        status: "連載中",
        description: "古代マケドニアを舞台にした歴史大作。アレクサンドロス大王の書記官エウメネスの物語。",
      },
      {
        id: 2,
        title: "寄生獣",
        titleRomaji: "Kiseijuu",
        year: "1988-1995",
        image: "/placeholder.svg?height=200&width=150",
        slug: "kiseijuu",
        status: "完結",
        description: "寄生生物と共生する少年の物語。SF要素の強いホラー作品。",
      },
      {
        id: 3,
        title: "ハルシオン・ランチ",
        titleRomaji: "Halcyon Lunch",
        year: "1997-2000",
        image: "/placeholder.svg?height=200&width=150",
        slug: "halcyon-lunch",
        status: "完結",
        description: "異世界を舞台にしたSF作品。",
      },
    ],
    awards: [
      {
        name: "第17回講談社漫画賞 一般部門",
        year: "1993年",
        work: "寄生獣",
      },
      {
        name: "第3回手塚治虫文化賞 マンガ大賞",
        year: "1999年",
        work: "寄生獣",
      },
      {
        name: "第13回文化庁メディア芸術祭 マンガ部門優秀賞",
        year: "2009年",
        work: "ヒストリエ",
      },
    ],
    magazines: [
      {
        name: "月刊アフタヌーン",
        publisher: "講談社",
        years: "2003-",
      },
      {
        name: "月刊アフタヌーン",
        publisher: "講談社",
        years: "1988-1995",
      },
    ],
    workCount: 5,
  },
  "kaneshiro-muneyuki": {
    id: 12,
    name: "金城宗幸",
    nameRomaji: "カネシロ ムネユキ",
    birthYear: "1985年",
    debut: "2011年",
    gender: "男性",
    birthPlace: "沖縄県",
    status: "活動中",
    description: "『ブルーロック』の原作者。スポーツ漫画に新たな風を吹き込んだ。",
    works: [
      {
        id: 1,
        title: "ブルーロック",
        titleRomaji: "Blue Lock",
        year: "2018-",
        image: "/images/blue-lock/volume-1.jpg",
        slug: "blue-lock",
        status: "連載中",
        description: "日本サッカー界の救世主となるストライカーを育成する物語。",
      },
      {
        id: 2,
        title: "アクト・エイジ",
        titleRomaji: "Act-Age",
        year: "2018-2020",
        image: "/placeholder.svg?height=200&width=150",
        slug: "act-age",
        status: "中止",
        description: "演技の才能を持つ少女の成長を描く物語。",
      },
      {
        id: 3,
        title: "神様のバレー",
        titleRomaji: "Kami-sama no Volley",
        year: "2012-2015",
        image: "/placeholder.svg?height=200&width=150",
        slug: "kami-sama-no-volley",
        status: "完結",
        description: "バレーボールを題材にした作品。",
      },
    ],
    awards: [
      {
        name: "第45回講談社漫画賞 少年部門",
        year: "2021年",
        work: "ブルーロック",
      },
      {
        name: "第7回次にくるマンガ大賞 大賞",
        year: "2019年",
        work: "アクト・エイジ",
      },
    ],
    magazines: [
      {
        name: "週刊少年マガジン",
        publisher: "講談社",
        years: "2018-",
      },
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2018-2020",
      },
    ],
    workCount: 4,
  },
  "toriyama-akira": {
    id: 13,
    name: "鳥山明",
    nameRomaji: "トリヤマ アキラ",
    birthYear: "1955年",
    debut: "1978年",
    gender: "男性",
    birthPlace: "愛知県",
    status: "活動中",
    description:
      "『ドラゴンボール』『Dr.スランプ』などの代表作を持つ日本を代表する漫画家。独特のキャラクターデザインと世界観で世界中にファンを持つ。",
    works: [
      {
        id: 1,
        title: "ドラゴンボール",
        titleRomaji: "Dragon Ball",
        year: "1984-1995",
        image: "/images/dragon-ball/volume-1.jpg",
        slug: "dragon-ball",
        status: "完結",
        description: "7つ集めると願いを叶えてくれるドラゴンボールを探す孫悟空の冒険物語。",
      },
      {
        id: 2,
        title: "Dr.スランプ",
        titleRomaji: "Dr. Slump",
        year: "1980-1984",
        image: "/placeholder.svg?height=200&width=150",
        slug: "dr-slump",
        status: "完結",
        description: "天才博士とアンドロイド少女アラレちゃんの日常を描いたギャグ漫画。",
      },
    ],
    awards: [
      {
        name: "第30回小学館漫画賞 少年向け部門",
        year: "1985年",
        work: "Dr.スランプ",
      },
      {
        name: "第40回小学館漫画賞 少年向け部門",
        year: "1995年",
        work: "ドラゴンボール",
      },
      {
        name: "第34回日本漫画家協会賞 大賞",
        year: "2005年",
        work: "生涯功労",
      },
      {
        name: "フランス芸術文化勲章シュヴァリエ",
        year: "2019年",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "1980-1995",
      },
      {
        name: "Vジャンプ",
        publisher: "集英社",
        years: "1993-2013",
      },
    ],
    workCount: 15,
  },
  "sorachi-hideaki": {
    id: 14,
    name: "空知英秋",
    nameRomaji: "ソラチ ヒデアキ",
    birthYear: "1979年",
    debut: "2003年",
    gender: "男性",
    birthPlace: "北海道",
    status: "活動中",
    description:
      "『銀魂』で知られる漫画家。独特のギャグセンスとパロディ、そして時折見せるシリアスな展開で多くのファンを魅了。",
    works: [
      {
        id: 1,
        title: "銀魂",
        titleRomaji: "Gintama",
        year: "2003-2019",
        image: "/images/gintama/volume-1.jpg",
        slug: "gintama",
        status: "完結",
        description: "天人襲来後の江戸を舞台にした万事屋銀時の物語。コメディとシリアスが絶妙に混在。",
      },
    ],
    awards: [
      {
        name: "第51回小学館漫画賞 少年向け部門",
        year: "2006年",
        work: "銀魂",
      },
      {
        name: "第28回手塚治虫文化賞 マンガ大賞",
        year: "2024年",
        work: "銀魂",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2003-2018",
      },
      {
        name: "ジャンプGIGA",
        publisher: "集英社",
        years: "2018-2019",
      },
    ],
    workCount: 2,
  },
  "ashihara-daisuke": {
    id: 15,
    name: "葦原大介",
    nameRomaji: "アシハラ ダイスケ",
    birthYear: "1982年",
    debut: "2007年",
    gender: "男性",
    birthPlace: "岡山県",
    status: "活動中",
    description: "『ワールドトリガー』で知られる漫画家。緻密な設定と戦略的なバトル描写が特徴。",
    works: [
      {
        id: 1,
        title: "ワールドトリガー",
        titleRomaji: "World Trigger",
        year: "2013-",
        image: "/images/world-trigger/volume-1.jpg",
        slug: "world-trigger",
        status: "連載中",
        description: "異世界からの侵略者と戦う防衛組織の物語。チーム戦と戦略が魅力。",
      },
    ],
    awards: [
      {
        name: "第61回小学館漫画賞 少年向け部門",
        year: "2016年",
        work: "ワールドトリガー",
      },
      {
        name: "第19回文化庁メディア芸術祭 マンガ部門優秀賞",
        year: "2015年",
        work: "ワールドトリガー",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2013-2018",
      },
      {
        name: "ジャンプSQ",
        publisher: "集英社",
        years: "2018-",
      },
    ],
    workCount: 2,
  },
  "kubo-tite": {
    id: 16,
    name: "久保帯人",
    nameRomaji: "クボ テイテ",
    birthYear: "1977年",
    debut: "2001年",
    gender: "男性",
    birthPlace: "広島県",
    status: "活動中",
    description: "『BLEACH』で知られる漫画家。独特のファッションセンスとスタイリッシュな画風が特徴。",
    works: [
      {
        id: 1,
        title: "BLEACH",
        titleRomaji: "Bleach",
        year: "2001-2016",
        image: "/images/bleach/volume-1.jpg",
        slug: "bleach",
        status: "完結",
        description: "死神の力を手に入れた高校生の物語。スタイリッシュなバトルアクション。",
      },
    ],
    awards: [
      {
        name: "第50回小学館漫画賞 少年向け部門",
        year: "2005年",
        work: "BLEACH",
      },
      {
        name: "第2回NEXTマンガ大賞",
        year: "2006年",
        work: "BLEACH",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2001-2016",
      },
    ],
    workCount: 3,
  },
  "shirai-kaiu": {
    id: 17,
    name: "白井カイウ",
    nameRomaji: "シライ カイウ",
    birthYear: "1987年",
    debut: "2016年",
    gender: "男性",
    birthPlace: "東京都",
    status: "活動中",
    description: "『約束のネバーランド』の原作者。緻密なストーリー構成とサスペンス要素で注目を集める。",
    works: [
      {
        id: 1,
        title: "約束のネバーランド",
        titleRomaji: "Yakusoku no Neverland",
        year: "2016-2020",
        image: "/images/yakusoku-no-neverland/volume-1.jpg",
        slug: "yakusoku-no-neverland",
        status: "完結",
        description: "孤児院からの脱出を描くサスペンス・ファンタジー。",
      },
    ],
    awards: [
      {
        name: "第63回小学館漫画賞 少年向け部門",
        year: "2018年",
        work: "約束のネバーランド",
      },
      {
        name: "第22回手塚治虫文化賞 新生賞",
        year: "2018年",
        work: "約束のネバーランド",
      },
      {
        name: "第12回マンガ大賞",
        year: "2019年",
        work: "約束のネバーランド",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2016-2020",
      },
    ],
    workCount: 2,
  },
  "furudate-haruichi": {
    id: 18,
    name: "古舘春一",
    nameRomaji: "フルダテ ハルイチ",
    birthYear: "1983年",
    debut: "2008年",
    gender: "男性",
    birthPlace: "岩手県",
    status: "活動中",
    description:
      "『ハイキュー!!』で知られる漫画家。バレーボールの魅力を余すことなく描いた青春スポーツ漫画の傑作を生み出した。",
    works: [
      {
        id: 1,
        title: "ハイキュー!!",
        titleRomaji: "Haikyuu!!",
        year: "2012-2020",
        image: "/images/haikyuu/volume-1.jpg",
        slug: "haikyuu",
        status: "完結",
        description: "小柄な主人公がバレーボールで全国を目指す青春スポーツ物語。",
      },
    ],
    awards: [
      {
        name: "第61回小学館漫画賞 少年向け部門",
        year: "2016年",
        work: "ハイキュー!!",
      },
      {
        name: "第20回手塚治虫文化賞 マンガ大賞",
        year: "2016年",
        work: "ハイキュー!!",
      },
      {
        name: "第65回芸術選奨文部科学大臣新人賞",
        year: "2015年",
        work: "ハイキュー!!",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2012-2020",
      },
    ],
    workCount: 3,
  },
  "fujimaki-tadatoshi": {
    id: 19,
    name: "藤巻忠俊",
    nameRomaji: "フジマキ タダトシ",
    birthYear: "1982年",
    debut: "2007年",
    gender: "男性",
    birthPlace: "東京都",
    status: "活動中",
    description:
      "『黒子のバスケ』で知られる漫画家。バスケットボールを題材にした超人的な技を駆使するバトル漫画で人気を博した。",
    works: [
      {
        id: 1,
        title: "黒子のバスケ",
        titleRomaji: "Kuroko no Basket",
        year: "2009-2014",
        image: "/images/kuroko-no-basket/volume-1.jpg",
        slug: "kuroko-no-basket",
        status: "完結",
        description: "影の薄い少年がバスケットボールで「キセキの世代」に挑む物語。",
      },
    ],
    awards: [
      {
        name: "第38回講談社漫画賞 少年部門",
        year: "2014年",
        work: "黒子のバスケ",
      },
      {
        name: "第5回マンガ大賞",
        year: "2012年",
        work: "黒子のバスケ",
      },
    ],
    magazines: [
      {
        name: "週刊少年ジャンプ",
        publisher: "集英社",
        years: "2009-2014",
      },
    ],
    workCount: 2,
  },
}

export function getAuthorData(slug: string): Author | null {
  return authorData[slug] || null
}

export function getAllAuthors(): Author[] {
  return Object.values(authorData)
}
