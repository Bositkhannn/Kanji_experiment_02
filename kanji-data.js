// To'liq N5 Daraja Kanji Ma'lumotlar Bazasi - 110 ta Kanji
const kanjiDatabase = [
    // Tabiat va geografiya (10 ta)
    { kanji: "山", meaning: "Tog'", kun: "やま", on: "サン", strokes: 3, examples: "山 (やま - tog'), 富士山 (ふじさん - Fuji tog'i)" },
    { kanji: "川", meaning: "Daryo", kun: "かわ", on: "セン", strokes: 3, examples: "川 (かわ - daryo), 小川 (おがわ - soy)" },
    { kanji: "田", meaning: "Sholi maydoni", kun: "た", on: "デン", strokes: 5, examples: "田 (た - sholi maydoni), 田中 (たなか - familiya)" },
    { kanji: "日", meaning: "Kun, Quyosh", kun: "ひ、か", on: "ニチ、ジツ", strokes: 4, examples: "日本 (にほん - Yaponiya), 今日 (きょう - bugun)" },
    { kanji: "月", meaning: "Oy, Oy (vaqt)", kun: "つき", on: "ゲツ、ガツ", strokes: 4, examples: "月曜日 (げつようび - dushanba), 一月 (いちがつ - yanvar)" },
    { kanji: "火", meaning: "Olov", kun: "ひ", on: "カ", strokes: 4, examples: "火曜日 (かようび - seshanba), 火事 (かじ - yong'in)" },
    { kanji: "水", meaning: "Suv", kun: "みず", on: "スイ", strokes: 4, examples: "水曜日 (すいようび - chorshanba), 水 (みず - suv)" },
    { kanji: "木", meaning: "Daraxt, Yog'och", kun: "き", on: "モク、ボク", strokes: 4, examples: "木曜日 (もくようび - payshanba), 木 (き - daraxt)" },
    { kanji: "金", meaning: "Oltin, Pul", kun: "かね", on: "キン", strokes: 8, examples: "金曜日 (きんようび - juma), お金 (おかね - pul)" },
    { kanji: "土", meaning: "Tuproq, Yer", kun: "つち", on: "ド、ト", strokes: 3, examples: "土曜日 (どようび - shanba), 土 (つち - tuproq)" },

    // Raqamlar (10 ta)
    { kanji: "一", meaning: "Bir", kun: "ひと・つ", on: "イチ、イツ", strokes: 1, examples: "一つ (ひとつ - bitta), 一人 (ひとり - bir kishi)" },
    { kanji: "二", meaning: "Ikki", kun: "ふた・つ", on: "ニ", strokes: 2, examples: "二つ (ふたつ - ikkita), 二人 (ふたり - ikki kishi)" },
    { kanji: "三", meaning: "Uch", kun: "みっ・つ", on: "サン", strokes: 3, examples: "三つ (みっつ - uchta), 三日 (みっか - uchinchi kun)" },
    { kanji: "四", meaning: "To'rt", kun: "よっ・つ、よん", on: "シ", strokes: 5, examples: "四つ (よっつ - to'rtta), 四月 (しがつ - aprel)" },
    { kanji: "五", meaning: "Besh", kun: "いつ・つ", on: "ゴ", strokes: 4, examples: "五つ (いつつ - beshta), 五月 (ごがつ - may)" },
    { kanji: "六", meaning: "Olti", kun: "むっ・つ", on: "ロク", strokes: 4, examples: "六つ (むっつ - oltita), 六月 (ろくがつ - iyun)" },
    { kanji: "七", meaning: "Yetti", kun: "なな・つ", on: "シチ", strokes: 2, examples: "七つ (ななつ - yettita), 七月 (しちがつ - iyul)" },
    { kanji: "八", meaning: "Sakkiz", kun: "やっ・つ", on: "ハチ", strokes: 2, examples: "八つ (やっつ - sakkizta), 八月 (はちがつ - avgust)" },
    { kanji: "九", meaning: "To'qqiz", kun: "ここの・つ", on: "キュウ、く", strokes: 2, examples: "九つ (ここのつ - to'qqizta), 九月 (くがつ - sentyabr)" },
    { kanji: "十", meaning: "O'n", kun: "とお", on: "ジュウ", strokes: 2, examples: "十 (じゅう - o'n), 十月 (じゅうがつ - oktyabr)" },

    // Katta raqamlar va vaqt (10 ta)
    { kanji: "百", meaning: "Yuz", kun: "", on: "ヒャク", strokes: 6, examples: "百 (ひゃく - yuz), 三百 (さんびゃく - uch yuz)" },
    { kanji: "千", meaning: "Ming", kun: "", on: "セン", strokes: 3, examples: "千 (せん - ming), 二千 (にせん - ikki ming)" },
    { kanji: "万", meaning: "O'n ming", kun: "", on: "マン、バン", strokes: 3, examples: "一万 (いちまん - o'n ming), 万歳 (ばんざい - hurra)" },
    { kanji: "円", meaning: "Yen, Doira", kun: "", on: "エン", strokes: 4, examples: "百円 (ひゃくえん - yuz yen), 円 (えん - doira)" },
    { kanji: "年", meaning: "Yil", kun: "とし", on: "ネン", strokes: 6, examples: "今年 (ことし - bu yil), 一年 (いちねん - bir yil)" },
    { kanji: "上", meaning: "Yuqori, Tepada", kun: "うえ、あ・がる", on: "ジョウ", strokes: 3, examples: "上 (うえ - yuqori), 上手 (じょうず - mohir)" },
    { kanji: "下", meaning: "Past, Quyida", kun: "した、さ・がる", on: "カ、ゲ", strokes: 3, examples: "下 (した - past), 下手 (へた - qo'pol)" },
    { kanji: "中", meaning: "O'rta, Ichida", kun: "なか", on: "チュウ", strokes: 4, examples: "中 (なか - ichida), 中学校 (ちゅうがっこう - o'rta maktab)" },
    { kanji: "半", meaning: "Yarim", kun: "なか・ば", on: "ハン", strokes: 5, examples: "半分 (はんぶん - yarim), 三時半 (さんじはん - 3:30)" },
    { kanji: "分", meaning: "Qism, Daqiqa", kun: "わ・ける", on: "ブン、フン", strokes: 4, examples: "分かる (わかる - tushunish), 十分 (じゅっぷん - 10 daqiqa)" },

    // Odam va tana (10 ta)
    { kanji: "人", meaning: "Odam, Inson", kun: "ひと", on: "ジン、ニン", strokes: 2, examples: "人 (ひと - odam), 日本人 (にほんじん - yaponlik)" },
    { kanji: "子", meaning: "Bola", kun: "こ", on: "シ、ス", strokes: 3, examples: "子供 (こども - bola), 男の子 (おとこのこ - o'g'il bola)" },
    { kanji: "女", meaning: "Ayol, Qiz", kun: "おんな", on: "ジョ、ニョ", strokes: 3, examples: "女 (おんな - ayol), 女性 (じょせい - ayol kishi)" },
    { kanji: "男", meaning: "Erkak, Yigit", kun: "おとこ", on: "ダン、ナン", strokes: 7, examples: "男 (おとこ - erkak), 男性 (だんせい - erkak kishi)" },
    { kanji: "目", meaning: "Ko'z", kun: "め", on: "モク、ボク", strokes: 5, examples: "目 (め - ko'z), 目的 (もくてき - maqsad)" },
    { kanji: "口", meaning: "Og'iz", kun: "くち", on: "コウ、ク", strokes: 3, examples: "口 (くち - og'iz), 入口 (いりぐち - kirish)" },
    { kanji: "耳", meaning: "Quloq", kun: "みみ", on: "ジ", strokes: 6, examples: "耳 (みみ - quloq), 早耳 (はやみみ - xabarchi)" },
    { kanji: "手", meaning: "Qo'l", kun: "て", on: "シュ", strokes: 4, examples: "手 (て - qo'l), 上手 (じょうず - mohir)" },
    { kanji: "足", meaning: "Oyoq", kun: "あし、た・りる", on: "ソク", strokes: 7, examples: "足 (あし - oyoq), 足りる (たりる - yetarli bo'lish)" },
    { kanji: "力", meaning: "Kuch, Quvvat", kun: "ちから", on: "リョク、リキ", strokes: 2, examples: "力 (ちから - kuch), 協力 (きょうりょく - hamkorlik)" },

    // Oila va ta'lim (10 ta)
    { kanji: "父", meaning: "Ota", kun: "ちち", on: "フ", strokes: 4, examples: "父 (ちち - ota), お父さん (おとうさん - dada)" },
    { kanji: "母", meaning: "Ona", kun: "はは", on: "ボ", strokes: 5, examples: "母 (はは - ona), お母さん (おかあさん - oyi)" },
    { kanji: "先", meaning: "Avval, Oldin", kun: "さき", on: "セン", strokes: 6, examples: "先生 (せんせい - o'qituvchi), 先月 (せんげつ - o'tgan oy)" },
    { kanji: "生", meaning: "Hayot, Tug'ilish", kun: "い・きる、う・まれる", on: "セイ、ショウ", strokes: 5, examples: "学生 (がくせい - talaba), 先生 (せんせい - o'qituvchi)" },
    { kanji: "学", meaning: "O'rganish", kun: "まな・ぶ", on: "ガク", strokes: 8, examples: "学校 (がっこう - maktab), 学生 (がくせい - talaba)" },
    { kanji: "校", meaning: "Maktab", kun: "", on: "コウ", strokes: 10, examples: "学校 (がっこう - maktab), 高校 (こうこう - o'rta maktab)" },
    { kanji: "友", meaning: "Do'st", kun: "とも", on: "ユウ", strokes: 4, examples: "友達 (ともだち - do'st), 友人 (ゆうじん - do'st)" },
    { kanji: "本", meaning: "Kitob, Asl", kun: "もと", on: "ホン", strokes: 5, examples: "本 (ほん - kitob), 日本 (にほん - Yaponiya)" },
    { kanji: "毎", meaning: "Har bir", kun: "", on: "マイ", strokes: 6, examples: "毎日 (まいにち - har kuni), 毎年 (まいとし - har yili)" },
    { kanji: "何", meaning: "Nima", kun: "なに、なん", on: "カ", strokes: 7, examples: "何 (なに - nima), 何か (なにか - biror narsa)" },

    // Yo'nalish va joy (10 ta)
    { kanji: "前", meaning: "Old, Ilgari", kun: "まえ", on: "ゼン", strokes: 9, examples: "前 (まえ - old), 午前 (ごぜん - ertalab)" },
    { kanji: "後", meaning: "Orqa, Keyin", kun: "うし・ろ、あと", on: "ゴ、コウ", strokes: 9, examples: "後ろ (うしろ - orqa), 午後 (ごご - tushdan keyin)" },
    { kanji: "外", meaning: "Tashqi, Chet", kun: "そと", on: "ガイ、ゲ", strokes: 5, examples: "外 (そと - tashqari), 外国 (がいこく - chet el)" },
    { kanji: "左", meaning: "Chap", kun: "ひだり", on: "サ", strokes: 5, examples: "左 (ひだり - chap), 左手 (ひだりて - chap qo'l)" },
    { kanji: "右", meaning: "O'ng", kun: "みぎ", on: "ウ、ユウ", strokes: 5, examples: "右 (みぎ - o'ng), 右手 (みぎて - o'ng qo'l)" },
    { kanji: "東", meaning: "Sharq", kun: "ひがし", on: "トウ", strokes: 8, examples: "東 (ひがし - sharq), 東京 (とうきょう - Tokio)" },
    { kanji: "西", meaning: "G'arb", kun: "にし", on: "セイ、サイ", strokes: 6, examples: "西 (にし - g'arb), 西洋 (せいよう - G'arb)" },
    { kanji: "南", meaning: "Janub", kun: "みなみ", on: "ナン", strokes: 9, examples: "南 (みなみ - janub), 南口 (みなみぐち - janubiy kirish)" },
    { kanji: "北", meaning: "Shimol", kun: "きた", on: "ホク", strokes: 5, examples: "北 (きた - shimol), 北海道 (ほっかいどう - Hokkaydo)" },
    { kanji: "名", meaning: "Ism", kun: "な", on: "メイ、ミョウ", strokes: 6, examples: "名前 (なまえ - ism), 有名 (ゆうめい - mashhur)" },

    // Hayvonlar va ob-havo (10 ta)
    { kanji: "牛", meaning: "Sigir", kun: "うし", on: "ギュウ", strokes: 4, examples: "牛 (うし - sigir), 牛肉 (ぎゅうにく - mol go'shti)" },
    { kanji: "馬", meaning: "Ot", kun: "うま", on: "バ", strokes: 10, examples: "馬 (うま - ot), 馬車 (ばしゃ - arava)" },
    { kanji: "魚", meaning: "Baliq", kun: "さかな", on: "ギョ", strokes: 11, examples: "魚 (さかな - baliq), 金魚 (きんぎょ - oltin baliq)" },
    { kanji: "貝", meaning: "Qisqichbaqa", kun: "かい", on: "バイ", strokes: 7, examples: "貝 (かい - qobiq), 貝殻 (かいがら - qobiq)" },
    { kanji: "雨", meaning: "Yomg'ir", kun: "あめ", on: "ウ", strokes: 8, examples: "雨 (あめ - yomg'ir), 大雨 (おおあめ - kuchli yomg'ir)" },
    { kanji: "天", meaning: "Osmon, Jannat", kun: "あめ、あま", on: "テン", strokes: 4, examples: "天気 (てんき - ob-havo), 天国 (てんごく - jannat)" },
    { kanji: "気", meaning: "Havo, Ruh", kun: "", on: "キ、ケ", strokes: 6, examples: "天気 (てんき - ob-havo), 元気 (げんき - sog'lom)" },
    { kanji: "車", meaning: "Mashina", kun: "くるま", on: "シャ", strokes: 7, examples: "車 (くるま - mashina), 電車 (でんしゃ - poyezd)" },
    { kanji: "門", meaning: "Darvoza", kun: "かど", on: "モン", strokes: 8, examples: "門 (もん - darvoza), 専門 (せんもん - mutaxassislik)" },
    { kanji: "午", meaning: "Tushlik, Ot yili", kun: "", on: "ゴ", strokes: 4, examples: "午前 (ごぜん - ertalab), 午後 (ごご - tushdan keyin)" },

    // Sifatlar (10 ta)
    { kanji: "大", meaning: "Katta", kun: "おお・きい", on: "ダイ、タイ", strokes: 3, examples: "大きい (おおきい - katta), 大学 (だいがく - universitet)" },
    { kanji: "小", meaning: "Kichik", kun: "ちい・さい、こ", on: "ショウ", strokes: 3, examples: "小さい (ちいさい - kichik), 小学校 (しょうがっこう - boshlang'ich maktab)" },
    { kanji: "高", meaning: "Baland, Qimmat", kun: "たか・い", on: "コウ", strokes: 10, examples: "高い (たかい - baland/qimmat), 高校 (こうこう - o'rta maktab)" },
    { kanji: "安", meaning: "Arzon, Xavfsiz", kun: "やす・い", on: "アン", strokes: 6, examples: "安い (やすい - arzon), 安全 (あんぜん - xavfsiz)" },
    { kanji: "新", meaning: "Yangi", kun: "あたら・しい", on: "シン", strokes: 13, examples: "新しい (あたらしい - yangi), 新聞 (しんぶん - gazeta)" },
    { kanji: "古", meaning: "Eski", kun: "ふる・い", on: "コ", strokes: 5, examples: "古い (ふるい - eski), 古代 (こだい - qadimgi davr)" },
    { kanji: "長", meaning: "Uzun, Rahbar", kun: "なが・い", on: "チョウ", strokes: 8, examples: "長い (ながい - uzun), 社長 (しゃちょう - direktor)" },
    { kanji: "多", meaning: "Ko'p", kun: "おお・い", on: "タ", strokes: 6, examples: "多い (おおい - ko'p), 多分 (たぶん - ehtimol)" },
    { kanji: "少", meaning: "Oz", kun: "すく・ない、すこ・し", on: "ショウ", strokes: 4, examples: "少ない (すくない - oz), 少し (すこし - biroz)" },
    { kanji: "早", meaning: "Erta", kun: "はや・い", on: "ソウ、サッ", strokes: 6, examples: "早い (はやい - erta), 早速 (さっそく - darhol)" },

    // Fe'llar 1 (10 ta)
    { kanji: "行", meaning: "Borish", kun: "い・く、ゆ・く", on: "コウ、ギョウ", strokes: 6, examples: "行く (いく - borish), 銀行 (ぎんこう - bank)" },
    { kanji: "来", meaning: "Kelish", kun: "く・る", on: "ライ", strokes: 7, examples: "来る (くる - kelish), 来年 (らいねん - kelasi yil)" },
    { kanji: "食", meaning: "Yemoq, Ovqat", kun: "た・べる", on: "ショク", strokes: 9, examples: "食べる (たべる - yemoq), 食事 (しょくじ - ovqat)" },
    { kanji: "見", meaning: "Ko'rish", kun: "み・る", on: "ケン", strokes: 7, examples: "見る (みる - ko'rish), 見物 (けんぶつ - tomosha)" },
    { kanji: "入", meaning: "Kirish", kun: "はい・る、い・れる", on: "ニュウ", strokes: 2, examples: "入る (はいる - kirish), 入口 (いりぐち - kirish joyi)" },
    { kanji: "出", meaning: "Chiqish", kun: "で・る、だ・す", on: "シュツ", strokes: 5, examples: "出る (でる - chiqish), 出口 (でぐち - chiqish joyi)" },
    { kanji: "立", meaning: "Turish", kun: "た・つ", on: "リツ", strokes: 5, examples: "立つ (たつ - turish), 国立 (こくりつ - davlat)" },
    { kanji: "書", meaning: "Yozish", kun: "か・く", on: "ショ", strokes: 10, examples: "書く (かく - yozish), 読書 (どくしょ - o'qish)" },
    { kanji: "言", meaning: "Aytish", kun: "い・う", on: "ゲン、ゴン", strokes: 7, examples: "言う (いう - aytish), 言葉 (ことば - so'z)" },
    { kanji: "飲", meaning: "Ichish", kun: "の・む", on: "イン", strokes: 12, examples: "飲む (のむ - ichish), 飲み物 (のみもの - ichimlik)" },

    // Fe'llar 2 (10 ta)
    { kanji: "話", meaning: "Gapirish", kun: "はな・す、はなし", on: "ワ", strokes: 13, examples: "話す (はなす - gapirish), 電話 (でんわ - telefon)" },
    { kanji: "読", meaning: "O'qish", kun: "よ・む", on: "ドク、トク", strokes: 14, examples: "読む (よむ - o'qish), 読書 (どくしょ - o'qish)" },
    { kanji: "語", meaning: "Til, So'z", kun: "かた・る", on: "ゴ", strokes: 14, examples: "日本語 (にほんご - yapon tili), 英語 (えいご - ingliz tili)" },
    { kanji: "間", meaning: "Orasida, Vaqt", kun: "あいだ", on: "カン、ケン", strokes: 12, examples: "時間 (じかん - vaqt), 間 (あいだ - orasida)" },
    { kanji: "聞", meaning: "Eshitish", kun: "き・く", on: "ブン、モン", strokes: 14, examples: "聞く (きく - eshitish), 新聞 (しんぶん - gazeta)" },
    { kanji: "買", meaning: "Sotib olish", kun: "か・う", on: "バイ", strokes: 12, examples: "買う (かう - sotib olish), 買い物 (かいもの - xarid)" },
    { kanji: "休", meaning: "Dam olish", kun: "やす・む", on: "キュウ", strokes: 6, examples: "休む (やすむ - dam olish), 休日 (きゅうじつ - dam olish kuni)" },
    { kanji: "時", meaning: "Vaqt, Soat", kun: "とき", on: "ジ", strokes: 10, examples: "時間 (じかん - vaqt), 何時 (なんじ - soat necha)" },
    { kanji: "週", meaning: "Hafta", kun: "", on: "シュウ", strokes: 11, examples: "今週 (こんしゅう - bu hafta), 毎週 (まいしゅう - har hafta)" },
    { kanji: "道", meaning: "Yo'l", kun: "みち", on: "ドウ、トウ", strokes: 12, examples: "道 (みち - yo'l), 北海道 (ほっかいどう - Hokkaydo)" },

    // Umumiy so'zlar (10 ta)
    { kanji: "今", meaning: "Hozir", kun: "いま", on: "コン、キン", strokes: 4, examples: "今 (いま - hozir), 今日 (きょう - bugun)" },
    { kanji: "会", meaning: "Uchrashish", kun: "あ・う", on: "カイ、エ", strokes: 6, examples: "会う (あう - uchrashish), 会社 (かいしゃ - kompaniya)" },
    { kanji: "社", meaning: "Kompaniya", kun: "", on: "シャ", strokes: 7, examples: "会社 (かいしゃ - kompaniya), 社会 (しゃかい - jamiyat)" },
    { kanji: "店", meaning: "Do'kon", kun: "みせ", on: "テン", strokes: 8, examples: "店 (みせ - do'kon), 店員 (てんいん - sotuvchi)" },
    { kanji: "駅", meaning: "Stantsiya", kun: "", on: "エキ", strokes: 14, examples: "駅 (えき - stantsiya), 東京駅 (とうきょうえき - Tokio stantsiyasi)" },
    { kanji: "花", meaning: "Gul", kun: "はな", on: "カ", strokes: 7, examples: "花 (はな - gul), 花見 (はなみ - gul tomosha qilish)" },
    { kanji: "国", meaning: "Davlat, Mamlakat", kun: "くに", on: "コク", strokes: 8, examples: "国 (くに - davlat), 外国 (がいこく - chet el)" },
    { kanji: "白", meaning: "Oq", kun: "しろ・い", on: "ハク、ビャク", strokes: 5, examples: "白い (しろい - oq), 白鳥 (はくちょう - oqqush)" },
    { kanji: "空", meaning: "Osmon, Bo'sh", kun: "そら、あ・く", on: "クウ", strokes: 8, examples: "空 (そら - osmon), 空港 (くうこう - aeroport)" },
    { kanji: "電", meaning: "Elektr", kun: "", on: "デン", strokes: 13, examples: "電車 (でんしゃ - poyezd), 電話 (でんわ - telefon)" }
];

// Foydalanuvchi taraqqiyotini saqlash
function saveProgress() {
    const progress = {
        learned: Array.from(learnedKanji),
        learning: Array.from(learningKanji),
        stats: userStats,
        theme: currentTheme,
        device: deviceType
    };
    localStorage.setItem('kanjiProgressUz', JSON.stringify(progress));
}

// Saqlangan ma'lumotlarni yuklash
function loadProgress() {
    const saved = localStorage.getItem('kanjiProgressUz');
    if (saved) {
        const progress = JSON.parse(saved);
        learnedKanji = new Set(progress.learned || []);
        learningKanji = new Set(progress.learning || []);
        userStats = progress.stats || { totalStudied: 0, quizzesTaken: 0, correctAnswers: 0 };
        
        // Load theme and device
        if (progress.theme) {
            changeTheme(progress.theme);
        }
        if (progress.device) {
            deviceType = progress.device;
            document.body.classList.add(deviceType);
        }
        
        updateStats();
    }
}

// Foydalanuvchi taraqqiyoti
let learnedKanji = new Set();
let learningKanji = new Set();
let userStats = {
    totalStudied: 0,
    quizzesTaken: 0,
    correctAnswers: 0
};

let currentTheme = 'dark';
let deviceType = null;