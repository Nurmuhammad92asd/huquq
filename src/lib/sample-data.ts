
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
    title: "Mening huquq va majburiyatlarim",
    goal: "O'quvchilarga huquq va majburiyat tushunchalarini o'rgatish.",
    body:
      "Har bir inson huquqlarga ega. Bola ta'lim olish, dam olish, sog'lom yashash va o'z fikrini bildirish huquqiga ega. Shu bilan birga, har birimiz boshqalarning huquqlarini hurmat qilishimiz kerak.",
    example:
      "Maktabda har bir o'quvchi bilim olish huquqiga ega. Boshqalarga xalaqit bermaslik esa uning majburiyatidir.",
    terms: ["Huquq", "Majburiyat", "Bola huquqlari"]
  },
  {
    id: "2",
    grade: 2,
    title: "Oila va bola huquqlari",
    goal: "Oilada bolaning huquq va manfaatlarini tushuntirish.",
    body:
      "Oila jamiyatning muhim bo'g'inidir. Har bir bola oilada mehr va g'amxo'rlik ko'rish, tarbiya olish hamda o'z fikrini bildirish huquqiga ega.",
    example:
      "Bola o'z fikrini ota-onasiga odob bilan aytishi va ularning fikrini hurmat qilishi mumkin.",
    terms: ["Oila", "G'amxo'rlik", "Tarbiya"]
  },
  {
    id: "3",
    grade: 3,
    title: "Konstitutsiya va qonun",
    goal: "Konstitutsiyaning davlat va jamiyat hayotidagi o'rnini anglash.",
    body:
      "Konstitutsiya davlatning asosiy qonunidir. Unda inson huquqlari, erkinliklari, burchlari va davlat boshqaruvining asosiy qoidalari belgilangan.",
    example:
      "Har bir fuqaro qonunlarga rioya qilishi va boshqa insonlarning huquqlarini hurmat qilishi kerak.",
    terms: ["Konstitutsiya", "Qonun", "Fuqaro"]
  },
  {
    id: "4",
    grade: 4,
    title: "Inson huquqlari",
    goal: "Insonning asosiy huquqlari haqida tushuncha berish.",
    body:
      "Inson huquqlari har bir kishiga tug'ilganidan boshlab tegishli bo'ladi. Yashash, ta'lim olish, mehnat qilish va fikrlash erkinligi asosiy huquqlardandir.",
    example:
      "Maktabda barcha bolalar teng ta'lim olish imkoniyatiga ega bo'lishi lozim.",
    terms: ["Inson huquqlari", "Tenglik", "Erkinlik"]
  },
  {
    id: "5",
    grade: 5,
    title: "Davlat ramzlari",
    goal: "O'zbekiston Respublikasining davlat ramzlarini o'rganish.",
    body:
      "O'zbekiston Respublikasining davlat ramzlari bayroq, gerb va madhiyadan iborat. Ular davlat mustaqilligi va xalqimizning milliy qadriyatlarini ifodalaydi.",
    example:
      "Davlat madhiyasi yangraganda hurmat yuzasidan tik turiladi.",
    terms: ["Bayroq", "Gerb", "Madhiya"]
  },
  {
    id: "6",
    grade: 6,
    title: "Fuqarolik va burch",
    goal: "Fuqarolik tushunchasi va fuqarolarning burchlarini tushuntirish.",
    body:
      "Fuqarolik shaxsning muayyan davlat bilan huquqiy aloqasini anglatadi. Fuqarolar Konstitutsiya va qonunlarga rioya qilishlari, boshqa insonlarning huquqlarini hurmat qilishlari lozim.",
    example:
      "Jamoat joylarida tartibni saqlash va tabiatni asrash fuqarolik mas'uliyatining ko'rinishidir.",
    terms: ["Fuqarolik", "Burch", "Mas'uliyat"]
  },
  {
    id: "7",
    grade: 7,
    title: "Huquqbuzarlik va javobgarlik",
    goal: "Huquqbuzarlik va uning huquqiy oqibatlarini tushuntirish.",
    body:
      "Huquqbuzarlik qonunga xilof bo'lgan aybli xatti-harakat yoki harakatsizlikdir. Qonunchilikda huquqbuzarlik turiga qarab tegishli javobgarlik belgilangan.",
    example:
      "Birovning mulkiga zarar yetkazish qonunchilikda belgilangan javobgarlikka sabab bo'lishi mumkin.",
    terms: ["Huquqbuzarlik", "Javobgarlik", "Qonun"]
  },
  {
    id: "8",
    grade: 8,
    title: "Voyaga yetmaganlarning huquqlari",
    goal: "Voyaga yetmaganlarning qonuniy huquq va manfaatlarini o'rganish.",
    body:
      "Voyaga yetmaganlar qonun bilan himoya qilinadi. Ular ta'lim olish, sog'lig'ini saqlash, himoyalanish va rivojlanish huquqlariga ega.",
    example:
      "Bolaning ta'lim olishiga to'sqinlik qilish mumkin emas.",
    terms: ["Voyaga yetmagan", "Himoya", "Qonuniy manfaat"]
  },
  {
    id: "9",
    grade: 9,
    title: "Huquqiy davlat va fuqarolik jamiyati",
    goal: "Huquqiy davlatning asosiy belgilarini tushuntirish.",
    body:
      "Huquqiy davlatda qonun ustuvorligi ta'minlanadi, inson huquqlari himoya qilinadi va davlat organlari o'z vakolatlari doirasida faoliyat yuritadi.",
    example:
      "Davlat organlari ham o'z faoliyatida Konstitutsiya va qonunlarga amal qiladi.",
    terms: ["Huquqiy davlat", "Qonun ustuvorligi", "Fuqarolik jamiyati"]
  },
  {
    id: "10",
    grade: 10,
    title: "Konstitutsiyaviy huquqlar va erkinliklar",
    goal: "Konstitutsiyada belgilangan asosiy huquq va erkinliklarni tahlil qilish.",
    body:
      "O'zbekiston Respublikasi Konstitutsiyasida insonning shaxsiy, siyosiy, iqtisodiy, ijtimoiy va madaniy huquqlari mustahkamlangan. Davlat inson huquq va erkinliklarini ta'minlashga mas'uldir.",
    example:
      "Fuqaro qonunda belgilangan tartibda davlat organlariga murojaat qilish huquqiga ega.",
    terms: ["Konstitutsiyaviy huquq", "Erkinlik", "Murojaat"]
  },
  {
    id: "11",
    grade: 11,
    title: "Xalqaro huquq va inson huquqlari",
    goal: "Xalqaro huquqning inson huquqlarini himoya qilishdagi ahamiyatini o'rganish.",
    body:
      "Xalqaro huquq davlatlar o'rtasidagi munosabatlarni tartibga soladi. Inson huquqlari bo'yicha xalqaro hujjatlar inson qadr-qimmati va erkinliklarini himoya qilishga xizmat qiladi.",
    example:
      "Bola huquqlari to'g'risidagi konvensiya bolalarning huquqlarini himoya qilishga qaratilgan xalqaro hujjatdir.",
    terms: ["Xalqaro huquq", "Konvensiya", "Inson qadr-qimmati"]
  }
];
