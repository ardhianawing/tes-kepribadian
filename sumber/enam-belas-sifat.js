// 16 skala IPIP yang mengukur konstruk serupa 16PF. Aslinya 163 butir.
// Di sini dipakai versi ringkas: 6 butir per sifat (96 butir), `pilih` = nomor urut butir di sumber.
module.exports = {
  id: 'enam-belas-sifat',
  kunci: 'tes-enam-belas-sifat-v1',
  ipip: 'pf16',
  nama: '16 Sifat Kepribadian',
  ringkas: 'Gambaran yang lebih rinci: enam belas sifat, masing-masing dengan dua sisinya.',
  judul: 'Enam belas sifat, untuk gambaran dirimu yang lebih rinci.',
  pengantar: 'Kalau Big Five memberi lima garis besar, tes ini memecahnya jadi enam belas sifat yang lebih spesifik, misalnya kehangatan, ketegasan, dan kewaspadaan. Ada 96 pernyataan pendek.',
  menit: '8 sampai 12',
  ringkasVersi: true,
  tanya: 'Seberapa sesuai pernyataan ini dengan dirimu?',
  pilihan: ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai'],
  mode: 'tingkat',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan posisimu di skala jawaban, bukan persentil. Di bawah 38 disebut rendah, di atas 62 tinggi, di antaranya sedang.',
    'Ini versi ringkas: tiap sifat diukur dengan enam pernyataan, sedangkan versi lengkapnya sekitar sepuluh. Baca hasilnya sebagai gambaran kasar.',
    'Tiap sifat punya dua sisi yang sama-sama berguna. Sifat "Penalaran" di sini berasal dari penilaianmu sendiri, jadi bukan ukuran kecerdasan.',
    'Hasil ini gambaran kecenderungan dari jawabanmu sendiri, bukan diagnosis.'
  ],
  sumber: 'Butir tes: 16 skala awal IPIP yang mengukur konstruk serupa kuesioner 16 faktor Cattell, dari International Personality Item Pool, berstatus domain publik. Dipakai 96 dari 163 butir, diterjemahkan ulang ke bahasa Indonesia.',
  skala: [
    {
      nama: 'Kehangatan',
      en: 'Warmth',
      rendah: 'Kamu menjaga jarak dan lebih fokus pada urusanmu sendiri.',
      tinggi: 'Kamu hangat, perhatian, dan senang membuat orang lain nyaman.',
      pilih: [0, 4, 6, 7, 8, 9],
      butir: [
        'Saya tahu cara menghibur orang lain.',
        'Saya membuat orang lain bersemangat lagi.',
        'Saya meluangkan waktu untuk orang lain.',
        'Saya tidak suka terlibat dalam masalah orang lain.',
        'Saya tidak terlalu tertarik pada orang lain.',
        'Saya memilih tidak memikirkan orang yang hidupnya susah.'
      ]
    },
    {
      nama: 'Penalaran',
      en: 'Reasoning',
      rendah: 'Kamu lebih nyaman dengan hal yang konkret dan langsung.',
      tinggi: 'Kamu cepat menangkap, suka menganalisis, dan percaya diri dengan cara berpikirmu.',
      pilih: [1, 2, 4, 9, 11, 12],
      butir: [
        'Saya tahu jawaban dari banyak pertanyaan.',
        'Saya cenderung menganalisis segala sesuatu.',
        'Saya cepat belajar.',
        'Saya gampang bingung.',
        'Perbendaharaan kata saya sedikit.',
        'Saya melewati kata-kata sulit saat membaca.'
      ]
    },
    {
      nama: 'Kestabilan emosi',
      en: 'Emotional stability',
      rendah: 'Suasana hatimu gampang berubah dan kegagalan terasa berat.',
      tinggi: 'Kamu tenang, nyaman dengan diri sendiri, dan cepat bangkit.',
      pilih: [1, 2, 3, 5, 6, 9],
      butir: [
        'Saya nyaman dengan diri sendiri.',
        'Saya cepat bangkit dari kegagalan.',
        'Saya hampir selalu santai.',
        'Suasana hati saya sering berubah-ubah.',
        'Saya sering merasa sedih.',
        'Saya gampang patah semangat.'
      ]
    },
    {
      nama: 'Ketegasan',
      en: 'Dominance',
      rendah: 'Kamu mengalah, mengikuti arus, dan menghindari konfrontasi.',
      tinggi: 'Kamu tegas, berani bersuara, dan suka memegang kendali.',
      pilih: [0, 2, 3, 6, 8, 9],
      butir: [
        'Saya biasa maju memimpin.',
        'Saya mengatakan apa yang saya pikirkan.',
        'Saya tidak takut memberi kritik.',
        'Saya menunggu orang lain yang memimpin.',
        'Saya membiarkan orang lain yang mengambil keputusan.',
        'Saya membiarkan diri saya diatur-atur orang.'
      ]
    },
    {
      nama: 'Keriangan',
      en: 'Liveliness',
      rendah: 'Kamu serius, tenang, dan tidak suka keramaian.',
      tinggi: 'Kamu riang, suka bercanda, dan menghidupkan suasana.',
      pilih: [0, 2, 4, 6, 7, 8],
      butir: [
        'Saya yang menghidupkan suasana saat kumpul-kumpul.',
        'Saya sering bercanda.',
        'Saya menghibur teman-teman saya.',
        'Saya jarang bercanda.',
        'Saya tidak suka acara yang ramai.',
        'Saya orang terakhir yang tertawa saat ada lelucon.'
      ]
    },
    {
      nama: 'Taat aturan',
      en: 'Rule-consciousness',
      rendah: 'Kamu longgar pada aturan dan lebih mengikuti pertimbanganmu sendiri.',
      tinggi: 'Kamu patuh pada aturan dan menghormati wewenang.',
      pilih: [0, 1, 3, 6, 7, 9],
      butir: [
        'Saya percaya hukum harus ditegakkan dengan tegas.',
        'Saya berusaha mengikuti aturan.',
        'Saya menghormati pihak yang berwenang.',
        'Saya melanggar aturan.',
        'Saya suka berkata kasar.',
        'Saya tahu cara mengakali aturan.'
      ]
    },
    {
      nama: 'Keberanian sosial',
      en: 'Social boldness',
      rendah: 'Kamu pemalu dan berhati-hati di depan orang yang belum dikenal.',
      tinggi: 'Kamu percaya diri dan gampang membuka obrolan dengan siapa saja.',
      pilih: [0, 3, 4, 5, 8, 9],
      butir: [
        'Saya nyaman berada di tengah orang-orang.',
        'Saya gampang akrab dengan orang baru.',
        'Saya yang memulai obrolan.',
        'Saya merasa sulit mendekati orang lain.',
        'Saya pendiam di depan orang yang belum dikenal.',
        'Saya memilih berada di belakang layar.'
      ]
    },
    {
      nama: 'Kepekaan rasa',
      en: 'Sensitivity',
      rendah: 'Kamu praktis dan tidak gampang terbawa perasaan.',
      tinggi: 'Kamu halus perasaan dan menikmati cerita, seni, dan keindahan.',
      pilih: [1, 4, 5, 7, 8, 9],
      butir: [
        'Saya senang membahas film dan buku dengan orang lain.',
        'Saya menangis saat menonton film.',
        'Saya suka bunga.',
        'Saya tidak suka puisi.',
        'Saya tidak suka cerita fiksi.',
        'Saya jarang menyadari reaksi emosi saya sendiri.'
      ]
    },
    {
      nama: 'Kewaspadaan',
      en: 'Vigilance',
      rendah: 'Kamu gampang percaya dan berprasangka baik.',
      tinggi: 'Kamu waspada dan tidak gampang percaya pada niat orang.',
      pilih: [1, 2, 4, 6, 7, 8],
      butir: [
        'Saya curiga orang punya maksud tersembunyi.',
        'Saya berhati-hati terhadap orang lain.',
        'Saya percaya orang jarang menceritakan semuanya dengan jujur.',
        'Saya percaya pada ucapan orang.',
        'Saya percaya pada orang lain.',
        'Saya percaya orang lain berniat baik.'
      ]
    },
    {
      nama: 'Daya khayal',
      en: 'Abstractedness',
      rendah: 'Kamu membumi, praktis, dan fokus pada hal yang ada di depan mata.',
      tinggi: 'Kamu sering larut dalam pikiran dan gagasan.',
      pilih: [1, 3, 6, 7, 8, 9],
      butir: [
        'Saya suka tenggelam dalam pikiran sendiri.',
        'Saya suka melamun.',
        'Saya melakukan hal yang tidak terduga.',
        'Saya mengerjakan sesuatu sesuai aturan baku.',
        'Saya jarang melamun.',
        'Saya jarang tenggelam dalam pikiran sendiri.'
      ]
    },
    {
      nama: 'Ketertutupan',
      en: 'Privateness',
      rendah: 'Kamu terbuka dan apa adanya soal dirimu.',
      tinggi: 'Kamu menjaga privasi dan tidak gampang membuka diri.',
      pilih: [0, 3, 4, 5, 6, 9],
      butir: [
        'Saya jarang bercerita tentang diri sendiri.',
        'Saya memendam perasaan.',
        'Saya menyimpan pikiran saya sendiri.',
        'Saya terbuka tentang diri saya kepada orang lain.',
        'Saya terbuka soal perasaan saya.',
        'Saya mau bercerita tentang diri sendiri.'
      ]
    },
    {
      nama: 'Rasa waswas',
      en: 'Apprehension',
      rendah: 'Kamu yakin pada diri sendiri dan tidak lama menyesali kesalahan.',
      tinggi: 'Kamu gampang merasa bersalah, khawatir salah langkah, dan memikirkan kesalahan lama.',
      pilih: [0, 2, 4, 7, 8, 9],
      butir: [
        'Saya takut melakukan hal yang salah.',
        'Saya gampang sakit hati.',
        'Saya menghabiskan waktu memikirkan kesalahan masa lalu.',
        'Saya tidak mengkhawatirkan hal yang sudah terjadi.',
        'Saya tidak gampang terusik.',
        'Saya tidak membiarkan orang lain mematahkan semangat saya.'
      ]
    },
    {
      nama: 'Terbuka pada perubahan',
      en: 'Openness to change',
      rendah: 'Kamu berpegang pada cara yang sudah dikenal.',
      tinggi: 'Kamu senang ide baru dan suka mencoba cara lain.',
      pilih: [1, 2, 4, 5, 6, 8],
      butir: [
        'Saya senang memikirkan cara baru untuk mengerjakan sesuatu.',
        'Saya senang mendengar ide baru.',
        'Saya lebih suka variasi daripada rutinitas.',
        'Saya menghindari obrolan yang terlalu filosofis.',
        'Saya jarang mencari makna yang lebih dalam dari sesuatu.',
        'Saya tidak tertarik pada ide yang abstrak.'
      ]
    },
    {
      nama: 'Kemandirian',
      en: 'Self-reliance',
      rendah: 'Kamu senang berkelompok dan mengerjakan sesuatu bersama.',
      tinggi: 'Kamu mandiri dan lebih suka mengerjakan sesuatu sendiri.',
      pilih: [1, 2, 5, 7, 8, 9],
      butir: [
        'Saya lebih suka mengerjakan sesuatu sendiri.',
        'Saya menikmati waktu sendirian.',
        'Saya menikmati keheningan.',
        'Saya senang menjadi bagian dari kelompok.',
        'Saya menikmati kerja tim.',
        'Saya tidak bisa tanpa ditemani orang lain.'
      ]
    },
    {
      nama: 'Perfeksionisme',
      en: 'Perfectionism',
      rendah: 'Kamu santai soal kerapian dan tidak terganggu oleh hal yang kurang sempurna.',
      tinggi: 'Kamu tertib, teliti, dan ingin semuanya beres dengan benar.',
      pilih: [0, 2, 3, 6, 7, 9],
      butir: [
        'Saya ingin semuanya pas dan benar.',
        'Saya suka keteraturan.',
        'Saya terus mengerjakan sampai semuanya sempurna.',
        'Saya tidak terganggu oleh keadaan yang berantakan.',
        'Saya membiarkan kamar berantakan.',
        'Saya menunda tugas yang tidak menyenangkan.'
      ]
    },
    {
      nama: 'Ketegangan',
      en: 'Tension',
      rendah: 'Kamu sabar, santai, dan tidak gampang terpancing.',
      tinggi: 'Kamu gampang tidak sabar, kesal, dan terganggu oleh kesalahan orang.',
      pilih: [0, 3, 5, 7, 8, 9],
      butir: [
        'Saya gampang kesal.',
        'Saya terganggu oleh kesalahan orang lain.',
        'Saya tidak tahan dibantah.',
        'Saya tidak gampang jengkel.',
        'Saya berusaha memaafkan dan melupakan.',
        'Saya selalu punya kata baik untuk setiap orang.'
      ]
    }
  ]
}
