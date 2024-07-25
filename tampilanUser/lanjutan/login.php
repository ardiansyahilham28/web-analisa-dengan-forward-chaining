<?php
session_start();

// Koneksi ke database
$servername = "localhost";
$username = "root"; // Sesuaikan dengan username database Anda
$password = ""; // Sesuaikan dengan password database Anda
$dbname = "user_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari form login
$user = $_POST['username'];
$pass = $_POST['password'];

// Query untuk mendapatkan user dari database
$sql = "SELECT * FROM users WHERE username='$user'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User ditemukan, verifikasi password
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        // Password benar, buat sesi
        $_SESSION['username'] = $user;
        echo "Login berhasil!";
    } else {
        // Password salah
        echo "Password salah!";
    }
} else {
    // User tidak ditemukan
    echo "Username tidak ditemukan!";
}

$conn->close();
?>
