//Numaralara basma
let ust_yazi = document.querySelector(".previous-display");
let altYazi = document.querySelector(".current-display");
let allBox = document.querySelector(".kutu");
let icerik = document.querySelector(".kutu").value;

document.querySelectorAll(".kutu").forEach((a) => {
  a.onclick = () => {
    if (a.classList.contains("sayi")) {
      altYazi.textContent += a.textContent;
    }
  };
});
