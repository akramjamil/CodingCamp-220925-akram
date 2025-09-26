// Greeting
window.onload = function () {
  let name = prompt("Masukkan nama Anda:");
  if (name) {
    document.getElementById("welcome").innerText = `Hi ${name}, Welcome To Our Website`;
  }
};

// Message Form
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("messageText").value;

  // Tampilkan waktu sekarang
  const now = new Date();

  document.getElementById("time").innerText = now.toString();
  document.getElementById("resName").innerText = name;
  document.getElementById("resDob").innerText = dob;
  document.getElementById("resGender").innerText = gender;
  document.getElementById("resMessage").innerText = message;

  // Reset form
  document.getElementById("messageForm").reset();
});
