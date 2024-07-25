document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('konsultasi-form');
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  const gejalaButton = document.getElementById('gejala-button');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simpan data form atau kirim ke server di sini jika diperlukan

    notificationText.textContent = 'Konsultasi berhasil dikirim!';
    notification.style.display = 'block';

    // Reset form setelah submit
    form.reset();
  });

  gejalaButton.addEventListener('click', function () {
    window.location.href = "/tampilanUser/lanjutan/gejala.html"; // Ganti dengan halaman tes gejala Anda
  });
});
