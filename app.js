//Numaralara basma
let ust_yazi = document.querySelector(".previous-display");
let altYazi = document.querySelector(".current-display");
let allBox = document.querySelector(".kutu");
let icerik = document.querySelector(".kutu").value;
let ilkSayi, sonuc;
let sayilar = [];
let islemler = []; //sayilarin uzublugu 1den büyük oldugun da diye sart belirttigimiz icin 2. sayiyi girdigimizdeki islemi algiliyor. Bundan dolayi ilk islemi algilatmak icin listeye atayip ordan ilk islemi sectirtiyoruz. Daha sonra o ilk islemi gerceklestikten sonra silip ikinci islemi ilk islem olarak algilatiyoruz ve bu sirayla gidiyor
document.querySelectorAll(".kutu").forEach((a) => {
  a.onclick = () => {
    if (a.classList.contains("sayi")) {
      altYazi.textContent += a.textContent;
    }

    if (a.classList.contains("islem")) {
      islemler.push(a.textContent);
      ilkSayi = Number(altYazi.textContent);
      sayilar.push(ilkSayi);

      if (sayilar.length > 1) {
        if (islemler[0] == "+") sonuc = sayilar[0] + sayilar[1];
        else if (islemler[0] == "-") sonuc = sayilar[0] - sayilar[1];
        else if (islemler[0] == "x") sonuc = sayilar[0] * sayilar[1];
        else if (islemler[0] == "÷") sonuc = sayilar[0] / sayilar[1];
        sayilar.shift();
        sayilar.shift();
        sayilar.push(sonuc);
        islemler.shift();
        console.log(sayilar);
        console.log(islemler);
      }
      ust_yazi.textContent = sayilar[0] + " " + a.textContent + " ";
      altYazi.textContent = "";
    }
  };
});

console.log(10 / 5);
