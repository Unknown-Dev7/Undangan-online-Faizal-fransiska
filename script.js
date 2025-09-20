

// Typing Effect
const text = "Faizal Yustomi & Fransiska Dia Saputri";
let index = 0;
const namaElement = document.getElementById("nama");

function typeWriter() {
  if (index < text.length) {
    namaElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}