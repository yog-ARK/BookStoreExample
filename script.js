let slideIndex = 0;

function tampilkanSlide() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(tampilkanSlide, 10000); // Ubah gambar setiap 3 detik
}

function gantiSlide(n) {
  slideIndex += n;
  tampilkanSlide();
}
tampilkanSlide();

function startCountdown() {
    const endDate = new Date('2023-12-31T23:59:59').getTime();
  
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      const countdownElement = document.getElementById('countdown');
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = 'Promo Telah Berakhir';
      }
    }, 1000);
  }
  startCountdown(); // Memulai hitung mundur saat halaman dimuat

  
  let keranjang = [];
  function tambahKeKeranjang() {
    // Logika untuk menambahkan produk ke dalam keranjang
    const namaProduk = 'Nama Produk'; // Ganti dengan nama produk yang sesuai
    const hargaProduk = 100000; // Ganti dengan harga produk yang sesuai
    const linkGambar = 'link_gambar_produk.jpg'; // Ganti dengan link gambar produk yang sesuai
    
    const produk = {
      nama: namaProduk,
      harga: hargaProduk,
      gambar: linkGambar
    };
  
    keranjang.push(produk);
    console.log('Produk ditambahkan ke keranjang:', produk);
  }
  
  function tampilkanKeranjang() {
    const keranjangPopup = document.getElementById('keranjangPopup');
    
    // Mengisi konten popup keranjang
    keranjangPopup.innerHTML = '';
    
    keranjang.forEach((item) => {
      keranjangPopup.innerHTML += `
        <div class="item">
          <img src="${item.gambar}" alt="${item.nama}">
          <h2>${item.nama}</h2>
          <p>Harga: Rp ${item.harga}</p>
        </div>
      `;
    });
  
    // Menampilkan popup keranjang
    keranjangPopup.style.display = 'block';
  }
  
  
