// Blink animations

function blink(id) {
  i = document.getElementById(id);
  i.animate([{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }], 700);
}

function altBlink(id) {
  i = document.getElementById(id);
  i.animate([{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }], 700);
  i.animate(
    [
      { border: "2px solid rgba(255, 255, 255, 0.18)" },
      { border: "2px solid rgba(245, 75, 66, 0.36)" },
      { border: "2px solid rgba(255, 255, 255, 0.18)" },
      { border: "2px solid rgba(245, 75, 66, 0.36)" },
      { border: "2px solid rgba(255, 255, 255, 0.18)" }
    ],
    700
  );
}

// Login button event listeners - modify to your preferences

document.getElementById("login").addEventListener("click", function() {
  if (document.getElementById("email").value == "" && document.getElementById("password").value != "") {
    // If only the email field is filled, apply blink animation to only email field
    altBlink("email");
    blink("1");
    // Output in console
    console.error("SubmitError: Cannot pass form data - 1 0");
  }
  else if (document.getElementById("email").value == "" && document.getElementById("password").value == "") {
    // If both fields are empty, apply blink animation to email field, then apply blink animation to password field after 500 milliseconds
    altBlink("email");
    blink("1");
    setTimeout(() => { altBlink("password"); }, 125);
    setTimeout(() => { blink("2"); }, 125);
    // Output in console
    console.error("SubmitError: Cannot pass form data - 1 1");
  }
  else if (document.getElementById("email").value != "" && document.getElementById("password").value == "") {
    // If only the password field is filled, apply blink animation to password field
    altBlink("password");
    blink("2");
    // Output in console
    console.error("SubmitError: Cannot pass form data - 0 1");
  }
  if (document.getElementById("remember").checked == false) {
    // FOR REGISTER ONLY: If the "terms & conditions" checkbox is not checked, apply blink animation to the "terms & conditions" checkbox
    setTimeout(() => { blink("remember"); }, 250);
    setTimeout(() => { altBlink("remember"); }, 250);
  }
});

document.getElementById("menu-btn").addEventListener("click", function() {
  if (document.getElementById("nav").style.display == "" || document.getElementById("nav").style.display == "none") {
    document.getElementById("nav").animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      250
    );
    document.getElementById("nav").style.display = "flex";
    document.getElementById("menu-btn").classList.remove("bx-menu");
    document.getElementById("menu-btn").classList.add("bx-x");
  }
  else if (document.getElementById("nav").style.display == "flex") {

    document.getElementById("menu-btn").classList.add("bx-menu")
    document.getElementById("menu-btn").classList.remove("bx-x");
    document.getElementById("nav").animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      250
    );
    setTimeout(() => {
      document.getElementById("nav").style.display = "none";
    }, 200);
  }
});