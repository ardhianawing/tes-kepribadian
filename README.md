# Tes Kepribadian, Minat, dan Karakter

Enam tes dalam bahasa Indonesia. Tinggal klik, tanpa daftar, dan jawaban hanya
disimpan di perangkat pengguna.

Live: https://ardhianawing.github.io/tes-kepribadian/

| Tes | Alamat | Butir | Sumber di IPIP |
|---|---|---|---|
| Kepribadian Big Five | `big-five/` | 120 | IPIP-NEO 120 (Johnson, 2014) |
| Minat Karier | `minat-karier/` | 92 | ORVIS, 8 bidang |
| Kekuatan Karakter | `kekuatan-karakter/` | 96 | IPIP-VIA-R, 24 kekuatan |
| Kepribadian Enam Sisi | `enam-sisi/` | 96 dari 240 | IPIP-HEXACO, versi ringkas |
| 16 Sifat Kepribadian | `enam-belas-sifat/` | 96 dari 163 | 16 skala IPIP serupa 16PF, versi ringkas |
| Gaya Emosi | `gaya-emosi/` | 68 | 7 komponen kecerdasan emosi (Barchard, 2001) |

## Susunan berkas

- `index.html`, `beranda.js`: halaman depan berisi daftar tes.
- `gaya.css`, `mesin.js`: tampilan dan mesin tes yang dipakai semua tes.
- `sumber/`: sumber kebenaran. Satu berkas per tes berisi terjemahan dan
  uraian hasil; `ipip.json` berisi butir asli berbahasa Inggris dan arah
  penilaiannya, diurai dari halaman kunci di ipip.ori.org.
- `alat/bangun.js`: membuat `<tes>/index.html`, `<tes>/data.js`, dan
  `daftar.js` dari `sumber/`. Berkas hasil ikut disimpan di repo karena GitHub
  Pages menyajikannya langsung.

## Mengubah atau menambah tes

1. Ubah berkas di `sumber/` (jangan ubah `data.js` atau `index.html` di folder
   tes, karena akan tertimpa).
2. Jalankan `node alat/bangun.js`.
3. Untuk mengecek terjemahan terhadap butir aslinya:
   `node alat/bangun.js --periksa`.
4. Commit dan push. GitHub Pages memperbarui situs dalam sekitar satu menit.

Tes baru: tambahkan butir aslinya ke `sumber/ipip.json`, buat
`sumber/<id>.js`, lalu daftarkan `<id>` di `URUTAN` pada `alat/bangun.js`.

## Penilaian

Tiap jawaban bernilai 1 sampai 5. Butir bertanda `r: 1` dibalik (6 dikurangi
nilai). Skor sebuah skala adalah rata-rata butirnya, diubah ke 0 sampai 100.
Di bawah 38 disebut rendah, di atas 62 tinggi. Angka ini posisi di skala
jawaban, bukan persentil terhadap populasi.

Arah penilaian tidak diketik tangan: `alat/bangun.js` mengambilnya dari
`sumber/ipip.json`, dan terjemahan dipasangkan ke butir asli lewat urutan
(atau lewat `pilih` pada versi ringkas).

## Catatan penting

- Butir IPIP berstatus domain publik dan boleh dipakai untuk tujuan apa pun,
  termasuk komersial (ipip.ori.org/newPermission.htm).
- Nama tes sengaja umum. "NEO", "16PF", "VIA", dan "HEXACO" adalah nama milik
  pihak lain dan hanya disebut sebagai keterangan sumber.
- Pernyataan diterjemahkan ulang ke bahasa Indonesia sehari-hari, bukan kata
  per kata, dan beberapa disesuaikan untuk Indonesia (misalnya "senator"
  menjadi "anggota DPR"). Terjemahan ini belum divalidasi secara psikometrik.
- Dua tes memakai versi ringkas yang butirnya dipilih sendiri (4 per rincian
  untuk Enam Sisi, 6 per sifat untuk 16 Sifat). Ini bukan bentuk pendek yang
  sudah divalidasi.
- Hasil tes adalah gambaran kecenderungan, bukan diagnosis.
