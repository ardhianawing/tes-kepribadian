(function () {
  'use strict'

  var BUTIR = window.BUTIR
  var JUMLAH = BUTIR.length
  var KUNCI = 'tes-big-five-v1'
  var PILIHAN = ['Sangat tidak sesuai', 'Tidak sesuai', 'Netral', 'Sesuai', 'Sangat sesuai']
  var URUTAN = ['O', 'C', 'E', 'A', 'N']

  var DOMAIN = {
    O: {
      nama: 'Keterbukaan',
      en: 'Openness',
      uraian: {
        tinggi: 'Kamu tertarik pada ide, seni, dan pengalaman baru. Kamu cepat bosan dengan hal yang itu-itu saja dan senang mencoba cara yang belum pernah dipakai.',
        sedang: 'Kamu terbuka pada hal baru kalau manfaatnya jelas, tapi tetap nyaman dengan cara yang sudah terbukti.',
        rendah: 'Kamu lebih suka hal yang nyata, praktis, dan sudah teruji. Ide yang terlalu abstrak jarang menarik buatmu.'
      },
      facet: [
        ['Imajinasi', 'Seberapa aktif kamu berkhayal dan bermain dengan gagasan.'],
        ['Minat seni', 'Seberapa besar kamu menghargai seni dan keindahan.'],
        ['Kedalaman perasaan', 'Seberapa sadar kamu pada emosimu sendiri dan emosi orang lain.'],
        ['Suka hal baru', 'Seberapa senang kamu pada variasi dan perubahan.'],
        ['Minat pada gagasan', 'Seberapa suka kamu pada ide abstrak dan bahasan yang rumit.'],
        ['Keterbukaan nilai', 'Seberapa siap kamu mempertanyakan aturan dan nilai yang sudah umum.']
      ]
    },
    C: {
      nama: 'Keteraturan',
      en: 'Conscientiousness',
      uraian: {
        tinggi: 'Kamu terencana, rapi, dan menuntaskan apa yang kamu mulai. Orang bisa mengandalkan janjimu.',
        sedang: 'Kamu bisa teratur saat dibutuhkan, tapi tidak kaku. Sebagian hal kamu rencanakan, sebagian kamu biarkan mengalir.',
        rendah: 'Kamu spontan dan fleksibel. Rencana, kerapian, dan tugas rutin tidak datang dengan sendirinya, jadi tenggat dan pengingat dari luar banyak membantu.'
      },
      facet: [
        ['Rasa mampu', 'Seberapa yakin kamu bisa menuntaskan pekerjaan dengan baik.'],
        ['Kerapian', 'Seberapa rapi kamu menata barang dan tempat.'],
        ['Taat janji', 'Seberapa teguh kamu memegang janji dan aturan.'],
        ['Dorongan berprestasi', 'Seberapa keras kamu bekerja melebihi yang diminta.'],
        ['Disiplin diri', 'Seberapa gampang kamu memulai tugas dan bertahan mengerjakannya.'],
        ['Kehati-hatian', 'Seberapa matang kamu berpikir sebelum bertindak.']
      ]
    },
    E: {
      nama: 'Ekstraversi',
      en: 'Extraversion',
      uraian: {
        tinggi: 'Kamu mendapat energi dari orang lain dan suasana ramai. Kamu gampang memulai obrolan dan senang ikut dalam kegiatan.',
        sedang: 'Kamu menikmati kebersamaan, tapi juga butuh waktu sendiri. Tergantung suasana dan orangnya.',
        rendah: 'Kamu mengisi energi dengan menyendiri. Kamu lebih suka obrolan kecil yang dalam daripada keramaian.'
      },
      facet: [
        ['Kehangatan', 'Seberapa gampang kamu akrab dan dekat dengan orang.'],
        ['Suka keramaian', 'Seberapa senang kamu berada di tengah banyak orang.'],
        ['Ketegasan', 'Seberapa sering kamu memimpin dan mengambil kendali.'],
        ['Tingkat kesibukan', 'Seberapa padat dan cepat ritme hidupmu.'],
        ['Pencarian sensasi', 'Seberapa butuh kamu pada hal yang seru dan menegangkan.'],
        ['Keceriaan', 'Seberapa sering kamu merasa senang dan optimis.']
      ]
    },
    A: {
      nama: 'Keramahan',
      en: 'Agreeableness',
      uraian: {
        tinggi: 'Kamu hangat, gampang percaya, dan cenderung mengalah demi menjaga hubungan.',
        sedang: 'Kamu bisa bekerja sama, tapi tetap berani beda pendapat kalau perlu.',
        rendah: 'Kamu blak-blakan dan skeptis. Kamu lebih mementingkan hasil dan kebenaran daripada menjaga perasaan.'
      },
      facet: [
        ['Rasa percaya', 'Seberapa gampang kamu percaya pada niat baik orang.'],
        ['Ketulusan', 'Seberapa lurus kamu berurusan dengan orang, tanpa memanfaatkan atau mengakali.'],
        ['Suka menolong', 'Seberapa peduli dan ringan tangan kamu.'],
        ['Suka damai', 'Seberapa sering kamu menghindari konflik dan tidak membalas.'],
        ['Kerendahan hati', 'Seberapa jarang kamu merasa lebih hebat dari orang lain.'],
        ['Simpati', 'Seberapa tersentuh kamu oleh kesulitan orang lain.']
      ]
    },
    N: {
      nama: 'Kepekaan emosi',
      en: 'Neuroticism',
      uraian: {
        tinggi: 'Kamu gampang cemas, kepikiran, atau terbawa suasana hati. Tekanan terasa lebih berat buatmu dibanding kebanyakan orang.',
        sedang: 'Emosimu naik turun dalam batas wajar. Tekanan besar tetap terasa, tapi biasanya kamu bisa pulih.',
        rendah: 'Kamu tenang dan susah goyah. Masalah jarang membuatmu kepikiran lama.'
      },
      facet: [
        ['Kecemasan', 'Seberapa sering kamu khawatir dan membayangkan hal buruk.'],
        ['Kemarahan', 'Seberapa gampang kamu kesal atau marah.'],
        ['Kemurungan', 'Seberapa sering kamu merasa sedih atau tidak puas dengan diri sendiri.'],
        ['Rasa canggung', 'Seberapa tidak nyaman kamu di depan orang yang belum dikenal.'],
        ['Sulit menahan diri', 'Seberapa sulit kamu menolak godaan dan keinginan sesaat.'],
        ['Rentan tertekan', 'Seberapa gampang kamu panik atau kewalahan saat ditekan.']
      ]
    }
  }

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

  function hitung (arr) {
    var hasil = {}
    URUTAN.forEach(function (d) { hasil[d] = { jumlah: 0, facet: [0, 0, 0, 0, 0, 0] } })
    BUTIR.forEach(function (b, i) {
      var nilai = b.r ? 6 - arr[i] : arr[i]
      hasil[b.d].jumlah += nilai
      hasil[b.d].facet[b.f - 1] += nilai
    })
    URUTAN.forEach(function (d) {
      // 24 butir per domain (24–120), 4 butir per facet (4–20), diubah ke 0–100
      hasil[d].skor = Math.round((hasil[d].jumlah - 24) / 96 * 100)
      hasil[d].facet = hasil[d].facet.map(function (s) { return Math.round((s - 4) / 16 * 100) })
      hasil[d].tingkat = tingkat(hasil[d].skor)
    })
    return hasil
  }

  function tingkat (skor) {
    if (skor < 38) return 'rendah'
    if (skor > 62) return 'tinggi'
    return 'sedang'
  }

  /* ---------- Tautan hasil: 3 jawaban dipadatkan jadi 2 huruf ---------- */

  function kode (arr) {
    var s = ''
    for (var i = 0; i < JUMLAH; i += 3) {
      var n = (arr[i] - 1) * 25 + (arr[i + 1] - 1) * 5 + (arr[i + 2] - 1)
      s += ('0' + n.toString(36)).slice(-2)
    }
    return s
  }

  function bacaKode (s) {
    if (!/^[0-9a-z]{80}$/.test(s)) return null
    var arr = []
    for (var i = 0; i < 80; i += 2) {
      var n = parseInt(s.slice(i, i + 2), 36)
      if (n > 124) return null
      arr.push(Math.floor(n / 25) + 1, Math.floor(n / 5) % 5 + 1, n % 5 + 1)
    }
    return arr
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
    PILIHAN.forEach(function (teks, i) {
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

  function gambarSoal () {
    el('pernyataan').textContent = BUTIR[posisi].t
    el('kemajuan-teks').textContent = (posisi + 1) + ' dari ' + JUMLAH
    el('kemajuan-isi').style.width = (posisi / JUMLAH * 100) + '%'
    el('kemajuan-isi').parentNode.setAttribute('aria-valuenow', String(posisi))
    tombolJawab.forEach(function (b, i) {
      b.setAttribute('aria-pressed', jawaban[posisi] === i + 1 ? 'true' : 'false')
    })
    el('tombol-mundur').hidden = posisi === 0
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
      gambarSoal()
      tampil(layarSoal)
      return
    }
    gambarHasil(jawaban, false)
  }

  /* ---------- Hasil ---------- */

  function gabung (daftar) {
    if (daftar.length < 2) return daftar.join('')
    return daftar.slice(0, -1).join(', ') + ' dan ' + daftar[daftar.length - 1]
  }

  function ringkasan (hasil) {
    var kelompok = { tinggi: [], rendah: [], sedang: [] }
    URUTAN.forEach(function (d) { kelompok[hasil[d].tingkat].push(DOMAIN[d].nama.toLowerCase()) })
    if (kelompok.sedang.length === 5) {
      return 'Kelima sisimu ada di tengah. Artinya kamu luwes, tidak condong kuat ke salah satu ujung.'
    }
    var bagian = []
    if (kelompok.tinggi.length) bagian.push('tinggi di ' + gabung(kelompok.tinggi))
    if (kelompok.rendah.length) bagian.push('rendah di ' + gabung(kelompok.rendah))
    if (kelompok.sedang.length) bagian.push('sedang di ' + gabung(kelompok.sedang))
    return 'Kamu ' + bagian.join(', ') + '.'
  }

  function buat (tag, kelas, teks) {
    var n = document.createElement(tag)
    if (kelas) n.className = kelas
    if (teks != null) n.textContent = teks
    return n
  }

  function gambarHasil (arr, kiriman) {
    var hasil = hitung(arr)
    hasilTampil = { jawaban: arr, hasil: hasil, kiriman: kiriman }

    el('hasil-kiriman').hidden = !kiriman
    layarHasil.querySelector('.judul-hasil').textContent = kiriman ? 'Hasil yang dibagikan' : 'Hasil kamu'
    el('ringkasan').textContent = ringkasan(hasil)
    el('tombol-ulang').textContent = kiriman ? 'Kerjakan tes sendiri' : 'Ulangi tes'
    el('status-salin').textContent = ''

    var daftar = el('daftar-hasil')
    daftar.textContent = ''
    daftar.classList.remove('tumbuh')

    URUTAN.forEach(function (d, i) {
      var info = DOMAIN[d]
      var h = hasil[d]
      var kartu = buat('article', 'hasil')
      kartu.setAttribute('data-d', d)
      kartu.style.setProperty('--i', String(i))

      var kepala = buat('div', 'hasil-kepala')
      kepala.appendChild(buat('h2', '', info.nama))
      kepala.appendChild(buat('p', 'hasil-en', info.en))
      kartu.appendChild(kepala)

      var jalur = buat('div', 'jalur')
      var batang = buat('div', 'lempung')
      batang.style.setProperty('--p', h.skor + '%')
      batang.appendChild(buat('span', 'skor', String(h.skor)))
      jalur.appendChild(batang)
      kartu.appendChild(jalur)

      var uraian = buat('p', 'uraian')
      uraian.appendChild(buat('strong', '', h.tingkat.charAt(0).toUpperCase() + h.tingkat.slice(1) + '. '))
      uraian.appendChild(document.createTextNode(info.uraian[h.tingkat]))
      kartu.appendChild(uraian)

      var rinci = buat('details')
      rinci.appendChild(buat('summary', '', 'Lihat 6 rincian ' + info.nama.toLowerCase()))
      var ul = buat('ul', 'rincian')
      info.facet.forEach(function (f, j) {
        var li = buat('li')
        var k = buat('div', 'rincian-kepala', f[0])
        k.appendChild(buat('span', '', String(h.facet[j])))
        var jk = buat('div', 'jalur-kecil')
        var isi = buat('i')
        isi.style.setProperty('--p', h.facet[j] + '%')
        jk.appendChild(isi)
        li.appendChild(k)
        li.appendChild(jk)
        li.appendChild(buat('p', '', f[1]))
        ul.appendChild(li)
      })
      rinci.appendChild(ul)
      kartu.appendChild(rinci)

      daftar.appendChild(kartu)
    })

    tampil(layarHasil)
    // paksa hitung ulang tata letak supaya animasi mulai dari awal
    void daftar.offsetWidth
    daftar.classList.add('tumbuh')
  }

  function teksRingkasan () {
    var h = hasilTampil.hasil
    var baris = ['Hasil tes kepribadian Big Five (IPIP-NEO 120)', '']
    URUTAN.forEach(function (d) {
      var info = DOMAIN[d]
      baris.push(info.nama + ' (' + info.en + '): ' + h[d].skor + ', ' + h[d].tingkat)
      baris.push('  ' + info.facet.map(function (f, j) { return f[0] + ' ' + h[d].facet[j] }).join(', '))
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
    gambarSoal()
    tampil(layarSoal)
  })

  el('tombol-ulang-awal').addEventListener('click', function () {
    if (!window.confirm('Jawaban yang sudah diisi akan dihapus. Mulai dari awal?')) return
    hapusSimpanan()
    gambarSoal()
    tampil(layarSoal)
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
