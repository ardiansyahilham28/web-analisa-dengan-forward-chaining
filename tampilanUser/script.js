// script.js

const form = document.getElementById('konsultasi-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const nama = document.getElementById('nama').value;
	const email = document.getElementById('email').value;
	const keluhan = document.getElementById('keluhan').value;

	fetch('save-data.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			nama: nama,
			email: email,
			keluhan: keluhan
		})
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
});