// Tujuh komponen yang berkaitan dengan kecerdasan emosi (Barchard, 2001), 68 butir. Semua butir dipakai.
module.exports = {
  id: 'gaya-emosi',
  kunci: 'tes-gaya-emosi-v1',
  ipip: 'ei',
  nama: 'Gaya Emosi',
  ringkas: 'Tujuh cara kamu merasakan, menunjukkan, dan memakai emosi.',
  judul: 'Bagaimana caramu merasakan dan menunjukkan emosi?',
  pengantar: 'Tes ini memetakan tujuh komponen yang berkaitan dengan kecerdasan emosi, misalnya seberapa terbuka kamu menunjukkan perasaan dan seberapa mudah emosi orang lain menular kepadamu. Ada 68 pernyataan pendek.',
  menit: '6 sampai 9',
  tanya: 'Seberapa sesuai pernyataan ini dengan dirimu?',
  pilihan: ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai'],
  mode: 'tingkat',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan posisimu di skala jawaban, bukan persentil. Di bawah 38 disebut rendah, di atas 62 tinggi, di antaranya sedang.',
    'Tes ini tidak menghasilkan satu angka EQ. Yang diukur adalah gaya, bukan kemampuan, jadi tinggi tidak selalu lebih baik. Menahan emosi berguna di ruang rapat, menunjukkannya berguna di rumah.',
    'Hasil ini gambaran kecenderungan dari jawabanmu sendiri, bukan diagnosis.'
  ],
  sumber: 'Butir tes: tujuh skala komponen kecerdasan emosi susunan Kimberly A. Barchard (2001) dari International Personality Item Pool, berstatus domain publik. Pernyataan diterjemahkan ulang ke bahasa Indonesia.',
  skala: [
    {
      nama: 'Menunjukkan rasa senang',
      en: 'Positive expressivity',
      rendah: 'Kamu cenderung menyimpan rasa senang dan sayang. Orang perlu mengenalmu dulu untuk tahu perasaanmu.',
      tinggi: 'Kamu terbuka menunjukkan rasa senang dan sayang lewat tawa, pelukan, atau kata-kata.',
      butir: [
        'Saya menunjukkan rasa sayang lewat sentuhan, misalnya merangkul atau memeluk.',
        'Saya tertawa lepas kalau ada yang lucu.',
        'Saya mengungkapkan rasa senang seperti anak kecil.',
        'Saya kadang tertawa sendiri saat membaca atau menonton.',
        'Saya memeluk teman dekat.',
        'Saya memperlihatkan perasaan saat sedang senang.',
        'Saya sulit menunjukkan kepada orang bahwa saya peduli pada mereka.',
        'Saya sulit menunjukkan rasa sayang.',
        'Saya menyimpan rasa senang untuk diri sendiri.'
      ]
    },
    {
      nama: 'Menunjukkan rasa tidak enak',
      en: 'Negative expressivity',
      rendah: 'Kamu menahan marah, takut, dan sedih di dalam. Dari luar kamu terlihat tenang.',
      tinggi: 'Marah, takut, dan sedihmu terlihat jelas oleh orang lain.',
      butir: [
        'Saya berteriak saat marah.',
        'Wajah saya langsung terlihat kesal kalau ada hal buruk terjadi.',
        'Saya memperlihatkan rasa takut.',
        'Saya rasa raut wajah saya ketahuan kalau sedang sedih.',
        'Saya memperlihatkan kesedihan.',
        'Sesedih apa pun, saya menyimpannya sendiri.',
        'Saya sulit menunjukkan kepada orang bahwa saya marah padanya.',
        'Setakut apa pun, saya menyimpannya sendiri.',
        'Saya jarang memperlihatkan kemarahan.',
        'Saya berharap bisa lebih gampang menunjukkan perasaan yang tidak enak.'
      ]
    },
    {
      nama: 'Perhatian pada emosi',
      en: 'Attending to emotions',
      rendah: 'Kamu jarang berhenti untuk memeriksa perasaanmu. Kamu lebih fokus pada apa yang harus dikerjakan.',
      tinggi: 'Kamu sering memperhatikan dan memikirkan apa yang kamu rasakan.',
      butir: [
        'Saya memikirkan penyebab emosi saya.',
        'Saya banyak memperhatikan perasaan saya.',
        'Saya biasanya sadar apa yang sedang saya rasakan.',
        'Saya menyadari emosi saya.',
        'Saya sering berhenti sejenak untuk memahami apa yang saya rasakan.',
        'Saya jarang memikirkan apa yang saya rasakan.',
        'Saya jarang menelaah emosi saya.',
        'Saya tidak dekat dengan perasaan saya sendiri.',
        'Saya sering mengabaikan perasaan saya.',
        'Saya jarang menyadari reaksi emosi saya sendiri.'
      ]
    },
    {
      nama: 'Memutuskan dengan perasaan',
      en: 'Emotion-based decision-making',
      rendah: 'Kamu memutuskan dengan logika dan fakta.',
      tinggi: 'Kamu mengikuti kata hati saat mengambil keputusan penting.',
      butir: [
        'Saya mendengarkan perasaan saat mengambil keputusan penting.',
        'Tujuan hidup saya lebih didasari inspirasi daripada logika.',
        'Saya merencanakan hidup berdasarkan apa yang saya rasakan.',
        'Saya percaya emosi memberi arah dalam hidup.',
        'Saya lebih mendengarkan hati daripada kepala.',
        'Saya merencanakan hidup dengan logika.',
        'Saya percaya keputusan penting harus didasari penalaran logis.',
        'Saya lebih mendengarkan kepala daripada hati.',
        'Saya memutuskan berdasarkan fakta, bukan perasaan.'
      ]
    },
    {
      nama: 'Ikut merasakan senang',
      en: 'Responsive joy',
      rendah: 'Suasana hati orang lain tidak banyak mengubah suasana hatimu.',
      tinggi: 'Kegembiraan orang di sekitarmu gampang menular kepadamu.',
      butir: [
        'Saya senang melihat anak-anak membuka hadiah.',
        'Saya biasanya ikut tertawa kalau orang di sekitar saya tertawa.',
        'Saya ikut merasakan kegembiraan orang lain.',
        'Saya ikut larut dalam keseruan saat orang lain merayakan sesuatu.',
        'Suasana hati orang yang sedang senang sangat memengaruhi saya.',
        'Saya sulit tetap murung kalau orang di sekitar saya sedang senang.',
        'Saat sedih, saya tidak suka berada di dekat orang yang sedang senang.',
        'Kebahagiaan orang lain tidak berpengaruh pada saya.',
        'Saya jarang ikut larut dalam keseruan.',
        'Saya tidak suka pesta ulang tahun anak-anak.'
      ]
    },
    {
      nama: 'Ikut merasakan susah',
      en: 'Responsive distress',
      rendah: 'Kamu tetap tenang di situasi tegang dan tidak gampang terbawa kesedihan orang.',
      tinggi: 'Kesusahan orang lain sangat menyentuhmu, kadang sampai ikut terasa berat.',
      butir: [
        'Saya sangat tersentuh oleh kemalangan orang lain.',
        'Saya gampang terharu sampai menangis.',
        'Saya ikut menderita saat orang lain berduka.',
        'Saya ikut sedih melihat kemalangan orang yang tidak saya kenal.',
        'Saya akan sedih kalau melihat hewan terluka.',
        'Saya tenang bahkan di situasi yang tegang.',
        'Saya tidak gampang terguncang oleh kejadian.',
        'Penderitaan orang lain tidak berpengaruh pada saya.',
        'Saya jarang menangis saat menonton film sedih.',
        'Saya tetap tenang dalam keadaan darurat.'
      ]
    },
    {
      nama: 'Kepedulian',
      en: 'Empathic concern',
      rendah: 'Kamu berpegang pada prinsip bahwa tiap orang bertanggung jawab atas dirinya sendiri.',
      tinggi: 'Kamu peduli dan berbelas kasih pada orang yang sedang kesulitan.',
      butir: [
        'Saya peduli pada orang lain.',
        'Saya iba pada orang yang nasibnya kurang beruntung.',
        'Saya kasihan melihat orang yang hidup di jalanan.',
        'Saya percaya pelaku kejahatan lebih butuh dibina daripada dihukum.',
        'Saya percaya orang miskin layak mendapat simpati kita.',
        'Saya tidak terlalu peduli pada orang lain.',
        'Saya tidak punya simpati untuk pelaku kejahatan.',
        'Saya memandang rendah segala bentuk kelemahan.',
        'Saya tidak suka terlibat dalam masalah orang lain.',
        'Saya kurang bersimpati pada pengangguran.'
      ]
    }
  ]
}
