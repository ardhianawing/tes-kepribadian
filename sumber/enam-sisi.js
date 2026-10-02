// Skala IPIP-HEXACO (Ashton, Lee & Goldberg, 2007). Aslinya 240 butir (24 facet x 10).
// Di sini dipakai versi ringkas: 4 butir per facet (96 butir), `pilih` = nomor urut butir di sumber.
module.exports = {
  id: 'enam-sisi',
  kunci: 'tes-enam-sisi-v1',
  ipip: 'hexaco',
  nama: 'Kepribadian Enam Sisi',
  ringkas: 'Seperti Big Five, ditambah satu sisi yang sering terlewat: kejujuran dan kerendahan hati.',
  judul: 'Enam sisi kepribadian, termasuk seberapa lurus kamu.',
  pengantar: 'Model enam sisi menambahkan kejujuran dan kerendahan hati ke lima sisi kepribadian yang sudah umum. Kamu akan membaca 96 pernyataan pendek dan memilih seberapa sesuai masing-masing dengan dirimu.',
  menit: '8 sampai 12',
  ringkasVersi: true,
  tanya: 'Seberapa sesuai pernyataan ini dengan dirimu?',
  pilihan: ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai'],
  mode: 'tingkat',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan posisimu di skala jawaban, bukan persentil. Di bawah 38 disebut rendah, di atas 62 tinggi, di antaranya sedang.',
    'Ini versi ringkas: tiap rincian diukur dengan empat pernyataan, sedangkan versi lengkapnya sepuluh. Skor enam sisi utama cukup stabil, tapi skor rincian sebaiknya dibaca sebagai gambaran kasar.',
    'Tidak ada skor yang lebih baik dari yang lain, termasuk di sisi kejujuran. Hasil ini gambaran kecenderungan dari jawabanmu sendiri, bukan diagnosis.'
  ],
  sumber: 'Butir tes: skala IPIP-HEXACO susunan Ashton, Lee, dan Goldberg (2007) dari International Personality Item Pool, berstatus domain publik. Dipakai 96 dari 240 butir, diterjemahkan ulang ke bahasa Indonesia.',
  grup: [
    {
      nama: 'Kejujuran dan kerendahan hati',
      en: 'Honesty-Humility',
      uraian: {
        tinggi: 'Kamu lurus, tidak suka memanfaatkan orang, dan tidak terlalu mengejar harta atau status.',
        sedang: 'Kamu jujur dalam banyak hal, tapi tetap memperhitungkan kepentinganmu sendiri.',
        rendah: 'Kamu jeli melihat peluang untuk dirimu sendiri dan tidak segan menonjolkan diri. Status dan kemewahan menarik buatmu.'
      }
    },
    {
      nama: 'Emosionalitas',
      en: 'Emotionality',
      uraian: {
        tinggi: 'Kamu gampang cemas, peka perasaan, dan butuh dukungan orang terdekat saat tertekan.',
        sedang: 'Kamu bisa khawatir dan terharu, tapi biasanya tetap bisa mengendalikan diri.',
        rendah: 'Kamu tabah dan mandiri secara emosi. Bahaya dan tekanan tidak gampang membuatmu goyah.'
      }
    },
    {
      nama: 'Ekstraversi',
      en: 'Extraversion',
      uraian: {
        tinggi: 'Kamu percaya diri di depan orang, senang bergaul, dan penuh tenaga.',
        sedang: 'Kamu menikmati kebersamaan, tapi juga butuh waktu sendiri.',
        rendah: 'Kamu pendiam dan lebih nyaman di belakang layar. Keramaian menguras tenagamu.'
      }
    },
    {
      nama: 'Kesabaran',
      en: 'Agreeableness',
      uraian: {
        tinggi: 'Kamu sabar, pemaaf, dan gampang berkompromi.',
        sedang: 'Kamu bisa mengalah, tapi tetap punya batas kalau diperlakukan tidak adil.',
        rendah: 'Kamu kritis, sulit lupa kalau disakiti, dan teguh mempertahankan pendapat.'
      }
    },
    {
      nama: 'Keteraturan',
      en: 'Conscientiousness',
      uraian: {
        tinggi: 'Kamu rapi, rajin, teliti, dan berpikir matang sebelum bertindak.',
        sedang: 'Kamu bisa teratur saat dibutuhkan, tapi tidak kaku.',
        rendah: 'Kamu spontan dan santai soal kerapian, tenggat, dan detail.'
      }
    },
    {
      nama: 'Keterbukaan',
      en: 'Openness to Experience',
      uraian: {
        tinggi: 'Kamu tertarik pada seni, ilmu, dan ide yang tidak biasa.',
        sedang: 'Kamu terbuka pada hal baru kalau manfaatnya jelas.',
        rendah: 'Kamu lebih suka hal yang praktis dan sudah lazim.'
      }
    }
  ],
  skala: [
    {
      grup: 0,
      nama: 'Ketulusan',
      en: 'Sincerity',
      arti: 'Seberapa apa adanya kamu saat berurusan dengan orang, tanpa menjilat atau berpura-pura.',
      pilih: [0, 1, 3, 6],
      butir: [
        'Saya tidak berpura-pura lebih dari diri saya yang sebenarnya.',
        'Saya memuji orang supaya urusan saya lancar.',
        'Saya berlagak supaya orang terkesan.',
        'Saya pura-pura peduli pada orang lain.'
      ]
    },
    {
      grup: 0,
      nama: 'Keadilan',
      en: 'Fairness',
      arti: 'Seberapa kuat kamu menolak curang dan mengambil yang bukan hakmu.',
      pilih: [0, 2, 5, 6],
      butir: [
        'Saya tidak akan mengambil barang yang bukan milik saya.',
        'Saya mengembalikan uang kalau kasir salah memberi kembalian lebih.',
        'Saya kagum pada tipu muslihat yang benar-benar cerdik.',
        'Saya rela curang supaya bisa unggul.'
      ]
    },
    {
      grup: 0,
      nama: 'Tidak serakah',
      en: 'Greed avoidance',
      arti: 'Seberapa tidak pentingnya harta, kemewahan, dan status buatmu.',
      pilih: [0, 1, 2, 5],
      butir: [
        'Saya tidak akan menikmati hidup sebagai orang terkenal.',
        'Saya tidak berusaha tampil mewah.',
        'Saya suka kemewahan.',
        'Yang paling saya kejar adalah uang.'
      ]
    },
    {
      grup: 0,
      nama: 'Kerendahan hati',
      en: 'Modesty',
      arti: 'Seberapa biasa kamu memandang dirimu dibanding orang lain.',
      pilih: [0, 2, 5, 8],
      butir: [
        'Saya tidak menganggap diri lebih baik dari orang lain.',
        'Saya orang biasa saja.',
        'Saya merasa lebih baik daripada orang lain.',
        'Kalau ada kesempatan, saya akan pamer.'
      ]
    },
    {
      grup: 1,
      nama: 'Rasa takut',
      en: 'Fearfulness',
      arti: 'Seberapa besar kamu menghindari bahaya fisik.',
      pilih: [1, 3, 6, 9],
      butir: [
        'Saya mulai panik kalau ada bahaya.',
        'Saya gemetar di situasi berbahaya.',
        'Saya menghadapi bahaya dengan percaya diri.',
        'Saya berani mengambil risiko.'
      ]
    },
    {
      grup: 1,
      nama: 'Kecemasan',
      en: 'Anxiety',
      arti: 'Seberapa gampang kamu khawatir dan stres.',
      pilih: [1, 2, 5, 8],
      butir: [
        'Saya gampang khawatir.',
        'Saya gampang stres.',
        'Saya jarang khawatir.',
        'Saya tetap tenang di bawah tekanan.'
      ]
    },
    {
      grup: 1,
      nama: 'Ketergantungan',
      en: 'Dependence',
      arti: 'Seberapa butuh kamu pada dukungan dan persetujuan orang lain.',
      pilih: [0, 2, 4, 7],
      butir: [
        'Saya butuh diyakinkan oleh orang lain.',
        'Saya butuh persetujuan orang lain.',
        'Saya sering butuh bantuan.',
        'Saya mencari dukungan saat ada masalah.'
      ]
    },
    {
      grup: 1,
      nama: 'Kepekaan perasaan',
      en: 'Sentimentality',
      arti: 'Seberapa gampang kamu terharu dan ikut merasakan emosi orang.',
      pilih: [0, 1, 5, 9],
      butir: [
        'Saya ikut merasakan emosi orang lain.',
        'Saya langsung sedih saat mendengar kabar buruk.',
        'Saya jarang menangis saat menonton film sedih.',
        'Saya jarang terbawa perasaan.'
      ]
    },
    {
      grup: 2,
      nama: 'Ekspresif',
      en: 'Expressiveness',
      arti: 'Seberapa banyak kamu bicara dan mengungkapkan diri.',
      pilih: [0, 1, 7, 8],
      butir: [
        'Saya banyak bicara.',
        'Saya tidak pernah kehabisan kata-kata.',
        'Saya irit bicara.',
        'Saya memendam perasaan.'
      ]
    },
    {
      grup: 2,
      nama: 'Keberanian sosial',
      en: 'Social boldness',
      arti: 'Seberapa nyaman kamu tampil dan memimpin di depan orang.',
      pilih: [1, 3, 5, 6],
      butir: [
        'Saya tidak keberatan jadi pusat perhatian.',
        'Saya punya kemampuan memimpin.',
        'Saya takut berbicara di depan umum.',
        'Saya memilih berada di belakang layar.'
      ]
    },
    {
      grup: 2,
      nama: 'Suka bergaul',
      en: 'Sociability',
      arti: 'Seberapa senang kamu menghabiskan waktu bersama orang lain.',
      pilih: [0, 3, 6, 9],
      butir: [
        'Saya biasanya mengisi waktu luang bersama orang lain.',
        'Saya gampang akrab dengan orang baru.',
        'Saya jarang menikmati kebersamaan dengan orang lain.',
        'Saya menjaga jarak dari orang lain.'
      ]
    },
    {
      grup: 2,
      nama: 'Keceriaan',
      en: 'Liveliness',
      arti: 'Seberapa bertenaga dan riang kamu sehari-hari.',
      pilih: [2, 5, 8, 9],
      butir: [
        'Saya biasanya aktif dan penuh tenaga.',
        'Saya banyak tertawa.',
        'Saya cepat lelah.',
        'Saya sering merasa sedih.'
      ]
    },
    {
      grup: 3,
      nama: 'Pemaaf',
      en: 'Forgiveness',
      arti: 'Seberapa gampang kamu memaafkan orang yang menyakitimu.',
      pilih: [1, 2, 5, 7],
      butir: [
        'Saya berusaha memaafkan dan melupakan.',
        'Saya cenderung memaafkan orang lain.',
        'Saya menyimpan dendam.',
        'Saya membalas perlakuan orang.'
      ]
    },
    {
      grup: 3,
      nama: 'Kelembutan',
      en: 'Gentleness',
      arti: 'Seberapa lunak kamu menilai orang lain.',
      pilih: [0, 2, 5, 9],
      butir: [
        'Saya jarang mengeluh.',
        'Saya menerima orang apa adanya.',
        'Saya cepat menghakimi orang lain.',
        'Saya mengkritik kekurangan orang lain.'
      ]
    },
    {
      grup: 3,
      nama: 'Keluwesan',
      en: 'Flexibility',
      arti: 'Seberapa mau kamu mengalah dan menerima masukan.',
      pilih: [0, 1, 5, 7],
      butir: [
        'Saya gampang menyesuaikan diri.',
        'Saya bisa menerima saran dengan baik.',
        'Saya sulit diyakinkan.',
        'Saya tidak tahan dibantah.'
      ]
    },
    {
      grup: 3,
      nama: 'Tidak gampang marah',
      en: 'Patience',
      arti: 'Seberapa tinggi ambang marahmu.',
      pilih: [2, 4, 6, 8],
      butir: [
        'Saya biasanya orang yang sabar.',
        'Saya jarang marah.',
        'Saya gampang marah.',
        'Emosi saya gampang meledak.'
      ]
    },
    {
      grup: 4,
      nama: 'Kerapian',
      en: 'Organization',
      arti: 'Seberapa tertata barang dan tempatmu.',
      pilih: [0, 2, 5, 8],
      butir: [
        'Saya menjaga barang-barang tetap rapi.',
        'Saya suka keteraturan.',
        'Saya membiarkan kamar berantakan.',
        'Saya sering lupa mengembalikan barang ke tempatnya.'
      ]
    },
    {
      grup: 4,
      nama: 'Kerajinan',
      en: 'Diligence',
      arti: 'Seberapa keras kamu bekerja untuk mencapai tujuan.',
      pilih: [0, 3, 5, 6],
      butir: [
        'Saya memaksa diri bekerja keras supaya berhasil.',
        'Saya bekerja keras.',
        'Saya bekerja secukupnya, asal beres.',
        'Saya berhenti kalau pekerjaan jadi terlalu sulit.'
      ]
    },
    {
      grup: 4,
      nama: 'Ketelitian',
      en: 'Perfectionism',
      arti: 'Seberapa teliti kamu pada detail.',
      pilih: [0, 1, 8, 9],
      butir: [
        'Saya memperhatikan detail.',
        'Saya terus mengerjakan sampai semuanya sempurna.',
        'Saya kurang memperhatikan detail.',
        'Saya lebih suka membiarkan semuanya mengalir.'
      ]
    },
    {
      grup: 4,
      nama: 'Kehati-hatian',
      en: 'Prudence',
      arti: 'Seberapa matang kamu berpikir sebelum bertindak.',
      pilih: [0, 1, 3, 5],
      butir: [
        'Saya menghindari kesalahan.',
        'Saya membuat rencana dan menjalankannya.',
        'Saya langsung terjun tanpa pikir panjang.',
        'Saya mengambil keputusan dengan gegabah.'
      ]
    },
    {
      grup: 5,
      nama: 'Apresiasi keindahan',
      en: 'Aesthetic appreciation',
      arti: 'Seberapa kamu menikmati seni dan keindahan.',
      pilih: [0, 2, 5, 7],
      butir: [
        'Menurut saya seni itu penting.',
        'Saya melihat keindahan pada hal yang luput dari perhatian orang lain.',
        'Saya tidak suka seni.',
        'Saya tidak suka puisi.'
      ]
    },
    {
      grup: 5,
      nama: 'Rasa ingin tahu',
      en: 'Inquisitiveness',
      arti: 'Seberapa suka kamu mendalami pengetahuan.',
      pilih: [0, 3, 7, 9],
      butir: [
        'Saya tertarik pada ilmu pengetahuan.',
        'Saya suka bacaan yang menantang pikiran.',
        'Saya menghindari bacaan yang berat.',
        'Saya tidak mau mendalami suatu topik.'
      ]
    },
    {
      grup: 5,
      nama: 'Kreativitas',
      en: 'Creativity',
      arti: 'Seberapa banyak ide dan imajinasimu.',
      pilih: [3, 4, 6, 7],
      butir: [
        'Saya penuh ide.',
        'Saya senang memikirkan cara baru untuk mengerjakan sesuatu.',
        'Imajinasi saya tidak bagus.',
        'Saya sulit membayangkan sesuatu.'
      ]
    },
    {
      grup: 5,
      nama: 'Berani berbeda',
      en: 'Unconventionality',
      arti: 'Seberapa nyaman kamu berbeda dari kebanyakan orang.',
      pilih: [1, 2, 7, 8],
      butir: [
        'Saya tahu ide saya kadang mengejutkan orang.',
        'Saya melakukan hal yang dianggap aneh oleh orang lain.',
        'Saya suka dipandang sebagai orang yang sopan dan lazim.',
        'Saya suka dianggap orang yang normal-normal saja.'
      ]
    }
  ]
}
