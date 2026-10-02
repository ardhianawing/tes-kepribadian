// Halaman depan: daftar tes beserta status pengerjaan di perangkat ini.
(function () {
  'use strict'

  // Tautan hasil lama mengarah ke halaman depan (waktu situs ini hanya berisi Big Five).
  function alihkanTautanLama () {
    if (!/^#hasil=[0-9a-z]+$/.test(location.hash)) return false
    location.replace('big-five/' + location.hash)
    return true
  }

  if (alihkanTautanLama()) return
  window.addEventListener('hashchange', alihkanTautanLama)

  var DAFTAR = window.DAFTAR || []

  function status (d) {
    try {
      var data = JSON.parse(localStorage.getItem(d.kunci))
      if (!data || !Array.isArray(data.jawaban) || data.jawaban.length !== d.jumlah) return ''
      var n = data.jawaban.filter(function (v) { return v > 0 }).length
      if (n === d.jumlah) return 'Sudah selesai, lihat hasilnya'
      if (n > 0) return 'Lanjutkan dari soal ' + (Math.min(Math.max(data.posisi | 0, 0), d.jumlah - 1) + 1)
    } catch (e) {}
    return ''
  }

  function buat (tag, kelas, teks) {
    var n = document.createElement(tag)
    if (kelas) n.className = kelas
    if (teks != null) n.textContent = teks
    return n
  }

  var ul = document.getElementById('daftar-tes')
  DAFTAR.forEach(function (d) {
    var li = buat('li')
    var a = buat('a')
    a.href = d.id + '/'
    var b = buat('span', 'butiran')
    b.style.setProperty('--warna', 'var(--k' + d.warna + ')')
    var isi = buat('span')
    isi.appendChild(buat('span', 'tes-nama', d.nama))
    isi.appendChild(buat('span', 'tes-ringkas', d.ringkas))
    var ket = buat('span', 'tes-keterangan', d.jumlah + ' pernyataan, sekitar ' + d.menit + ' menit')
    var s = status(d)
    if (s) {
      ket.appendChild(document.createElement('br'))
      ket.appendChild(buat('span', 'tes-status', s))
    }
    isi.appendChild(ket)
    a.appendChild(b)
    a.appendChild(isi)
    li.appendChild(a)
    ul.appendChild(li)
  })
})()
