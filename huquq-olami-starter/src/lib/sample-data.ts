export type Lesson = { id: string; grade: number; title: string; goal: string; body: string; terms: string[]; example: string };
export const lessons: Lesson[] = [
 {id:"8-1",grade:8,title:"Huquq va uning jamiyatdagi o‘rni",goal:"Huquq tushunchasi va uning vazifalarini anglash.",body:"Huquq — davlat tomonidan belgilangan yoki tan olingan, umummajburiy xulq-atvor qoidalari tizimidir. Huquq jamiyatda tartib, adolat va inson huquqlarini himoya qilishga xizmat qiladi.",terms:["Huquq","Qonun","Adolat"],example:"Maktab ichki tartib-qoidalariga rioya qilish — umumiy tartibni saqlashga xizmat qiladi."},
 {id:"9-1",grade:9,title:"Inson huquqlari va erkinliklari",goal:"Asosiy huquq va erkinliklarni farqlash.",body:"Inson huquqlari har bir insonga tug‘ilganidan boshlab tegishli bo‘lgan huquq va erkinliklardir. Davlat ularni tan olishi, hurmat qilishi va himoya qilishi lozim.",terms:["Inson huquqlari","Erkinlik","Tenglik"],example:"Har bir bola ta’lim olish huquqiga ega."},
 {id:"11-1",grade:11,title:"Konstitutsiyaviy huquq asoslari",goal:"Konstitutsiyaning huquqiy tizimdagi o‘rnini tushunish.",body:"Konstitutsiya davlatning asosiy qonuni bo‘lib, davlat tuzilishi, hokimiyat organlari hamda inson va fuqaroning asosiy huquq va burchlarini belgilaydi.",terms:["Konstitutsiya","Davlat hokimiyati","Fuqarolik"],example:"Davlat organlari o‘z faoliyatida Konstitutsiya va qonunlarga amal qilishi shart."}
];
export const quizzes = [
 {grade:8,title:"Huquq asoslari — boshlang‘ich test",questions:[
  {q:"Huquqning asosiy vazifalaridan biri qaysi?",a:["Jamiyatda tartibni ta’minlash","Faqat jazolash","Faqat soliq yig‘ish","Sport musobaqalarini tashkil etish"],correct:0,why:"Huquq ijtimoiy munosabatlarni tartibga soladi."},
  {q:"Qonun nima?",a:["Tavsiya","Umummajburiy normativ-huquqiy hujjat","Shaxsiy fikr","O‘yin qoidasi"],correct:1,why:"Qonun vakolatli organ tomonidan qabul qilinadigan normativ-huquqiy hujjatdir."}
 ]},
 {grade:9,title:"Inson huquqlari — test",questions:[
  {q:"Inson huquqlari kimga tegishli?",a:["Faqat mansabdorlarga","Har bir insonga","Faqat kattalarga","Faqat saylovchilarga"],correct:1,why:"Inson huquqlari har bir insonga tegishlidir."},
  {q:"Ta’lim olish qanday huquq?",a:["Shaxsiy huquq","Ijtimoiy-iqtisodiy huquq","Faqat siyosiy huquq","Mulkiy huquq"],correct:1,why:"Ta’lim olish ijtimoiy huquqlardan biridir."}
 ]},
 {grade:11,title:"Konstitutsiyaviy bilimlar — test",questions:[
  {q:"Konstitutsiya qanday hujjat?",a:["Oddiy shartnoma","Davlatning asosiy qonuni","Mahalliy e’lon","Ichki yo‘riqnoma"],correct:1,why:"Konstitutsiya oliy yuridik kuchga ega asosiy qonundir."},
  {q:"Davlat organlari nimaga amal qilishi shart?",a:["Faqat odatlarga","Konstitutsiya va qonunlarga","Faqat ko‘rsatmalarga","Ixtiyoriy qoidalarga"],correct:1,why:"Davlat organlari Konstitutsiya va qonunlarga muvofiq ish yuritadi."}
 ]}
];