// IPIP-NEO 120 (Johnson, 2014). Butir dan kuncinya ada di big-five-butir.json, urutan sesuai aslinya.
const facet = (grup, daftar) => daftar.map(f => ({ grup, nama: f[0], arti: f[1] }))

module.exports = {
  id: 'big-five',
  kunci: 'tes-big-five-v1',
  butirLangsung: require('./big-five-butir.json'),
  nama: 'Kepribadian Big Five',
  ringkas: 'Lima sisi kepribadian menurut model yang paling banyak dipakai peneliti.',
  judul: 'Lima sisi kepribadianmu, dibentuk dari 120 jawaban.',
  pengantar: 'Ini Big Five, model kepribadian yang dipakai para peneliti psikologi. Kamu akan membaca 120 pernyataan pendek dan memilih seberapa sesuai masing-masing dengan dirimu.',
  menit: '10 sampai 15',
  tanya: 'Seberapa sesuai pernyataan ini dengan dirimu?',
  pilihan: ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai'],
  mode: 'tingkat',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan posisimu di skala jawaban: 0 berarti semua jawabanmu di ujung paling rendah, 100 di ujung paling tinggi. Angka ini bukan persentil, jadi 70 tidak berarti kamu lebih tinggi dari 70% orang.',
    'Di bawah 38 disebut rendah, di atas 62 tinggi, di antaranya sedang. Tidak ada skor yang lebih baik dari yang lain. Tiap posisi punya kelebihan dan titik rawannya sendiri.',
    'Hasil ini gambaran kecenderungan dari jawabanmu sendiri, bukan diagnosis. Untuk keputusan penting, bicarakan dengan psikolog.'
  ],
  sumber: 'Butir tes: IPIP-NEO 120 susunan John A. Johnson (2014) dari International Personality Item Pool, berstatus domain publik. Pernyataan diterjemahkan ulang ke bahasa Indonesia.',
  grup: [
    {
      nama: 'Keterbukaan',
      en: 'Openness',
      uraian: {
        tinggi: 'Kamu tertarik pada ide, seni, dan pengalaman baru. Kamu cepat bosan dengan hal yang itu-itu saja dan senang mencoba cara yang belum pernah dipakai.',
        sedang: 'Kamu terbuka pada hal baru kalau manfaatnya jelas, tapi tetap nyaman dengan cara yang sudah terbukti.',
        rendah: 'Kamu lebih suka hal yang nyata, praktis, dan sudah teruji. Ide yang terlalu abstrak jarang menarik buatmu.'
      }
    },
    {
      nama: 'Keteraturan',
      en: 'Conscientiousness',
      uraian: {
        tinggi: 'Kamu terencana, rapi, dan menuntaskan apa yang kamu mulai. Orang bisa mengandalkan janjimu.',
        sedang: 'Kamu bisa teratur saat dibutuhkan, tapi tidak kaku. Sebagian hal kamu rencanakan, sebagian kamu biarkan mengalir.',
        rendah: 'Kamu spontan dan fleksibel. Rencana, kerapian, dan tugas rutin tidak datang dengan sendirinya, jadi tenggat dan pengingat dari luar banyak membantu.'
      }
    },
    {
      nama: 'Ekstraversi',
      en: 'Extraversion',
      uraian: {
        tinggi: 'Kamu mendapat energi dari orang lain dan suasana ramai. Kamu gampang memulai obrolan dan senang ikut dalam kegiatan.',
        sedang: 'Kamu menikmati kebersamaan, tapi juga butuh waktu sendiri. Tergantung suasana dan orangnya.',
        rendah: 'Kamu mengisi energi dengan menyendiri. Kamu lebih suka obrolan kecil yang dalam daripada keramaian.'
      }
    },
    {
      nama: 'Keramahan',
      en: 'Agreeableness',
      uraian: {
        tinggi: 'Kamu hangat, gampang percaya, dan cenderung mengalah demi menjaga hubungan.',
        sedang: 'Kamu bisa bekerja sama, tapi tetap berani beda pendapat kalau perlu.',
        rendah: 'Kamu blak-blakan dan skeptis. Kamu lebih mementingkan hasil dan kebenaran daripada menjaga perasaan.'
      }
    },
    {
      nama: 'Kepekaan emosi',
      en: 'Neuroticism',
      uraian: {
        tinggi: 'Kamu gampang cemas, kepikiran, atau terbawa suasana hati. Tekanan terasa lebih berat buatmu dibanding kebanyakan orang.',
        sedang: 'Emosimu naik turun dalam batas wajar. Tekanan besar tetap terasa, tapi biasanya kamu bisa pulih.',
        rendah: 'Kamu tenang dan susah goyah. Masalah jarang membuatmu kepikiran lama.'
      }
    }
  ],
  skala: [].concat(
    facet(0, [
      ['Imajinasi', 'Seberapa aktif kamu berkhayal dan bermain dengan gagasan.'],
      ['Minat seni', 'Seberapa besar kamu menghargai seni dan keindahan.'],
      ['Kedalaman perasaan', 'Seberapa sadar kamu pada emosimu sendiri dan emosi orang lain.'],
      ['Suka hal baru', 'Seberapa senang kamu pada variasi dan perubahan.'],
      ['Minat pada gagasan', 'Seberapa suka kamu pada ide abstrak dan bahasan yang rumit.'],
      ['Keterbukaan nilai', 'Seberapa siap kamu mempertanyakan aturan dan nilai yang sudah umum.']
    ]),
    facet(1, [
      ['Rasa mampu', 'Seberapa yakin kamu bisa menuntaskan pekerjaan dengan baik.'],
      ['Kerapian', 'Seberapa rapi kamu menata barang dan tempat.'],
      ['Taat janji', 'Seberapa teguh kamu memegang janji dan aturan.'],
      ['Dorongan berprestasi', 'Seberapa keras kamu bekerja melebihi yang diminta.'],
      ['Disiplin diri', 'Seberapa gampang kamu memulai tugas dan bertahan mengerjakannya.'],
      ['Kehati-hatian', 'Seberapa matang kamu berpikir sebelum bertindak.']
    ]),
    facet(2, [
      ['Kehangatan', 'Seberapa gampang kamu akrab dan dekat dengan orang.'],
      ['Suka keramaian', 'Seberapa senang kamu berada di tengah banyak orang.'],
      ['Ketegasan', 'Seberapa sering kamu memimpin dan mengambil kendali.'],
      ['Tingkat kesibukan', 'Seberapa padat dan cepat ritme hidupmu.'],
      ['Pencarian sensasi', 'Seberapa butuh kamu pada hal yang seru dan menegangkan.'],
      ['Keceriaan', 'Seberapa sering kamu merasa senang dan optimis.']
    ]),
    facet(3, [
      ['Rasa percaya', 'Seberapa gampang kamu percaya pada niat baik orang.'],
      ['Ketulusan', 'Seberapa lurus kamu berurusan dengan orang, tanpa memanfaatkan atau mengakali.'],
      ['Suka menolong', 'Seberapa peduli dan ringan tangan kamu.'],
      ['Suka damai', 'Seberapa sering kamu menghindari konflik dan tidak membalas.'],
      ['Kerendahan hati', 'Seberapa jarang kamu merasa lebih hebat dari orang lain.'],
      ['Simpati', 'Seberapa tersentuh kamu oleh kesulitan orang lain.']
    ]),
    facet(4, [
      ['Kecemasan', 'Seberapa sering kamu khawatir dan membayangkan hal buruk.'],
      ['Kemarahan', 'Seberapa gampang kamu kesal atau marah.'],
      ['Kemurungan', 'Seberapa sering kamu merasa sedih atau tidak puas dengan diri sendiri.'],
      ['Rasa canggung', 'Seberapa tidak nyaman kamu di depan orang yang belum dikenal.'],
      ['Sulit menahan diri', 'Seberapa sulit kamu menolak godaan dan keinginan sesaat.'],
      ['Rentan tertekan', 'Seberapa gampang kamu panik atau kewalahan saat ditekan.']
    ])
  )
}
