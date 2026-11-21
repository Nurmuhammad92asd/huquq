
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
