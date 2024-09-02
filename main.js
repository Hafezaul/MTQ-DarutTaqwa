const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  document.body.classList.toggle('darkMode');

  const icon = btn.querySelector('i'); // Select the icon inside the button

  // Change icon based on current mode
  if (document.body.classList.contains('darkMode')) {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  } else {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  }
});
// End of JavaScript for Dark Mode

// Start mapping 
// Inisialisasi peta
const map = L.map('map').setView([-6.200000, 106.816666], 15); // Koordinat awal peta dan zoom level

// Menambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Menambahkan marker pada lokasi yang diberikan
const marker = L.marker([-6.200000, 106.816666]).addTo(map);
marker.bindPopup('<b>Lokasi</b><br>Pesantren Kami.').openPopup();