# HUQUQ OLAMI

8-, 9- va 11-sinflar uchun 2026–2027 o‘quv yilining 2-choragiga mo‘ljallangan huquqiy ta’lim platformasi starter loyihasi.

## Ishga tushirish
1. Node.js 20+ o‘rnating.
2. Terminalda loyiha papkasiga kiring.
3. `npm install`
4. `.env.example` faylidan `.env.local` yarating va Supabase URL hamda anon key kiriting.
5. Supabase SQL Editor ichida `supabase/schema.sql` faylini ishga tushiring.
6. `npm run dev` va brauzerda `http://localhost:3000`.

## Sahifalar
- `/` — bosh sahifa
- `/sinflar` — sinflar
- `/sinflar/8`, `/sinflar/9`, `/sinflar/11` — sinf sahifalari
- `/dars/8-1` — namunaviy dars
- `/testlar` — interaktiv testlar
- `/lugat` — huquqiy lug‘at
- `/kabinet` — autentifikatsiya oynasi

## Muhim holat
Bu — ishga tushiriladigan boshlang‘ich loyiha, hali productionga tayyor yakuniy tizim emas. Supabase loyihasini yaratish, `.env.local` qiymatlarini kiritish, email autentifikatsiyasini sozlash, rollar uchun xavfsiz RLS siyosatlari, admin CRUD, Excel eksporti, fayl yuklash va sertifikat yaratish keyingi ishlab chiqish bosqichlaridir. `schema.sql` bazaviy jadvallar va cheklangan RLS namunalarini beradi; real maktabda ishlatishdan oldin xavfsizlik auditi talab qilinadi.

## O‘quv materiallari
Hozirgi darslar va testlar demo kontentdir. Ular 2026–2027 yilning rasmiy 2-chorak taqvim-mavzu rejasidan tasdiqlanmagan. Rasmiy darslik va dastur asosida o‘qituvchi tomonidan tahrirlanishi shart. Savollardagi huquqiy ma’lumotlarni amaldagi qonunchilik bilan tekshiring.
