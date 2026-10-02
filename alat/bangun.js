// Membangun halaman tiap tes dari definisi di sumber/.
//   node alat/bangun.js            -> tulis <id>/index.html, <id>/data.js, daftar.js
//   node alat/bangun.js --periksa  -> cetak butir Inggris | Indonesia | arah, untuk dicek
const fs = require('fs')
const path = require('path')

const AKAR = path.join(__dirname, '..')
const ipip = require('../sumber/ipip.json')
const URUTAN = ['big-five', 'minat-karier', 'kekuatan-karakter', 'enam-sisi', 'enam-belas-sifat', 'gaya-emosi']
const PERIKSA = process.argv.includes('--periksa')
const LEBAR = [92, 58, 74, 66, 82, 70, 88, 62]
const JUMLAH_WARNA = 8

const aman = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Butir tiap skala diselang-seling supaya dua butir dari skala yang sama tidak berurutan.
function selang (perSkala) {
  const maks = Math.max.apply(null, perSkala.map(a => a.length))
  const out = []
  for (let j = 0; j < maks; j++) {
    perSkala.forEach((a, i) => { if (j < a.length) out.push(a[(j + i) % a.length]) })
  }
  return out
}

function rakitButir (def) {
  if (def.butirLangsung) return def.butirLangsung
  const sumber = ipip[def.ipip]
  if (sumber.length !== def.skala.length) throw new Error(def.id + ': jumlah skala beda dengan sumber')
  const perSkala = def.skala.map((sk, i) => {
    const asal = sumber[i].butir
    const pilih = sk.pilih || asal.map((_, k) => k)
    if (pilih.length !== sk.butir.length) throw new Error(def.id + ' / ' + sk.nama + ': jumlah terjemahan beda dengan butir yang dipilih')
    return pilih.map((k, j) => {
      if (!asal[k]) throw new Error(def.id + ' / ' + sk.nama + ': butir ' + k + ' tidak ada di sumber')
      return { t: sk.butir[j], s: i, r: asal[k].r, no: asal[k].no, en: asal[k].t }
    })
  })
  const bernomor = perSkala.every(a => a.every(b => b.no != null))
  const urut = bernomor ? [].concat.apply([], perSkala).sort((a, b) => a.no - b.no) : selang(perSkala)
  if (PERIKSA) {
    console.log('\n######## ' + def.id)
    perSkala.forEach((a, i) => {
      console.log('# ' + def.skala[i].nama + '  <=  ' + sumber[i].nama.replace(/\s*[[(].*$/, ''))
      a.forEach(b => console.log('  ' + (b.r ? '-' : '+') + ' ' + b.en + '  |  ' + b.t))
    })
  }
  return urut.map(b => ({ t: b.t, s: b.s, r: b.r }))
}

function periksaButir (def, butir) {
  const teks = {}
  butir.forEach(b => { teks[b.t] = (teks[b.t] || 0) + 1 })
  const ganda = Object.keys(teks).filter(t => teks[t] > 1)
  if (ganda.length) throw new Error(def.id + ': pernyataan ganda: ' + ganda.join(' / '))
  const perSkala = def.skala.map(() => 0)
  butir.forEach(b => { perSkala[b.s]++ })
  if (perSkala.some(n => n === 0)) throw new Error(def.id + ': ada skala tanpa butir')
}

// Yang tampil sebagai batang utama: grup kalau ada, kalau tidak skala.
const atas = def => def.grup || def.skala

function dataTes (def, butir) {
  return {
    id: def.id,
    kunci: def.kunci,
    nama: def.nama,
    tanya: def.tanya,
    pilihan: def.pilihan,
    mode: def.mode,
    puncak: def.puncak || 0,
    kalimatPuncak: def.kalimatPuncak || '',
    judulSisa: def.judulSisa || '',
    labelContoh: def.labelContoh || '',
    grup: def.grup || null,
    skala: def.skala.map(s => {
      const o = { nama: s.nama }
      ;['en', 'grup', 'arti', 'contoh', 'rendah', 'sedang', 'tinggi'].forEach(k => { if (s[k] != null) o[k] = s[k] })
      return o
    }),
    butir
  }
}

function halamanTes (def, butir) {
  const daftar = atas(def)
  const pratinjau = daftar.length <= 8
    ? '<ul class="lempung-awal" aria-label="Yang diukur">\n' + daftar.map((d, i) =>
      '        <li class="lempung" style="--p:' + LEBAR[i % LEBAR.length] + '%;--warna:var(--k' + (i % JUMLAH_WARNA + 1) + ')">' + aman(d.nama) + '</li>').join('\n') + '\n      </ul>'
    : '<ul class="keping-awal" aria-label="Yang diukur">\n' + daftar.map((d, i) =>
      '        <li class="keping" style="--warna:var(--k' + (i % JUMLAH_WARNA + 1) + ')">' + aman(d.nama) + '</li>').join('\n') + '\n      </ul>'
  const deskripsi = def.ringkas + ' ' + butir.length + ' pernyataan, tinggal klik, gratis, tanpa daftar.'

  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tes ${aman(def.nama)}</title>
  <meta name="description" content="${aman(deskripsi)}">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#f4f7f3" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#18211f" media="(prefers-color-scheme: dark)">
  <meta property="og:title" content="Tes ${aman(def.nama)}">
  <meta property="og:description" content="${aman(deskripsi)}">
  <meta property="og:type" content="website">
  <link rel="icon" href="../ikon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../gaya.css">
</head>
<body>

  <main id="app">

    <section id="layar-awal" class="layar">
      <a class="balik" href="../">Semua tes</a>
      <h1 class="judul">${aman(def.judul)}</h1>

      ${pratinjau}

      <p class="pengantar">${aman(def.pengantar)} Waktunya sekitar ${aman(def.menit)} menit.</p>

      <div class="aksi">
        <button id="tombol-mulai" class="tombol utama" type="button">Mulai tes</button>
        <button id="tombol-ulang-awal" class="tombol polos" type="button" hidden>Mulai dari awal</button>
      </div>

      <ul class="catatan">
        <li>Jawab sesuai dirimu sehari-hari, bukan dirimu yang kamu harapkan.</li>
        <li>Tidak ada jawaban benar atau salah, jadi tidak perlu lama menimbang.</li>
        <li>Jawaban disimpan di perangkat ini saja. Kalau berhenti di tengah, kamu bisa melanjutkan dari soal terakhir.</li>
      </ul>
    </section>

    <section id="layar-soal" class="layar" hidden>
      <div class="kemajuan">
        <div class="kemajuan-jalur" role="progressbar" aria-valuemin="0" aria-valuemax="${butir.length}" aria-valuenow="0" aria-label="Kemajuan tes">
          <div id="kemajuan-isi" class="kemajuan-isi"></div>
        </div>
        <p id="kemajuan-teks" class="kemajuan-teks">1 dari ${butir.length}</p>
      </div>
      <p id="tonggak" class="tonggak" aria-live="polite"></p>

      <p class="tanya">${aman(def.tanya)}</p>
      <h2 id="pernyataan" class="pernyataan" aria-live="polite"></h2>

      <div id="pilihan" class="pilihan" role="group" aria-label="Pilihan jawaban"></div>

      <div class="navigasi">
        <button id="tombol-mundur" class="tombol polos" type="button">Soal sebelumnya</button>
        <p class="petunjuk-tombol">Di komputer, tekan angka 1 sampai 5.</p>
      </div>
    </section>

    <section id="layar-hasil" class="layar" hidden>
      <a class="balik" href="../">Semua tes</a>
      <p id="hasil-kiriman" class="kiriman" hidden>Ini hasil yang dibagikan seseorang kepadamu.</p>
      <h1 class="judul judul-hasil">Hasil kamu</h1>
      <p id="ringkasan" class="ringkasan"></p>

      <div id="daftar-hasil" class="daftar-hasil"></div>

      <div class="aksi aksi-hasil">
        <button id="tombol-salin" class="tombol utama" type="button">Salin ringkasan</button>
        <button id="tombol-tautan" class="tombol garis" type="button">Salin tautan hasil</button>
        <button id="tombol-ulang" class="tombol polos" type="button">Ulangi tes</button>
      </div>
      <p id="status-salin" class="status-salin" role="status"></p>

      <div class="cara-baca">
        <h2>Cara membaca hasilnya</h2>
${def.caraBaca.map(p => '        <p>' + aman(p) + '</p>').join('\n')}
      </div>

      <div id="lainnya" class="lainnya" hidden>
        <h2>Tes lainnya</h2>
        <ul id="daftar-lainnya" class="daftar-tes"></ul>
      </div>
    </section>

  </main>

  <footer class="kaki">
    <p>${aman(def.sumber)}</p>
  </footer>

  <script src="../daftar.js"></script>
  <script src="data.js"></script>
  <script src="../mesin.js"></script>
</body>
</html>
`
}

const daftar = []
URUTAN.forEach((id, i) => {
  const def = require('../sumber/' + id + '.js')
  const butir = rakitButir(def)
  periksaButir(def, butir)
  daftar.push({
    id: def.id,
    kunci: def.kunci,
    nama: def.nama,
    ringkas: def.ringkas,
    jumlah: butir.length,
    menit: def.menit,
    warna: i % JUMLAH_WARNA + 1
  })
  if (PERIKSA) return
  const dir = path.join(AKAR, def.id)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'data.js'),
    '// Dibuat oleh alat/bangun.js dari sumber/' + def.id + '.js. Jangan diubah langsung.\n' +
    '// s = nomor skala, r = 1 berarti nilainya dibalik.\n' +
    'window.TES = ' + JSON.stringify(dataTes(def, butir)) + '\n')
  fs.writeFileSync(path.join(dir, 'index.html'), halamanTes(def, butir))
  const minus = butir.filter(b => b.r).length
  console.log(def.id.padEnd(20) + String(butir.length).padStart(4) + ' butir, ' + String(minus).padStart(3) + ' dibalik, ' + def.skala.length + ' skala')
})

if (!PERIKSA) {
  fs.writeFileSync(path.join(AKAR, 'daftar.js'),
    '// Dibuat oleh alat/bangun.js. Jangan diubah langsung.\n' +
    'window.DAFTAR = ' + JSON.stringify(daftar, null, 2) + '\n')
  console.log('daftar.js: ' + daftar.length + ' tes')
}
