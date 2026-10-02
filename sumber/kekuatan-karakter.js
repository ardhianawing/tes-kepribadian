// IPIP-VIA-R (Bluemke, Partsch, Saucier & Lechner, 2021), 96 butir, 24 skala x 4. Semua butir dipakai.
module.exports = {
  id: 'kekuatan-karakter',
  kunci: 'tes-kekuatan-karakter-v1',
  ipip: 'viar',
  nama: 'Kekuatan Karakter',
  ringkas: 'Dua puluh empat kekuatan diri, dan lima yang paling menonjol darimu.',
  judul: 'Apa lima kekuatan terbesar dalam dirimu?',
  pengantar: 'Tes ini memetakan 24 kekuatan karakter, misalnya rasa ingin tahu, ketekunan, dan kebaikan hati. Kamu akan membaca 96 pernyataan pendek dan memilih seberapa sesuai masing-masing dengan dirimu.',
  menit: '8 sampai 12',
  tanya: 'Seberapa sesuai pernyataan ini dengan dirimu?',
  pilihan: ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai'],
  mode: 'peringkat',
  puncak: 5,
  kalimatPuncak: 'Lima kekuatan utamamu: ',
  judulSisa: 'Kekuatan lainnya',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan posisimu di skala jawaban, bukan persentil. Yang paling berguna adalah urutannya: lima teratas adalah kekuatan yang paling sering kamu pakai.',
    'Kekuatan di urutan bawah bukan kelemahan. Itu hanya hal yang lebih jarang kamu andalkan dibanding yang lain.',
    'Tiap kekuatan diukur dengan empat pernyataan saja, jadi selisih beberapa angka antar kekuatan tidak perlu dianggap berarti.'
  ],
  sumber: 'Butir tes: IPIP-VIA-R susunan Bluemke, Partsch, Saucier, dan Lechner (2021) dari International Personality Item Pool, berstatus domain publik. Pernyataan diterjemahkan ulang ke bahasa Indonesia.',
  skala: [
    {
      nama: 'Apresiasi keindahan',
      en: 'Appreciation of beauty',
      arti: 'Kamu peka pada keindahan di alam, karya, dan hal sehari-hari.',
      butir: [
        'Bagi saya penting hidup dikelilingi keindahan.',
        'Saya tersentuh saat melihat sesuatu yang indah.',
        'Saya jarang menyadari keindahan alam di sekitar.',
        'Saya baru sadar sesuatu itu indah setelah orang lain bilang.'
      ]
    },
    {
      nama: 'Kemampuan mencintai',
      en: 'Capacity for love',
      arti: 'Kamu bisa memberi dan menerima kasih sayang dalam hubungan dekat.',
      butir: [
        'Saya tahu ada orang yang menyayangi saya sebesar mereka menyayangi diri sendiri.',
        'Saya bisa mengungkapkan rasa sayang kepada orang lain.',
        'Saya sulit berbagi perasaan dengan orang lain.',
        'Saya sulit menerima kasih sayang dari siapa pun.'
      ]
    },
    {
      nama: 'Kerja sama tim',
      en: 'Teamwork',
      arti: 'Kamu setia pada kelompok dan mau ikut memikul beban bersama.',
      butir: [
        'Saya orang yang sangat setia.',
        'Saya mendukung rekan satu tim atau kelompok saya.',
        'Saya kurang bisa bekerja dalam kelompok.',
        'Saya lebih suka mengerjakan semuanya sendiri.'
      ]
    },
    {
      nama: 'Rasa ingin tahu',
      en: 'Curiosity',
      arti: 'Kamu tertarik pada banyak hal dan senang mencari tahu.',
      butir: [
        'Saya bersemangat pada banyak kegiatan yang berbeda.',
        'Saya bisa menemukan hal menarik dalam situasi apa pun.',
        'Saya tidak terlalu penasaran dengan dunia di sekitar saya.',
        'Minat saya sedikit.'
      ]
    },
    {
      nama: 'Keadilan',
      en: 'Fairness',
      arti: 'Kamu memperlakukan semua orang setara, tanpa pilih kasih.',
      butir: [
        'Saya memperlakukan semua orang dengan setara.',
        'Saya percaya hak setiap orang sama pentingnya.',
        'Saya mengambil keuntungan dari orang lain.',
        'Saya memperlakukan orang berbeda kalau saya tidak suka padanya.'
      ]
    },
    {
      nama: 'Pemaaf',
      en: 'Forgiveness',
      arti: 'Kamu memberi kesempatan kedua dan tidak menyimpan dendam.',
      butir: [
        'Saya berusaha tetap memahami saat seseorang memperlakukan saya dengan buruk.',
        'Saya memberi orang lain kesempatan untuk memulai lagi.',
        'Saya menyimpan dendam.',
        'Saya sulit memaafkan orang lain.'
      ]
    },
    {
      nama: 'Rasa syukur',
      en: 'Gratitude',
      arti: 'Kamu menyadari hal baik dalam hidup dan berterima kasih atasnya.',
      butir: [
        'Saya mengucapkan terima kasih kepada orang yang peduli pada saya.',
        'Saya orang yang sangat bersyukur.',
        'Saya tidak merasa perlu berterima kasih kepada orang lain.',
        'Hanya sedikit hal dalam hidup yang bisa saya syukuri.'
      ]
    },
    {
      nama: 'Harapan',
      en: 'Hope',
      arti: 'Kamu yakin masa depan bisa baik dan berusaha ke arah itu.',
      butir: [
        'Saya bisa menemukan sisi baik dari hal yang tampak buruk bagi orang lain.',
        'Saya tetap punya harapan walau menghadapi kesulitan.',
        'Saya menduga hal terburuk akan terjadi.',
        'Saya sering memikirkan kemungkinan buruk yang sebenarnya kecil terjadi.'
      ]
    },
    {
      nama: 'Humor',
      en: 'Humor',
      arti: 'Kamu suka tertawa dan membuat orang lain tersenyum.',
      butir: [
        'Saya memakai tawa untuk mencerahkan hari orang lain.',
        'Saya tetap bisa bercanda saat suasana sedang suram.',
        'Saya tidak dikenal sebagai orang yang humoris.',
        'Saya bukan teman yang asyik diajak bersama.'
      ]
    },
    {
      nama: 'Ketekunan',
      en: 'Perseverance',
      arti: 'Kamu menuntaskan apa yang kamu mulai walau ada rintangan.',
      butir: [
        'Saya tidak berhenti sebelum tugas selesai.',
        'Saya menuntaskan pekerjaan walau ada rintangan.',
        'Saya tidak menyelesaikan apa yang saya mulai.',
        'Saya gampang menyerah.'
      ]
    },
    {
      nama: 'Kejujuran',
      en: 'Honesty',
      arti: 'Kamu berkata benar, menepati janji, dan tampil apa adanya.',
      butir: [
        'Saya dipercaya untuk menjaga rahasia.',
        'Saya menepati janji.',
        'Saya berbohong supaya lolos dari masalah.',
        'Saya mengkhianati orang yang sudah percaya pada saya.'
      ]
    },
    {
      nama: 'Pertimbangan matang',
      en: 'Judgment',
      arti: 'Kamu menimbang dari berbagai sisi sebelum menyimpulkan.',
      butir: [
        'Saya menimbang untung dan ruginya.',
        'Teman-teman menghargai penilaian saya yang jernih.',
        'Saya cenderung tidak memikirkan sesuatu secara kritis.',
        'Saya tidak memikirkan berbagai kemungkinan saat mengambil keputusan.'
      ]
    },
    {
      nama: 'Kebaikan hati',
      en: 'Kindness',
      arti: 'Kamu ringan tangan dan senang berbuat baik untuk orang lain.',
      butir: [
        'Saya tidak pernah terlalu sibuk untuk membantu teman.',
        'Saya mau repot demi menghibur orang yang sedang murung.',
        'Saya tidak sabar saat orang lain bercerita tentang masalahnya.',
        'Saya hanya baik kepada orang yang baik kepada saya.'
      ]
    },
    {
      nama: 'Kepemimpinan',
      en: 'Leadership',
      arti: 'Kamu bisa mengarahkan kelompok dan menjaga hubungan di dalamnya.',
      butir: [
        'Saya pandai membuat orang bekerja sama dengan baik.',
        'Orang bilang saya pemimpin yang tegas tapi adil.',
        'Saya sulit membuat orang lain bekerja sama.',
        'Saya kurang bisa memimpin kelompok.'
      ]
    },
    {
      nama: 'Cinta belajar',
      en: 'Love of learning',
      arti: 'Kamu senang menguasai keterampilan dan pengetahuan baru.',
      butir: [
        'Saya pembelajar seumur hidup.',
        'Saya senang sekali saat mempelajari hal baru.',
        'Saya tidak suka mempelajari hal baru.',
        'Saya tidak membaca buku pengetahuan untuk hiburan.'
      ]
    },
    {
      nama: 'Kerendahan hati',
      en: 'Humility',
      arti: 'Kamu membiarkan hasil kerjamu yang berbicara.',
      butir: [
        'Saya tidak membanggakan pencapaian saya.',
        'Tidak ada yang akan menyebut saya sombong.',
        'Saya suka tampil menonjol di tengah orang banyak.',
        'Saya suka membicarakan diri sendiri.'
      ]
    },
    {
      nama: 'Kreativitas',
      en: 'Creativity',
      arti: 'Kamu menemukan cara baru dan berguna untuk mengerjakan sesuatu.',
      butir: [
        'Saya menemukan cara baru untuk mengerjakan sesuatu.',
        'Pemikiran saya orisinal.',
        'Saya tidak dianggap punya ide yang baru dan berbeda.',
        'Saya tidak punya dorongan khusus untuk membuat sesuatu yang orisinal.'
      ]
    },
    {
      nama: 'Kebijaksanaan',
      en: 'Perspective',
      arti: 'Kamu bisa melihat gambaran besar dan memberi nasihat yang berguna.',
      butir: [
        'Pandangan saya tentang hidup sudah matang.',
        'Saya dianggap orang yang bijak.',
        'Saya kurang bisa menentukan apa yang benar-benar penting.',
        'Orang jarang meminta nasihat saya.'
      ]
    },
    {
      nama: 'Kehati-hatian',
      en: 'Prudence',
      arti: 'Kamu berhati-hati memilih dan tidak mengambil risiko yang tidak perlu.',
      butir: [
        'Saya percaya lebih baik berjaga-jaga daripada menyesal.',
        'Saya membuat pilihan dengan hati-hati.',
        'Saya bertindak sebelum memikirkan akibatnya.',
        'Saya suka mengambil risiko.'
      ]
    },
    {
      nama: 'Pengendalian diri',
      en: 'Self-regulation',
      arti: 'Kamu bisa mengatur keinginan, emosi, dan kebiasaanmu.',
      butir: [
        'Saya orang yang sangat disiplin.',
        'Saya menahan diri dari hal yang enak sekarang tapi merugikan nanti.',
        'Saya terbawa dorongan untuk belanja atau makan berlebihan.',
        'Saya menuruti dorongan hati.'
      ]
    },
    {
      nama: 'Kecerdasan sosial',
      en: 'Social intelligence',
      arti: 'Kamu peka pada perasaan orang dan tahu cara menempatkan diri.',
      butir: [
        'Saya pandai merasakan apa yang dirasakan orang lain.',
        'Saya tahu harus berkata apa supaya orang merasa nyaman.',
        'Saya tidak tahu harus bersikap bagaimana di lingkungan baru.',
        'Saya sulit menebak reaksi orang lain.'
      ]
    },
    {
      nama: 'Spiritualitas',
      en: 'Spirituality',
      arti: 'Kamu punya keyakinan tentang makna dan tujuan hidup.',
      butir: [
        'Saya orang yang religius atau spiritual.',
        'Saya percaya setiap orang punya tujuan hidup.',
        'Saya merasa hidup tidak punya makna.',
        'Saya tidak percaya adanya Tuhan atau kekuatan yang lebih besar.'
      ]
    },
    {
      nama: 'Keberanian',
      en: 'Bravery',
      arti: 'Kamu berani bersuara dan bertindak walau ada tentangan.',
      butir: [
        'Saya sering mempertahankan pendirian walau ditentang keras.',
        'Saya tidak ragu menyampaikan pendapat yang tidak populer.',
        'Saya tidak membela keyakinan saya.',
        'Saya tidak bicara terus terang kalau akibatnya bisa buruk.'
      ]
    },
    {
      nama: 'Semangat hidup',
      en: 'Zest',
      arti: 'Kamu menjalani hari dengan energi dan antusias.',
      butir: [
        'Saya bangun pagi dengan semangat menyambut hari.',
        'Saya menantikan setiap hari yang baru.',
        'Orang bilang saya suka menggerutu.',
        'Saya tidak punya banyak tenaga.'
      ]
    }
  ]
}
