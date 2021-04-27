let tahun = 2021, // Tahun yang akan ditampilkan
    bulan = 3, // Variabel 'bulan' harus berupa angka (1 - 12)
    tanggalMulai = 2,
    hari = 4; /* Variabel 'hari' harus berupa angka (1 - 7) dan Sabtu dihitung sebagai hari ke-7,
                 dan harus sesuai dengan variabel 'tanggalMulai'.
                 Contoh misalnya tanggalMulai = 2, bulan = 3, dan tahun = 2021, maka hari yang ditulis harus sama
                 dengan hari pada tanggal 2 bulan ke-3 tahun 2021, yang mana bertepatan dengan Hari Rabu (ditulis 4 pada Variabel 'hari')
              */

        //             1       2         3        4       5         6        7     
const   namaHari = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', ],
        //               1           2         3        4       5       6       7        8           9           10         11          12
        namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember', ],
        //               0                1           2           3          4
        status = ['Belum dikerjakan', 'Selesai', 'Tertunda', 'Mengulang', 'Batal', ],
        //            0    1    2    3
        tingkatan = ['A', 'B', 'C', 'D', ],
        //                ------- 0 ------  ------- 1 -------  -------- 2 -------  -------- 3 --------
        warnaTingkatan = [['red', 'white'], ['blue', 'white'], ['green', 'white'], ['yellow', 'black'], ],

        teksKeterangan = [
            // Teks keterangan tingkatan A [0]
            ['Tingkatan A merupakan tingkatan dengan peringkat tertinggi. Prioritas A digunakan',
            ' untuk kegiatan dengan kepentingan yang sangat serius dan harus dikerjakan saat itu juga,',
            ' biasanya terkait dengan nyawa, kesehatan, penyelesaian konflik, pekerjaan, dan kegiatan yang mungkin',
            ' berakibat fatal/serius jika tidak dikerjakan.<br><br>',
            'Contoh : menjenguk orang sakit, menghadiri resepsi, membeli obat, pergi ke dokter, dan sebagainya.', ],

            // Teks keterangan B tingkatan [1]
            ['Tingkatan B menduduki peringkat ke-2, digunakan sebagai tanda untuk kegiatan penting yang terkait',
            ' dengan kebutuhan dan segala hal yang dilakukan demi kebaikan diri sendiri dan orang lain.',
            ' Semua keinginan yang bertentangan dengan kebutuhan maka tertolak. Kegiatan yang memiliki',
            ' tingkatan B tetap harus dilaksanakan meski ada keinginan lain yang tidak sesuai kebutuhan.<br><br>',
            'Contoh : belajar pemrograman, olahraga, reuni, mengatur pola makan, dan sebagainya.', ],

            // Teks keterangan C [2]
            ['Tingkatan C digunakan untuk kegiatan santai namun bersifat positif,',
            ' dan kegiatan tersebut bisa berguna untuk sekarang atau di kemudian hari.',
            ' Termasuk pada kegiatan yang tidak bisa dikerjakan di sembarang tempat dan waktu,',
            ' dan termasuk di dalamnya kegiatan yang melatih kemampuan tambahan dan juga softskill.<br><br>',
            'Contoh : Memperbaiki barang, menanam sayur, mencari informasi, membersihkan kamar, dan sebagainya.', ],

            // Teks keterangan D [3]
            ['Tingkatan D dipakai pada kegiatan yang santai yang tidak mengapa bila tidak dikerjakan',
            ' dan bisa dilakukan di sembarang tempat dan waktu. Segala aktifitas yang tidak penting, hobi',
            ' yang tidak umum, selama tidak merugikan diri sendiri atau orang lain dan tidak mengakibatkan efek',
            ' buruk jangka pendek maupun jangka panjang, serta kegiatan yang bisa memperbaiki suasana hati',
            ' bisa termasuk pada kegiatan tingkat D.<br><br>',
            'Contoh : jalan-jalan, bermain game, hobi ringan, menggambar daun, dan sebagainya.', ],
        ],

        // PERINGATAN : Tidak boleh ada tipe data yang salah dan dilarang menggunakan nilai 'undefined'
        KEGIATAN = [
            // Tanggal 10
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Menulis catatan', 1, 3, 60, ],                      // Kegiatan 1
            ],
            // Tanggal 11
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Menata berkas', 0, 1, 30, ],                        // Kegiatan 1
                ['Belajar JavaScript', 1, 0, 240, ],                  // Kegiatan 2
                ['Foto copy', 2, 4, 40, ],                            // Kegiatan 3
                ['Belajar JavaScript', 3, 0, 60, ],                   // Kegiatan 4
            ],
            // Tanggal 12
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Membeli beras', 0, 0, 15, ],                        // Kegiatan 1
                ['Mengecek E-mail', 3, 0, 10, ],                      // Kegiatan 2
                ['Membersihkan WC', 2, 0, 120, ],                     // Kegiatan 3
            ],
            // Tanggal 13
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Ke rumah teman', 1, 2, 360, ],                      // Kegiatan 1
                ['Membersihkan kamar', 2, 1, 60, ],                   // Kegiatan 2
            ],
            // Tanggal 14
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ["Mempelajari 'batch file'", 2, 2, 240, ],            // Kegiatan 1
                ['Ke alun-alun kota', 3, 1, 139, ],                   // Kegiatan 2
                ['Melihat situasi pasca banjir', 3, 0, 15, ],         // Kegiatan 3
                ['Melukis daun kemangi', 2, 2, 192, ],                // Kegiatan 4
                ['Belajar JavaScript', 1, 0, 110, ],                  // Kegiatan 5
                ['Membaca E-Mail dan semua pesan', 1, 0, 20, ],       // Kegiatan 6
                ['Menulis catatan', 3, 0, 2, ],                       // Kegiatan 7
            ],
            // Tanggal 15
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Membeli kayu', 1, 2, 100, ],                        // Kegiatan 1
                ['Membeli paku panjang', 1, 0, 10, ],                 // Kegiatan 2
                ['Membeli semen putih', 1, 1, 20, ],                  // Kegiatan 3
            ],
            // Tanggal 16
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Foto copy KTP', 0, 1, 22, ],                        // Kegiatan 1
                ['Legalisir ijazah', 0, 1, 0, 77, ],                  // Kegiatan 2
                ['Membeli buku Pemrograman JavaScript', 2, 0, 115, ], // Kegiatan 3
                ['Menyalin catatan', 1, 2, 88, ],                     // Kegiatan 4
                ['Merapikan kamar', 0, 0, 109, ],                     // Kegiatan 5
                ['Memompa ban', 1, 1, 5, ],                           // Kegiatan 6
            ],
            // Tanggal 17
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Mengembalikan buku', 0, 3, 29, ],                   // Kegiatan 1
                ['Mendata dokumen dan FC', 0, 2, 66, ],               // Kegiatan 2
                ['Melanjutkan melukis daun kemangi', 3, 0, 130, ],    // Kegiatan 3
                ['Membeli pulpen dan pensil', 1, 1, 25, ],            // Kegiatan 4
                ['Menyiram dan merawat tanaman', 1, 3, 50, ],         // Kegiatan 5
                ['Membayar listrik', 0, 0, 5, ],                      // Kegiatan 6
                ['Ke rumah teman', 0, 4, 248, ],                      // Kegiatan 7
                ['Membeli sayuran', 1, 1, 45, ],                      // Kegiatan 8
            ],
            // Tanggal 18
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Kondangan ke Surabaya dan Gresik', 0, 0, 390, ],    // Kegiatan 1
            ],
            // Tanggal 19
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Membeli minyak wangi', 1, 2, 34, ],                 // Kegiatan 1
                ['Membersihkan keran air', 0, 1, 7, ],                // Kegiatan 2
            ],
            // Tanggal 20
            [
                // Nama kegiatan | tingkatan | status | waktu (menit)
                ['Olahraga pagi', 1, 3, 115, ],                       // Kegiatan 1
                ['Membeli obat', 0, 0, 50, ],                         // Kegiatan 2
                ['Download modul Pemrograman JavaScript', 1, 2, 5, ], // Kegiatan 3
                ['Belajar JavaScript', 2, 0, 140, ],                  // Kegiatan 4
                ['Beli Indomie Goreng 4 bungkus', 3, 1, 6, ],         // Kegiatan 5
            ],
        ],

        // Untuk menentukan batas akhir perulangan dalam mencetak jumlah hari sesuai 'array' yang tersedia
        tanggalAkhir = tanggalMulai + (KEGIATAN.length-1),

        // Untuk membuka dan menutup tampilan daftar kegiatan kegiatan
        bukaTutupKegiatan = (ID) => {
            const tampilan = document.getElementById('kegiatan' + ID).style,
                    tombolTampilan = document.getElementById('tombol' + ID);

            /* Jika kegiatan selama sehari belum ditampilkan, maka semua kegiatan tersebut akan ditampilkan
                dan teks pada tombol yang tadinya bertuliskan 'Tampilkan' diganti menjadi 'Sembunyikan' */
            if (tampilan.display == 'none') {
                tampilan.display = 'block';
                tombolTampilan.innerHTML = 'Sembunyikan';
            }
            /* Jika kegiatan selama sehari sudah ditampilkan, maka semua kegiatan tersebut akan disembunyikan
                dan teks pada tombol yang tadinya bertuliskan 'Sembunyikan' diganti menjadi 'Tampilkan' */
            else {
                tampilan.display = 'none';
                tombolTampilan.innerHTML = 'Tampilkan';
            }
        },

        // Variabel yang dikirim ke fungsi ini berupa variabel bernilai ANGKA yang mewakili satuan MENIT
        formatWaktu = (waktu) => {
            // Waktu yang dikirim harus bernilai lebih dari nol
            if (waktu > 0) {
                // Jika waktu yang dikirimkan kurang dari 60
                if (waktu < 60) {
                    return waktu + ' menit';
                }
                // Jika waktu yang dikirimkan merupakan kelipatan dari 60
                else if (waktu % 60 == 0) {
                    return waktu / 60 + ' jam';
                }
                // Jika waktu yang dikirimkan lebih dari 60 dan bukan kelipatan dari 60
                else {
                    //     ----angka untuk jam---          angka untuk menit
                    return Math.floor(waktu / 60) + ' jam ' + waktu % 60 + ' menit';
                    /* JAM   : 'waktu' akan dibagi 60 dan hasilnya akan dibulatkan ke bawah menggunakan Math.floor()
                        MENIT : Sisa hasil bagi dari ( 'waktu'/60 ) */
                }
            }
            // Jika waktu yang dikirimkan bernilai 0 atau negatif
            else {
                return 0 + ' menit';
            }
        },

        // Untuk mencetak Status Tingkatan
        cetakTingkatan = ($nomorTingkatan, statusLink) => {
            // $ : Untuk menunjuk kelas warna tingkatan
            const $ = warnaTingkatan[$nomorTingkatan];
            return '<span class="tingkatan" ' + (statusLink ? 'onclick="bukaTutupTingkatan(' + $nomorTingkatan + ')"' : '') + ' style="background-color: ' + $[0] + '; color: ' + $[1] + '; cursor: ' + (statusLink ? 'pointer' : 'default') + ';" title="Tingkatan ' + tingkatan[$nomorTingkatan] + '">' + tingkatan[$nomorTingkatan] + '</span>';
        },

        // Fungsi untuk membuka dan menutup Halaman Info Tingkatan saat lambang tingkatan di-klik
        // Parameter bernilai 'integer'
        bukaTutupTingkatan = ($nomorTingkatan) => {
            const utama = document.getElementById('halamanUtama').style,
                    tombolTingkatan = document.getElementById('tombolTingkatan' + $nomorTingkatan).style,
                    tingkatan = document.getElementById('tingkatan' + $nomorTingkatan).style;
            //                         ----------------------------------------- true -----------------------------------------   ---------------------------------------- false ----------------------------------------
            utama.display == 'block' ? (utama.display = 'none', tombolTingkatan.display = 'block', tingkatan.display = 'block') : (utama.display = 'block', tombolTingkatan.display = 'none', tingkatan.display = 'none');
        },

        // Mencetak semua halaman tentang jenis-jenis Tingkatan
        cetakHalamanKeteranganTingkatan = () => {
          for (let j = 0; j < tingkatan.length; j++) {
                let tombolTingkatan = document.createElement('button');
                    tombolTingkatan.style.position = 'fixed';
                    tombolTingkatan.style.display = 'none';
                    tombolTingkatan.style.margin = '10px 0 0 10px';
                    tombolTingkatan.setAttribute('onclick', 'bukaTutupTingkatan(' + j + ')');
                    tombolTingkatan.id = 'tombolTingkatan' + j;
                    tombolTingkatan.innerHTML = '<< Kembali';
                document.body.appendChild(tombolTingkatan);

                let keteranganTingkatan = document.createElement('div');
                    keteranganTingkatan.className = 'keteranganTingkatan';
                    keteranganTingkatan.id = 'tingkatan' + j;
                    keteranganTingkatan.style.display = 'none';
                document.body.appendChild(keteranganTingkatan);
                let a = document.getElementById('tingkatan' + j);
                let h1 = document.createElement('h1');
                    h1.innerHTML = 'Tingkatan ' + tingkatan[j];
                a.appendChild(h1);
                let jenisDetail1 = document.createElement('span');
                    jenisDetail1.className = 'jenisDetail';
                    jenisDetail1.innerHTML = 'Tingkatan prioritas';
                a.appendChild(jenisDetail1);
                a.innerHTML += ': Tingkat ';
                let str = document.createElement('strong');
                    str.innerHTML = tingkatan[j];
                a.appendChild(str);
                a.innerHTML += '<br><br>';

                let jenisDetail2 = document.createElement('span');
                    jenisDetail2.className = jenisDetail1.className;
                    jenisDetail2.innerHTML = 'Tampilan tanda';
                a.appendChild(jenisDetail2);
                a.innerHTML += ': ';
                let cetakTingkatanB = document.createElement('span');
                    cetakTingkatanB.style.display = 'ineline-block';
                    cetakTingkatanB.style.margin = '20px 0 0 0';
                    cetakTingkatanB.innerHTML = cetakTingkatan(j, false);
                a.appendChild(cetakTingkatanB);
                a.innerHTML += '<br><br>';
                
                let cetakTeksKeterangan = document.createElement('div');
                    cetakTeksKeterangan.style.textAlign = 'justify';
                    cetakTeksKeterangan.style.fontSize = '18px';
                    cetakTeksKeterangan.innerHTML = '&emsp;&emsp;' + teksKeterangan[j].join('');
                a.appendChild(cetakTeksKeterangan);
                
            } // Akhir 'for'
        },

        // Fungsi ini untuk menghitung jumlah total waktu kegiatan selama satu hari,
        // dan nilai yang dikembalikan akan berupa angka yang mewakili satuan menit
        totalWaktuHarian = ($aksesArray) => {
            let jumlahWaktu = 0;

            // Variabel 'z' mewakili jumlah kegiatan selama sehari
            //                  jumlah kegiatan dalam sehari
            KEGIATAN[$aksesArray].forEach(e => {
                jumlahWaktu += e[3];
            });
            return jumlahWaktu;
        },

        // Mengubah nilai yang dikirimkan menjadi bentuk persen
        persentaseHarian = ($aksesArray) => {
            let kegiatanSelesai = 0;
            KEGIATAN[$aksesArray].forEach(e => {
                e[2] == 1 ? kegiatanSelesai++ : e = e;
            });
            return '<strong>' + (Math.round((kegiatanSelesai / KEGIATAN[$aksesArray].length) * 1000) / 10) + '</strong> %';
        },

        // Mencetak semua kegiatan dalam sehari
        cetakIsiKegiatan = ($tanggal, IDtarget) => {
                let aksesArray = $tanggal - tanggalMulai;
                // Variabel 'n' mewakili jumlah kegiatan dalam sehari
                for (let n = 0; n < KEGIATAN[aksesArray].length; n++) {
                    // $keg : Variabel untuk menunjuk secara spesifik kegiatan yang dimaksud
                    let $keg = KEGIATAN[aksesArray][n],
                        detailKegiatan = document.createElement('div');
                        detailKegiatan.className = 'detailKegiatan';
                        detailKegiatan.id = detailKegiatan.className + $tanggal + '-' + n;
                    document.getElementById(IDtarget).appendChild(detailKegiatan);
                    let b = document.getElementById(detailKegiatan.id);
                        let nomor = document.createElement('span');
                            nomor.className = 'nomor';
                            nomor.style.backgroundColor = $keg[2] === 1 ? 'rgb(109, 231, 88)' : 'white';
                            nomor.style.color = 'black';
                            nomor.title = 'Kegiatan ' + (n+1) + ' | ' + namaHari[hari-1] + ', ' + $tanggal + ' ' + namaBulan[bulan-1] + ' ' + tahun;
                            nomor.innerHTML = n+1;
                        b.appendChild(nomor);
                        b.innerHTML += '<h3>' + $keg[0] + '</h3>' + cetakTingkatan($keg[1], true) + '<br>';
                        b.innerHTML += '<span class="tabNomor"></span><span class="jenisDetail">Status</span>:<span class="variabelDetail">' + status[$keg[2]] + '</span><br>';
                        b.innerHTML += '<span class="tabNomor"></span><span class="jenisDetail">Estimasi waktu</span>:<span class="variabelDetail">' + formatWaktu($keg[3]) + '</span><br>';
                }
        },

        // Mencetak semua tanggal dalam sebulan
        cetakWadahTanggal = (target) => {
            for(let i = tanggalMulai; i <= tanggalAkhir; i++) {
                let cetakWadahTanggal = document.createElement('div');
                    cetakWadahTanggal.className = 'wadahTanggal';
                    cetakWadahTanggal.id = 'wadahTanggal' + i;
                document.getElementById(target).appendChild(cetakWadahTanggal);
                    let judulKegiatan = document.createElement('div');
                        judulKegiatan.className = 'judulKegiatan';
                        judulKegiatan.id = judulKegiatan.className + i;
                    document.getElementById(cetakWadahTanggal.id).appendChild(judulKegiatan);
                    let c = document.getElementById(judulKegiatan.id);
                            wadahTeksTanggal = document.createElement('span');
                            wadahTeksTanggal.className = 'wadahTeksTanggal';
                            wadahTeksTanggal.innerHTML = namaHari[hari-1] + ', ' + i + ' ' + namaBulan[bulan-1];
                        c.appendChild(wadahTeksTanggal);
                        let btn = document.createElement('button');
                            btn.setAttribute('onclick', 'bukaTutupKegiatan(' + i + ')');
                            btn.innerHTML = 'Tampilkan';
                            btn.id = 'tombol' + i;
                        c.appendChild(btn);
                        c.innerHTML += '<br>';

                    let totalHarian = document.createElement('div');
                        totalHarian.className = 'totalHarian';
                        totalHarian.id = 'totalHarian' + i;
                    document.getElementById(cetakWadahTanggal.id).appendChild(totalHarian);
                    let d = document.getElementById(totalHarian.id),
                            sr = document.createElement('strong');
                            sr.innerHTML = KEGIATAN[i-tanggalMulai].length;
                        d.appendChild(sr);
                        d.innerHTML += ' kegiatan | ' + formatWaktu(totalWaktuHarian(i-tanggalMulai)) + ' | ' + persentaseHarian(i-tanggalMulai);

                    let isiKegiatan = document.createElement('div');
                        isiKegiatan.className = 'isiKegiatan';
                        isiKegiatan.id = 'kegiatan' + i;
                        isiKegiatan.style.display = 'none';
                    document.getElementById(cetakWadahTanggal.id).appendChild(isiKegiatan);
                    cetakIsiKegiatan(i, isiKegiatan.id)

                hari++;
                // Jika variabel 'hari' sudah melebihi jumlah hari (7),
                // maka hari akan di-reset kembali menjadi 1 (untuk memulai kembali ke hari pertama)
                hari > namaHari.length ? hari = 1 : hari = hari;
            }
        },

        // Mencetak wadah bulan
        cetakBulan = (TARGET) => {
            let wadahBulan = document.createElement('div')
                wadahBulan.className = 'wadahBulan';
                wadahBulan.id = wadahBulan.className;
            document.getElementById(TARGET).appendChild(wadahBulan);
            cetakWadahTanggal(wadahBulan.id);
        },

        // (Fungsi ini sementara di-nonaktifkan)
        cekKelengakapan = () => true;
            // cekKelengakapan = function () {
            //         if (namaHari.length == 7 && namaBulan.length == 12 && status.length == 5) {
            //         return true;
            //         }
            //         else {
            //             return false;
            //         }
            // };

if (cekKelengakapan()) {
    document.getElementsByTagName('title')[0] = namaBulan[bulan-1] + ' ' + tahun;
    let hu = document.createElement('div');
        hu.id = 'halamanUtama';
        hu.style.display = 'block';
    document.body.appendChild(hu);
    let e = document.getElementById(hu.id);
            h1Utama = document.createElement('h1');
            h1Utama.innerHTML = 'Jadwal ' + namaBulan[bulan-1] + ' ' + tahun;
        e.appendChild(h1Utama);
    cetakBulan(hu.id);
    e.innerHTML += '<br><br><div class="bawah"></div>';
    
    cetakHalamanKeteranganTingkatan();
}
else {
    let hk = document.createElement('div');
        hk.id = 'halamanKesalahan';
    document.body.appendChild(hk);
    document.getElementById(hk.id).innerHTML += '<h1>Terjadi Kesalahan</h1>';
    document.getElementById(hk.id).innerHTML += '<h3>Telah terjadi kesalahan pada sistem</h3>';
}
