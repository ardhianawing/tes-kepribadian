// Mesin tes yang dipakai semua halaman tes. Isi tes datang dari window.TES (data.js tiap tes).
(function () {
  'use strict'

  var T = window.TES
  var DAFTAR = window.DAFTAR || []
  var BUTIR = T.butir
  var JUMLAH = BUTIR.length
  var KUNCI = T.kunci
  var JUMLAH_WARNA = 8
  var PANJANG_KODE = Math.ceil(JUMLAH / 3) * 2

  var jawaban = kosong()
  var posisi = 0
  var terkunci = false
  var hasilTampil = null

  var el = function (id) { return document.getElementById(id) }
  var layarAwal = el('layar-awal')
  var layarSoal = el('layar-soal')
  var layarHasil = el('layar-hasil')
  var tombolJawab = []

  function kosong () {
    var a = []
    for (var i = 0; i < JUMLAH; i++) a.push(0)
    return a
  }

  /* ---------- Simpanan ---------- */

  function simpan () {
    try {
      localStorage.setItem(KUNCI, JSON.stringify({ jawaban: jawaban, posisi: posisi }))
    } catch (e) { /* mode privat: tes tetap jalan tanpa simpanan */ }
  }

  function muat () {
    try {
      var data = JSON.parse(localStorage.getItem(KUNCI))
      if (!data || !Array.isArray(data.jawaban) || data.jawaban.length !== JUMLAH) return
      var sah = data.jawaban.every(function (v) { return v === 0 || (v >= 1 && v <= 5 && v % 1 === 0) })
      if (!sah) return
      jawaban = data.jawaban
      posisi = Math.min(Math.max(data.posisi | 0, 0), JUMLAH - 1)
    } catch (e) { /* abaikan simpanan rusak */ }
  }

  function hapusSimpanan () {
    jawaban = kosong()
    posisi = 0
    try { localStorage.removeItem(KUNCI) } catch (e) {}
  }

  function terjawab (arr) {
    return arr.filter(function (v) { return v > 0 }).length
  }

  /* ---------- Penilaian ---------- */

  // Rata-rata jawaban (setelah butir terbalik dibalik) diubah dari 1–5 ke 0–100.
  function skor (o) {
    return Math.round((o.jumlah - o.n) * 25 / o.n)
  }

  function hitung (arr) {
    var sk = T.skala.map(function () { return { jumlah: 0, n: 0 } })
    var gr = T.grup ? T.grup.map(function () { return { jumlah: 0, n: 0 } }) : null
    BUTIR.forEach(function (b, i) {
      var nilai = b.r ? 6 - arr[i] : arr[i]
      sk[b.s].jumlah += nilai
      sk[b.s].n++
      if (gr) {
        var g = gr[T.skala[b.s].grup]
        g.jumlah += nilai
        g.n++
      }
    })
    return { skala: sk.map(skor), grup: gr ? gr.map(skor) : null }
  }

  function tingkat (nilai) {
    if (nilai < 38) return 'rendah'
    if (nilai > 62) return 'tinggi'
    return 'sedang'
  }

  // Daftar yang tampil sebagai batang utama: grup (dengan rinciannya) kalau ada, kalau tidak skala.
  function daftarAtas (h) {
    if (T.grup) {
      return T.grup.map(function (g, i) {
        var anak = []
        T.skala.forEach(function (s, j) {
          if (s.grup === i) anak.push({ nama: s.nama, arti: s.arti, skor: h.skala[j] })
        })
        return { i: i, nama: g.nama, en: g.en, skor: h.grup[i], uraian: g.uraian, anak: anak }
      })
    }
    return T.skala.map(function (s, i) {
      return { i: i, nama: s.nama, en: s.en, skor: h.skala[i], s: s }
    })
  }

  function urutTurun (daftar) {
    return daftar.slice().sort(function (a, b) { return b.skor - a.skor || a.i - b.i })
  }

  /* ---------- Tautan hasil: 3 jawaban dipadatkan jadi 2 huruf ---------- */

  function kode (arr) {
    var a = arr.slice()
    while (a.length % 3) a.push(1)
    var s = ''
    for (var i = 0; i < a.length; i += 3) {
      var n = (a[i] - 1) * 25 + (a[i + 1] - 1) * 5 + (a[i + 2] - 1)
      s += ('0' + n.toString(36)).slice(-2)
    }
    return s
  }

  function bacaKode (s) {
    if (s.length !== PANJANG_KODE || !/^[0-9a-z]+$/.test(s)) return null
    var arr = []
    for (var i = 0; i < s.length; i += 2) {
      var n = parseInt(s.slice(i, i + 2), 36)
      if (n > 124) return null
      arr.push(Math.floor(n / 25) + 1, Math.floor(n / 5) % 5 + 1, n % 5 + 1)
    }
    return arr.slice(0, JUMLAH)
  }

  function kodeDariAlamat () {
    var m = /^#hasil=([0-9a-z]+)$/.exec(location.hash)
    return m ? bacaKode(m[1]) : null
  }

  function tautanHasil (arr) {
    return location.origin + location.pathname + '#hasil=' + kode(arr)
  }

  /* ---------- Layar ---------- */

  function tampil (layar) {
    [layarAwal, layarSoal, layarHasil].forEach(function (l) { l.hidden = l !== layar })
    document.querySelector('.kaki').hidden = layar === layarSoal
    window.scrollTo(0, 0)
  }

  function gambarAwal () {
    var n = terjawab(jawaban)
    var sedangJalan = n > 0 && n < JUMLAH
    el('tombol-mulai').textContent = sedangJalan ? 'Lanjutkan dari soal ' + (posisi + 1) : 'Mulai tes'
    el('tombol-ulang-awal').hidden = !sedangJalan
    tampil(layarAwal)
  }

  function buatPilihan () {
    var wadah = el('pilihan')
    T.pilihan.forEach(function (teks, i) {
      var b = document.createElement('button')
      b.type = 'button'
      b.className = 'jawab'
      b.setAttribute('aria-pressed', 'false')
      var label = document.createElement('span')
      label.textContent = teks
      var tombol = document.createElement('kbd')
      tombol.textContent = String(i + 1)
      b.appendChild(label)
      b.appendChild(tombol)
      b.addEventListener('click', function () { pilih(i + 1) })
      wadah.appendChild(b)
      tombolJawab.push(b)
    })
  }

  // Sediakan ruang setinggi pernyataan terpanjang, supaya tombol jawaban tetap di tempat yang sama.
  function ukurPernyataan () {
    if (layarSoal.hidden) return
    var p = el('pernyataan')
    var asli = p.textContent
    var maks = 0
    p.style.minHeight = ''
    for (var i = 0; i < JUMLAH; i++) {
      p.textContent = BUTIR[i].t
      if (p.offsetHeight > maks) maks = p.offsetHeight
    }
    p.textContent = asli
    p.style.minHeight = maks + 'px'
  }

  function tonggak () {
    var bagian = posisi / JUMLAH
    if (bagian >= 0.9) return 'Tinggal sedikit lagi.'
    if (bagian >= 0.75) return 'Tiga perempat sudah selesai.'
    if (bagian >= 0.5) return 'Sudah lewat setengah.'
    if (bagian >= 0.25) return 'Seperempat sudah selesai.'
    return ''
  }

  function gambarSoal () {
    el('pernyataan').textContent = BUTIR[posisi].t
    el('kemajuan-teks').textContent = (posisi + 1) + ' dari ' + JUMLAH
    el('kemajuan-isi').style.width = (posisi / JUMLAH * 100) + '%'
    el('kemajuan-isi').parentNode.setAttribute('aria-valuenow', String(posisi))
    var t = tonggak()
    if (el('tonggak').textContent !== t) el('tonggak').textContent = t
    tombolJawab.forEach(function (b, i) {
      b.setAttribute('aria-pressed', jawaban[posisi] === i + 1 ? 'true' : 'false')
    })
    el('tombol-mundur').hidden = posisi === 0
  }

  function bukaSoal () {
    gambarSoal()
    tampil(layarSoal)
    ukurPernyataan()
  }

  function gantiSoal (langkah) {
    var p = el('pernyataan')
    p.classList.add('ganti')
    setTimeout(function () {
      langkah()
      p.classList.remove('ganti')
      terkunci = false
    }, 150)
  }

  function pilih (nilai) {
    if (terkunci || layarSoal.hidden) return
    terkunci = true
    jawaban[posisi] = nilai
    tombolJawab.forEach(function (b, i) {
      b.setAttribute('aria-pressed', i + 1 === nilai ? 'true' : 'false')
    })
    if (posisi < JUMLAH - 1) {
      posisi++
      simpan()
      gantiSoal(gambarSoal)
    } else {
      simpan()
      setTimeout(function () {
        terkunci = false
        selesai()
      }, 200)
    }
  }

  function mundur () {
    if (terkunci || layarSoal.hidden || posisi === 0) return
    terkunci = true
    posisi--
    simpan()
    gantiSoal(gambarSoal)
  }

  function selesai () {
    var belum = jawaban.indexOf(0)
    if (belum !== -1) {
      // ada soal yang terlewat (misalnya simpanan lama): kembali ke soal itu
      posisi = belum
      bukaSoal()
      return
    }
    gambarHasil(jawaban, false)
  }

  /* ---------- Hasil ---------- */

  function gabung (daftar) {
    if (daftar.length < 2) return daftar.join('')
    if (daftar.length === 2) return daftar[0] + ' dan ' + daftar[1]
    return daftar.slice(0, -1).join(', ') + ', dan ' + daftar[daftar.length - 1]
  }

  function kecil (d) { return d.nama.toLowerCase() }

  function ringkasan (atas) {
    if (T.mode === 'peringkat') {
      return T.kalimatPuncak + gabung(urutTurun(atas).slice(0, T.puncak).map(kecil)) + '.'
    }
    var tinggi = atas.filter(function (d) { return tingkat(d.skor) === 'tinggi' })
    var rendah = atas.filter(function (d) { return tingkat(d.skor) === 'rendah' })
    if (!tinggi.length && !rendah.length) {
      return 'Semua sisimu ada di tengah. Artinya kamu luwes, tidak condong kuat ke salah satu ujung.'
    }
    if (atas.length <= 6) {
      var sedang = atas.filter(function (d) { return tingkat(d.skor) === 'sedang' })
      var bagian = []
      if (tinggi.length) bagian.push('tinggi di ' + gabung(tinggi.map(kecil)))
      if (rendah.length) bagian.push('rendah di ' + gabung(rendah.map(kecil)))
      if (sedang.length) bagian.push('sedang di ' + gabung(sedang.map(kecil)))
      return 'Kamu ' + bagian.join('; ') + '.'
    }
    // banyak sifat: sebut tiga yang paling tinggi dan tiga yang paling rendah saja
    var menonjol = []
    var atasTiga = urutTurun(tinggi).slice(0, 3)
    var bawahTiga = urutTurun(rendah).reverse().slice(0, 3)
    if (atasTiga.length) menonjol.push('tinggi di ' + gabung(atasTiga.map(kecil)))
    if (bawahTiga.length) menonjol.push('rendah di ' + gabung(bawahTiga.map(kecil)))
    return 'Yang paling menonjol: ' + menonjol.join('; ') + '.'
  }

  function buat (tag, kelas, teks) {
    var n = document.createElement(tag)
    if (kelas) n.className = kelas
    if (teks != null) n.textContent = teks
    return n
  }

  function warna (i) { return 'var(--k' + (i % JUMLAH_WARNA + 1) + ')' }
  function besar (s) { return s.charAt(0).toUpperCase() + s.slice(1) }

  function barisRincian (nama, nilai, arti, w) {
    var li = buat('li')
    var k = buat('div', 'rincian-kepala', nama)
    k.appendChild(buat('span', '', String(nilai)))
    var jk = buat('div', 'jalur-kecil')
    var isi = buat('i')
    isi.style.setProperty('--p', nilai + '%')
    isi.style.setProperty('--warna', w)
    jk.appendChild(isi)
    li.appendChild(k)
    li.appendChild(jk)
    if (arti) li.appendChild(buat('p', '', arti))
    return li
  }

  function kartu (d, urut) {
    var k = buat('article', 'hasil')
    k.style.setProperty('--i', String(urut))

    var kepala = buat('div', 'hasil-kepala')
    kepala.appendChild(buat('h2', '', d.nama))
    if (d.en) kepala.appendChild(buat('p', 'hasil-en', d.en))
    k.appendChild(kepala)

    var jalur = buat('div', 'jalur')
    var batang = buat('div', 'lempung')
    batang.style.setProperty('--p', d.skor + '%')
    batang.style.setProperty('--warna', warna(d.i))
    batang.appendChild(buat('span', 'skor', String(d.skor)))
    jalur.appendChild(batang)
    k.appendChild(jalur)

    var uraian = buat('p', 'uraian')
    if (T.mode === 'peringkat') {
      uraian.textContent = d.s.arti
      k.appendChild(uraian)
      if (d.s.contoh) k.appendChild(buat('p', 'contoh', T.labelContoh + ': ' + d.s.contoh + '.'))
      return k
    }

    var t = tingkat(d.skor)
    uraian.appendChild(buat('strong', '', besar(t) + '. '))
    if (d.uraian) {
      uraian.appendChild(document.createTextNode(d.uraian[t]))
      k.appendChild(uraian)
    } else if (t !== 'sedang' || d.s.sedang) {
      uraian.appendChild(document.createTextNode(d.s[t]))
      k.appendChild(uraian)
    } else {
      uraian.appendChild(document.createTextNode('Kamu ada di antara dua sisi ini.'))
      k.appendChild(uraian)
      var dua = buat('ul', 'dua-sisi')
      dua.appendChild(buat('li', '', 'Sisi rendah: ' + d.s.rendah))
      dua.appendChild(buat('li', '', 'Sisi tinggi: ' + d.s.tinggi))
      k.appendChild(dua)
    }

    if (d.anak) {
      var rinci = buat('details')
      rinci.appendChild(buat('summary', '', 'Lihat ' + d.anak.length + ' rincian ' + kecil(d)))
      var ul = buat('ul', 'rincian')
      d.anak.forEach(function (a) { ul.appendChild(barisRincian(a.nama, a.skor, a.arti, warna(d.i))) })
      rinci.appendChild(ul)
      k.appendChild(rinci)
    }
    return k
  }

  function gambarHasil (arr, kiriman) {
    var atas = daftarAtas(hitung(arr))
    hasilTampil = { jawaban: arr, atas: atas, kiriman: kiriman }

    el('hasil-kiriman').hidden = !kiriman
    layarHasil.querySelector('.judul-hasil').textContent = kiriman ? 'Hasil yang dibagikan' : 'Hasil kamu'
    el('ringkasan').textContent = ringkasan(atas)
    el('tombol-ulang').textContent = kiriman ? 'Kerjakan tes sendiri' : 'Ulangi tes'
    el('status-salin').textContent = ''

    var daftar = el('daftar-hasil')
    daftar.textContent = ''
    daftar.classList.remove('tumbuh')
    daftar.classList.toggle('padat', atas.length > 8)

    if (T.mode === 'peringkat') {
      var urut = urutTurun(atas)
      urut.slice(0, T.puncak).forEach(function (d, n) { daftar.appendChild(kartu(d, n)) })
      var sisa = urut.slice(T.puncak)
      if (sisa.length) {
        var bagian = buat('section', 'hasil')
        bagian.appendChild(buat('h2', 'judul-sisa', T.judulSisa))
        var ul = buat('ul', 'rincian')
        sisa.forEach(function (d) { ul.appendChild(barisRincian(d.nama, d.skor, d.s.arti, warna(d.i))) })
        bagian.appendChild(ul)
        daftar.appendChild(bagian)
      }
    } else {
      atas.forEach(function (d, n) { daftar.appendChild(kartu(d, Math.min(n, 8))) })
    }

    gambarLainnya()
    tampil(layarHasil)
    // paksa hitung ulang tata letak supaya animasi mulai dari awal
    void daftar.offsetWidth
    daftar.classList.add('tumbuh')
  }

  function gambarLainnya () {
    var lain = DAFTAR.filter(function (d) { return d.id !== T.id })
    var ul = el('daftar-lainnya')
    ul.textContent = ''
    lain.forEach(function (d) {
      var li = buat('li')
      var a = buat('a')
      a.href = '../' + d.id + '/'
      var b = buat('span', 'butiran')
      b.style.setProperty('--warna', 'var(--k' + d.warna + ')')
      var isi = buat('span')
      isi.appendChild(buat('span', 'tes-nama', d.nama))
      isi.appendChild(buat('span', 'tes-ringkas', d.ringkas))
      a.appendChild(b)
      a.appendChild(isi)
      li.appendChild(a)
      ul.appendChild(li)
    })
    el('lainnya').hidden = !lain.length
  }

  function teksRingkasan () {
    var atas = T.mode === 'peringkat' ? urutTurun(hasilTampil.atas) : hasilTampil.atas
    var baris = ['Hasil tes ' + T.nama, '']
    atas.forEach(function (d, n) {
      var awal = T.mode === 'peringkat' ? (n + 1) + '. ' : ''
      var akhir = T.mode === 'peringkat' ? '' : ', ' + tingkat(d.skor)
      baris.push(awal + d.nama + (d.en ? ' (' + d.en + ')' : '') + ': ' + d.skor + akhir)
      if (d.anak) baris.push('  ' + d.anak.map(function (a) { return a.nama + ' ' + a.skor }).join(', '))
    })
    baris.push('', 'Skala 0 sampai 100, bukan persentil.', tautanHasil(hasilTampil.jawaban))
    return baris.join('\n')
  }

  function salin (teks, pesan) {
    var status = el('status-salin')
    var beres = function () { status.textContent = pesan }
    var cadangan = function () {
      var t = document.createElement('textarea')
      t.value = teks
      t.setAttribute('readonly', '')
      t.style.position = 'fixed'
      t.style.opacity = '0'
      document.body.appendChild(t)
      t.select()
      var ok = false
      try { ok = document.execCommand('copy') } catch (e) {}
      document.body.removeChild(t)
      status.textContent = ok ? pesan : 'Tidak bisa menyalin otomatis. Salin manual dari kolom alamat.'
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(teks).then(beres, cadangan)
    } else {
      cadangan()
    }
  }

  /* ---------- Sambungan tombol ---------- */

  el('tombol-mulai').addEventListener('click', function () {
    var belum = jawaban.indexOf(0)
    if (belum === -1) { selesai(); return }
    if (jawaban[posisi] === 0 && posisi > belum) posisi = belum
    bukaSoal()
  })

  el('tombol-ulang-awal').addEventListener('click', function () {
    if (!window.confirm('Jawaban yang sudah diisi akan dihapus. Mulai dari awal?')) return
    hapusSimpanan()
    bukaSoal()
  })

  el('tombol-mundur').addEventListener('click', mundur)

  el('tombol-salin').addEventListener('click', function () {
    salin(teksRingkasan(), 'Ringkasan tersalin.')
  })

  el('tombol-tautan').addEventListener('click', function () {
    salin(tautanHasil(hasilTampil.jawaban), 'Tautan hasil tersalin.')
  })

  el('tombol-ulang').addEventListener('click', function () {
    if (hasilTampil && hasilTampil.kiriman) {
      history.replaceState(null, '', location.pathname)
      mulai()
      return
    }
    if (!window.confirm('Jawaban yang sekarang akan dihapus. Ulangi tes?')) return
    hapusSimpanan()
    history.replaceState(null, '', location.pathname)
    gambarAwal()
  })

  document.addEventListener('keydown', function (e) {
    if (layarSoal.hidden || e.ctrlKey || e.metaKey || e.altKey) return
    if (e.key >= '1' && e.key <= '5') {
      e.preventDefault()
      pilih(Number(e.key))
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      e.preventDefault()
      mundur()
    }
  })

  var tundaUkur
  window.addEventListener('resize', function () {
    clearTimeout(tundaUkur)
    tundaUkur = setTimeout(ukurPernyataan, 150)
  })
  // huruf tebal baru dimuat saat layar soal tampil, jadi ukur lagi tiap kali huruf selesai dimuat
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', ukurPernyataan)

  window.addEventListener('hashchange', mulai)

  function mulai () {
    var kiriman = kodeDariAlamat()
    if (kiriman) {
      var punyaSendiri = kiriman.join('') === jawaban.join('')
      gambarHasil(kiriman, !punyaSendiri)
      return
    }
    if (terjawab(jawaban) === JUMLAH) {
      gambarHasil(jawaban, false)
      return
    }
    gambarAwal()
  }

  buatPilihan()
  muat()
  mulai()
})()
