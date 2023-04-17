let slideIndex = 0;
showSlides();


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function validateForm() {
  var name = document.forms['message-form']['full-name'].value;
  var date = document.forms['message-form']['birth-date'].value;
  var gender = document.forms['message-form']['gender'].value;
  var messages = document.forms['message-form']['messages'].value;
  

  if (name == "" || date == "" || gender == "" || messages == ""){
    alert('Input tidak boleh kosong');
    return false;
  }

  setSenderUI(name, date, gender, messages);
  return false;
}

  function setSenderUI(name, date, gender, messages){
  var current = new Date();
  document.getElementById('sender-current-date').innerHTML = `<b>Current Date</b> : ${current}`;
  document.getElementById('sender-full-name').innerHTML = `<b>Nama</b> : ${name}`;
  document.getElementById('sender-birth-date').innerHTML = `<b>Tanggal Lahir</b> : ${date}`;
  document.getElementById('sender-gender').innerHTML = `<b>Jenis Kelamin</b> : ${gender}`;
  document.getElementById('sender-messages').innerHTML = `<b>Pesan</b> : ${messages}`;
  }
