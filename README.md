# Tes Kepribadian Big Five

Tes kepribadian Big Five 120 pernyataan dalam bahasa Indonesia. Tinggal klik,
tanpa daftar, dan jawaban hanya disimpan di perangkat pengguna.

Live: https://ardhianawing.github.io/tes-kepribadian/

## Isi

- `index.html`, `style.css`, `app.js`: halaman statis, tanpa proses build.
- `data.js`: 120 pernyataan beserta kunci penilaiannya (domain, facet, arah).

## Penilaian

Tiap jawaban bernilai 1 sampai 5. Butir bertanda `r: 1` dibalik (6 dikurangi
nilai). Tiap domain berisi 24 butir dan tiap facet 4 butir, lalu jumlahnya
diubah ke skala 0 sampai 100. Di bawah 38 disebut rendah, di atas 62 tinggi.
Angka ini posisi di skala jawaban, bukan persentil terhadap populasi.

## Sumber

- Butir: IPIP-NEO 120 susunan John A. Johnson (2014), dari International
  Personality Item Pool (ipip.ori.org), berstatus domain publik.
- Kunci penilaian dicocokkan dengan paket `@alheimsins/b5-johnson-120-ipip-neo-pi-r`
  (lisensi MIT).
- Pernyataan diterjemahkan ulang ke bahasa Indonesia sehari-hari, bukan
  terjemahan kata per kata. Terjemahan ini belum divalidasi secara psikometrik.

Hasil tes adalah gambaran kecenderungan, bukan diagnosis.
