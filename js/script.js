window.onload = function () {
   
  let userNamePrompt = prompt("Masukkan nama Anda:");
  if (userNamePrompt) {
    document.getElementById("welcome").innerText = `Hi ${userNamePrompt}, Welcome To Noir Studio!`;
  }

  
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formName = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("messageText").value;

    
    const now = new Date();

    document.getElementById("time").innerText = now.toString();
    document.getElementById("resName").innerText = formName;
    document.getElementById("resDob").innerText = dob;
    document.getElementById("resGender").innerText = gender;
    document.getElementById("resMessage").innerText = message;

    
    form.reset();
  });
};
