
export type QuizQuestion = {
  q: string;
  a: string[];
  correct: number;
  why: string;
};

export type Quiz = {
  grade: number;
  title: string;
  questions: QuizQuestion[];
};

export const quizzes: Quiz[] = [
  {
    grade: 8,
    title: "8-sinf huquqiy bilimlar testi",
    questions: [
      {
        q: "O'zbekiston Respublikasining asosiy qonuni qaysi?",
        a: ["Fuqarolik kodeksi", "Konstitutsiya", "Mehnat kodeksi", "Farmon"],
        correct: 1,
        why: "Konstitutsiya davlatning asosiy qonunidir."
      },
      {
        q: "Bola qanday huquqqa ega?",
        a: ["Ta'lim olish", "Qonunlarni buzish", "Boshqalarga zarar yetkazish", "Majburiyatlardan voz kechish"],
        correct: 0,
        why: "Har bir bola ta'lim olish huquqiga ega."
      },
      {
        q: "Davlat ramzlariga nimalar kiradi?",
        a: ["Bayroq, gerb, madhiya", "Kitob, daftar, ruchka", "Maktab, oila, mahalla", "Pul, pasport, guvohnoma"],
        correct: 0,
        why: "O'zbekistonning davlat ramzlari bayroq, gerb va madhiyadir."
      },
      {
        q: "Qonun oldida fuqarolar qanday?",
        a: ["Teng", "Lavozimiga qarab teng", "Faqat kattalar teng", "Faqat ayrimlar teng"],
        correct: 0,
        why: "Barcha fuqarolar qonun oldida tengdir."
      },
      {
        q: "Huquqbuzarlik nima?",
        a: ["Qonunga xilof qilmish", "Yaxshi xulq", "Ta'lim olish", "Sport bilan shug'ullanish"],
        correct: 0,
        why: "Huquqbuzarlik qonunga zid aybli harakat yoki harakatsizlikdir."
      }
    ]
  },
  {
    grade: 9,
    title: "9-sinf huquqiy bilimlar testi",
    questions: [
      {
        q: "Huquqiy davlatning asosiy belgisi nima?",
        a: ["Qonun ustuvorligi", "Faqat buyruqlar", "Huquqlarning cheklanishi", "Qonunsizlik"],
        correct: 0,
        why: "Huquqiy davlatda qonun ustuvorligi ta'minlanadi."
      },
      {
        q: "Fuqarolik nimani anglatadi?",
        a: ["Shaxsning davlat bilan huquqiy aloqasini", "Kasbni", "Maktabni", "Hudud nomini"],
        correct: 0,
        why: "Fuqarolik shaxs va davlat o'rtasidagi barqaror huquqiy aloqadir."
      },
      {
        q: "Konstitutsiya qachon qabul qilingan?",
        a: ["1991-yil 1-sentabr", "1992-yil 8-dekabr", "1993-yil 1-yanvar", "1995-yil 21-mart"],
        correct: 1,
        why: "O'zbekiston Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan."
      },
      {
        q: "Inson huquqlari kimga tegishli?",
        a: ["Har bir insonga", "Faqat mansabdorlarga", "Faqat kattalarga", "Faqat davlat xizmatchilariga"],
        correct: 0,
        why: "Inson huquqlari har bir insonga tegishlidir."
      },
      {
        q: "Qonunlarga rioya qilish kimning burchi?",
        a: ["Faqat o'qituvchilarning", "Faqat davlat xizmatchilarining", "Barcha fuqarolarning", "Faqat o'quvchilarning"],
        correct: 2,
        why: "Konstitutsiya va qonunlarga rioya qilish barcha uchun majburiydir."
      }
    ]
  },
  {
    grade: 11,
    title: "11-sinf huquqiy bilimlar testi",
    questions: [
      {
        q: "O'zbekiston qanday davlat?",
        a: ["Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat", "Monarxiya", "Mustamlaka davlat", "Harbiy davlat"],
        correct: 0,
        why: "Bu O'zbekiston Respublikasi Konstitutsiyasining 1-moddasida belgilangan."
      },
      {
        q: "Hokimiyatlar bo'linishi qaysi tarmoqlarni o'z ichiga oladi?",
        a: ["Qonun chiqaruvchi, ijro etuvchi va sud", "Maktab, oila va mahalla", "Davlat, korxona va bank", "Siyosiy partiya va tashkilotlar"],
        correct: 0,
        why: "Davlat hokimiyati qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'linadi."
      },
      {
        q: "Normativ-huquqiy hujjat nima?",
        a: ["Huquq normalarini belgilovchi rasmiy hujjat", "Shaxsiy xat", "Reklama", "Oddiy e'lon"],
        correct: 0,
        why: "Normativ-huquqiy hujjat umummajburiy huquq normalarini belgilaydi."
      },
      {
        q: "Sud hokimiyatining asosiy vazifasi nima?",
        a: ["Odil sudlovni amalga oshirish", "Qonunlarni qabul qilish", "Soliq yig'ish", "Ta'lim berish"],
        correct: 0,
        why: "Sud hokimiyati odil sudlovni amalga oshiradi."
      },
      {
        q: "Xalqaro konvensiya nima?",
        a: ["Davlatlar o'rtasidagi xalqaro shartnoma", "Maktab nizomi", "Shaxsiy ariza", "Ichki buyruq"],
        correct: 0,
        why: "Konvensiya xalqaro shartnomaning bir turidir."
      }
    ]
  }
];

export type Lesson = {
  id: string;
  grade: number;
  title: string;
  goal: string;
  body: string;
  example: string;
  terms: string[];
};

export const lessons: Lesson[] = [
  {
    id: "1",
    grade: 1,
    title: "Mening huquqlarim",
    goal: "Bolaning asosiy huquqlarini o‘rganish.",
    body: "Har bir bola ta’lim olish, dam olish, sog‘lom yashash va o‘z fikrini bildirish huquqiga ega.",
    example: "Har bir o‘quvchi maktabda bilim olish huquqiga ega.",
    terms: ["Huquq", "Bola", "Ta’lim"]
  },
  {
    id: "2",
    grade: 2,
    title: "Oila va bola",
    goal: "Oiladagi huquq va majburiyatlarni tushunish.",
    body: "Oila mehr, hurmat va o‘zaro yordamga asoslanadi. Har bir bola g‘amxo‘rlik va tarbiya olish huquqiga ega.",
    example: "Oila a’zolari bir-biriga yordam berishi kerak.",
    terms: ["Oila", "Mehr", "G‘amxo‘rlik"]
  },
  {
    id: "3",
    grade: 3,
    title: "Konstitutsiya nima?",
    goal: "Konstitutsiya haqida boshlang‘ich tushuncha olish.",
    body: "Konstitutsiya davlatning asosiy qonunidir. Unda inson huquqlari va davlat tuzilishining asoslari belgilangan.",
    example: "Fuqarolar Konstitutsiya va qonunlarga rioya qiladilar.",
    terms: ["Konstitutsiya", "Qonun", "Davlat"]
  },
  {
    id: "4",
    grade: 4,
    title: "Inson huquqlari",
    goal: "Insonning asosiy huquqlarini bilish.",
    body: "Har bir inson yashash, ta’lim olish, mehnat qilish va fikr bildirish huquqiga ega.",
    example: "Barcha bolalar teng ta’lim olish huquqiga ega.",
    terms: ["Inson", "Tenglik", "Erkinlik"]
  },
  {
    id: "5",
    grade: 5,
    title: "Davlat ramzlari",
    goal: "O‘zbekiston davlat ramzlarini o‘rganish.",
    body: "O‘zbekiston Respublikasining davlat ramzlari bayroq, gerb va madhiyadir.",
    example: "Davlat madhiyasi yangraganda unga hurmat ko‘rsatiladi.",
    terms: ["Bayroq", "Gerb", "Madhiya"]
  },
  {
    id: "6",
    grade: 6,
    title: "Fuqarolik va burch",
    goal: "Fuqarolarning huquq va burchlarini tushunish.",
    body: "Fuqarolar qonunlarga rioya qilishlari va boshqa insonlarning huquqlarini hurmat qilishlari lozim.",
    example: "Jamoat joylarida tartibni saqlash fuqarolik mas’uliyatidir.",
    terms: ["Fuqaro", "Burch", "Mas’uliyat"]
  },
  {
    id: "7",
    grade: 7,
    title: "Huquqbuzarlik va javobgarlik",
    goal: "Huquqbuzarlik tushunchasini o‘rganish.",
    body: "Huquqbuzarlik qonunga xilof aybli harakat yoki harakatsizlikdir.",
    example: "Birovning mulkiga zarar yetkazish javobgarlikka sabab bo‘lishi mumkin.",
    terms: ["Huquqbuzarlik", "Qonun", "Javobgarlik"]
  },
  {
    id: "8",
    grade: 8,
    title: "Voyaga yetmaganlarning huquqlari",
    goal: "Bolalarning qonuniy manfaatlarini o‘rganish.",
    body: "Voyaga yetmaganlar ta’lim olish, himoyalanish va rivojlanish huquqiga ega.",
    example: "Har bir bolaning ta’lim olish huquqi himoya qilinadi.",
    terms: ["Bola", "Himoya", "Huquq"]
  },
  {
    id: "9",
    grade: 9,
    title: "Huquqiy davlat",
    goal: "Huquqiy davlat belgilarini tushunish.",
    body: "Huquqiy davlatda qonun ustuvorligi ta’minlanadi va inson huquqlari himoya qilinadi.",
    example: "Davlat organlari ham qonunlarga amal qiladi.",
    terms: ["Huquqiy davlat", "Qonun", "Ustuvorlik"]
  },
  {
    id: "10",
    grade: 10,
    title: "Konstitutsiyaviy huquqlar",
    goal: "Konstitutsiyaviy huquq va erkinliklarni o‘rganish.",
    body: "Konstitutsiyada shaxsiy, siyosiy, iqtisodiy, ijtimoiy va madaniy huquqlar belgilangan.",
    example: "Fuqarolar qonunda belgilangan tartibda murojaat qilish huquqiga ega.",
    terms: ["Konstitutsiya", "Erkinlik", "Huquq"]
  },
  {
    id: "11",
    grade: 11,
    title: "Xalqaro huquq",
    goal: "Xalqaro huquq va inson huquqlari haqida bilim olish.",
    body: "Xalqaro huquq davlatlar o‘rtasidagi munosabatlarni tartibga soladi.",
    example: "Bola huquqlari to‘g‘risidagi konvensiya bolalarni himoya qilishga xizmat qiladi.",
    terms: ["Xalqaro huquq", "Konvensiya", "Inson huquqlari"]
  }
];
