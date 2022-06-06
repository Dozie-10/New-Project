var leftButton,
  rightButton,
  push,
  moveElement,
  su,
  subBtn,
  invisible,
  response,
  passworda,
  cpassword,
  passwordi,
  same,
  work;
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
push = document.getElementById("push");
moveElement = document.getElementById("first");
su = document.getElementById("susubmit");
subBtn = document.getElementById("submit2");
invisible = document.getElementById("su");
response = document.getElementById("response");
respond = document.getElementById("respond");
passworda = document.getElementById("passworda");
cpassword = document.getElementById("cpassword");
passwordi = document.getElementById("passwordi");
same = document.getElementById("same");
work = document.getElementById("lin");

function latest() {
  invisible.className = "alt";
  work.className = "alt";
}
window.addEventListener("load", latest, false);

function press() {
  moveElement.className = "alt";
  invisible.className = "su";
  invisible.style.marginTop = "-28rem";
  false;
}
leftButton.addEventListener("click", press, false);

function login() {
  moveElement.className = "alt";
  work.className = "show";
  work.style.marginTop = "-50rem";
  work.style.marginLeft = "20rem";
}
rightButton.addEventListener("click", login, false);

function first(e) {
  if (passworda.length < 7) {
    var msg = console.log(
      (e.target.innerText = "Kindly input complete characters...")
    );
  } else {
    msg = "";
  }
}
passworda.addEventListener("keypress", first, false);
