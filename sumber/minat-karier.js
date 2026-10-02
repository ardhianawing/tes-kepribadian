// Oregon Vocational Interest Scales (ORVIS), 92 butir, 8 bidang. Semua butir dipakai.
module.exports = {
  id: 'minat-karier',
  kunci: 'tes-minat-karier-v1',
  ipip: 'orvis',
  nama: 'Minat Karier',
  ringkas: 'Delapan bidang pekerjaan, diurutkan dari yang paling kamu minati.',
  judul: 'Pekerjaan macam apa yang sebenarnya kamu sukai?',
  pengantar: 'Kamu akan melihat 92 kegiatan dan pekerjaan. Untuk tiap butir, pilih seberapa suka kamu melakukannya. Jangan pikirkan gaji atau apakah kamu mampu, cukup suka atau tidaknya.',
  menit: '8 sampai 12',
  tanya: 'Seberapa suka kamu melakukan ini?',
  pilihan: ['Sangat tidak suka', 'Tidak suka', 'Netral', 'Suka', 'Sangat suka'],
  mode: 'peringkat',
  puncak: 3,
  kalimatPuncak: 'Tiga minat terkuatmu: ',
  judulSisa: 'Bidang lainnya',
  labelContoh: 'Contoh pekerjaan',
  caraBaca: [
    'Angka 0 sampai 100 menunjukkan seberapa suka kamu pada kegiatan di bidang itu: 0 berarti semuanya kamu jawab sangat tidak suka, 100 berarti semuanya sangat suka.',
    'Yang lebih berguna dari angkanya adalah urutannya. Pekerjaan yang menggabungkan dua atau tiga minat teratasmu biasanya paling terasa cocok.',
    'Tes ini mengukur minat, bukan kemampuan. Minat tinggi di satu bidang tidak menjamin kamu sudah mahir di situ, dan sebaliknya. Anggap hasilnya sebagai bahan pertimbangan, bukan keputusan.'
  ],
  sumber: 'Butir tes: Oregon Vocational Interest Scales (ORVIS) dari International Personality Item Pool, berstatus domain publik. Pernyataan diterjemahkan dan disesuaikan untuk Indonesia.',
  skala: [
    {
      nama: 'Kepemimpinan',
      en: 'Leadership',
      arti: 'Kamu suka memengaruhi, meyakinkan, dan mengambil keputusan untuk banyak orang.',
      contoh: 'manajer, pemasaran, pengusaha, humas, politisi',
      butir: [
        'Membuat hal-hal penting terwujud',
        'Memimpin orang lain',
        'Menjadi direktur penjualan atau pemasaran',
        'Menjadi direktur utama perusahaan besar',
        'Mengatur kampanye politik',
        'Menjadi pembawa acara (MC)',
        'Merancang kampanye iklan',
        'Berdebat di forum terbuka',
        'Meyakinkan orang supaya mengubah pandangannya',
        'Menjadi gubernur atau anggota DPR',
        'Mencalonkan diri untuk jabatan politik',
        'Mengambil keputusan yang berdampak pada banyak orang'
      ]
    },
    {
      nama: 'Pengelolaan',
      en: 'Organization',
      arti: 'Kamu suka mengatur, mencatat, dan memastikan semuanya berjalan tertib.',
      contoh: 'akuntan, staf keuangan, admin, pengelola gudang, perencana anggaran',
      butir: [
        'Menjadi manajer keuangan perusahaan',
        'Menjadi kepala kantor',
        'Menyusun anggaran',
        'Menyiapkan kontrak keuangan',
        'Membuat sistem pengarsipan kantor',
        'Mengawasi pekerjaan orang lain',
        'Menyusun strategi investasi',
        'Menyusun jadwal kerja',
        'Memantau pengeluaran usaha',
        'Menjadi staf pembelian',
        'Mencatat stok barang perusahaan',
        'Mengelola database komputer',
        'Membuat catatan yang rinci'
      ]
    },
    {
      nama: 'Kepedulian',
      en: 'Altruism',
      arti: 'Kamu suka membantu, mengajar, dan merawat orang.',
      contoh: 'guru, perawat, dokter, konselor, pekerja sosial',
      butir: [
        'Membantu orang lain memahami hal baru',
        'Merawat orang sakit',
        'Menjadi guru SD',
        'Menjadi pekerja sosial',
        'Menjadi ustaz, pendeta, atau pemuka agama lain',
        'Mendampingi orang yang butuh bantuan',
        'Mengajari orang tua cara mengasuh anak',
        'Menjadi dokter atau perawat',
        'Menjadi fisioterapis',
        'Menghibur dan menguatkan orang lain',
        'Ikut kegiatan amal',
        'Membantu orang menentukan pilihan karier',
        'Menjadi konselor atau terapis'
      ]
    },
    {
      nama: 'Kreativitas',
      en: 'Creativity',
      arti: 'Kamu suka menciptakan sesuatu: gambar, tulisan, musik, atau desain.',
      contoh: 'desainer, penulis, musisi, arsitek, pembuat konten',
      butir: [
        'Membuat karya seni',
        'Merancang model busana baru',
        'Menjadi penari profesional',
        'Menulis cerpen atau novel',
        'Bermain alat musik di orkestra',
        'Menata ulang interior rumah',
        'Memilih karya seni untuk pameran atau museum',
        'Menjadi penyanyi profesional',
        'Menjadi aktor atau aktris',
        'Menjadi seniman atau arsitek',
        'Bermain peran di pentas teater',
        'Mendesain halaman website',
        'Menulis lagu',
        'Melukis atau menggambar'
      ]
    },
    {
      nama: 'Analisis',
      en: 'Analysis',
      arti: 'Kamu suka meneliti, menghitung, dan memecahkan masalah yang rumit.',
      contoh: 'peneliti, programmer, analis data, ilmuwan, insinyur',
      butir: [
        'Menjadi ahli kimia',
        'Merancang percobaan di laboratorium',
        'Menjadi ahli matematika',
        'Menjelaskan konsep ilmiah kepada orang lain',
        'Menjadi ahli fisika',
        'Melakukan penelitian medis',
        'Menjadi jurnalis sains',
        'Memecahkan teka-teki yang rumit',
        'Membuat program komputer',
        'Menjadi ahli statistik'
      ]
    },
    {
      nama: 'Kerja lapangan',
      en: 'Production',
      arti: 'Kamu suka bekerja dengan tangan, alat, tanaman, atau hewan, terutama di luar ruangan.',
      contoh: 'teknisi, mekanik, tukang kayu, petani, kontraktor',
      butir: [
        'Merawat sapi atau kuda',
        'Menjadi petani',
        'Membangun gedung atau rumah',
        'Menjadi penjaga hutan',
        'Bercocok tanam',
        'Berjalan-jalan di alam',
        'Mengerjakan pertukangan kayu',
        'Menanam bunga',
        'Memperbaiki mobil atau truk',
        'Bekerja dengan perkakas dan mesin'
      ]
    },
    {
      nama: 'Petualangan',
      en: 'Adventure',
      arti: 'Kamu suka tantangan fisik, persaingan, dan situasi yang berisiko.',
      contoh: 'atlet, polisi, tentara, pemandu alam, petugas penyelamat',
      butir: [
        'Menjadi atlet profesional',
        'Menjalani petualangan yang menegangkan',
        'Bertahan hidup di alam liar',
        'Menjadi pembalap mobil',
        'Menghadapi bahaya fisik',
        'Menjadi perwira militer',
        'Bertanding di ajang olahraga',
        'Menjadi pemburu buronan',
        'Bersepeda jarak jauh',
        'Menjadi polisi'
      ]
    },
    {
      nama: 'Bahasa dan wawasan',
      en: 'Erudition',
      arti: 'Kamu suka membaca, menulis, dan mendalami bahasa serta pengetahuan.',
      contoh: 'penerjemah, editor, jurnalis, dosen, pustakawan',
      butir: [
        'Menjadi penerjemah atau juru bahasa',
        'Menjadi pustakawan',
        'Menjadi dosen bahasa dan sastra',
        'Membuat teka-teki kata',
        'Menjadi editor media berita',
        'Menguasai banyak bahasa',
        'Menjadi koresponden di luar negeri',
        'Berbicara lancar tentang topik apa pun',
        'Membaca banyak buku',
        'Menulis buku harian atau jurnal'
      ]
    }
  ]
}
