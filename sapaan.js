window.onload = function() {
  alert("Halo, selamat datang di website saya!");

  let nama = prompt("Masukkan nama Anda:");

  if (nama !== null && nama.trim() !== "") {
    document.getElementById("output").textContent = "Selamat datang, " + nama + "!";
  } else {
    document.getElementById("output").textContent = "Selamat datang!";
  }
};