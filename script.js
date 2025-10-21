// ----menu --------
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1285) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});


// ----about ream more button --------
// Read More / Read Less functionality
const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the page from jumping to top

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});


// ---- Email Section ----

(function () {
  emailjs.init("Dv3WyqWOnkzaW8oUf"); // 🔑 Ta clé publique
  console.log("📨 EmailJS initialized!");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  console.log("📤 Sending data...");
  console.log({
    from_name: this.from_name.value,
    from_email: this.from_email.value,
    subject: this.subject.value,
    message: this.message.value
  });

  emailjs.sendForm('service_2jbxrd6', 'template_8hltpkc', this)
    .then((response) => {
      console.log("✅ SUCCESS:", response);
      alert('✅ Message sent successfully!');
      this.reset();
    })
    .catch((error) => {
      console.error("❌ ERROR:", error);
      alert('❌ Failed to send message: ' + JSON.stringify(error));
    });
});
