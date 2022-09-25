//Numaralara basma
let ust_yazi = document.querySelector(".previous-display");
let altYazi = document.querySelector(".current-display");
let allBox = document.querySelector(".kutu");
let icerik = document.querySelector(".kutu").value;
let ilkSayi, sonuc, number;
let sonSayi;
let sayilar = [];
let islemler = []; //sayilarin uzublugu 1den büyük oldugun da diye sart belirttigimiz icin 2. sayiyi girdigimizdeki islemi algiliyor. Bundan dolayi ilk islemi algilatmak icin listeye atayip ordan ilk islemi sectirtiyoruz. Daha sonra o ilk islemi gerceklestikten sonra silip ikinci islemi ilk islem olarak algilatiyoruz ve bu sirayla gidiyor
let noktaControl = [];

document.querySelectorAll(".kutu").forEach((a) => {
  a.onclick = () => {
    if (a.classList.contains("sayi")) {
      if (altYazi.textContent == "0") {
        if (a.textContent == "0") return;
        else if (a.textContent == ".") altYazi.textContent = "0";
        else altYazi.textContent = ""; //Ilk görünürken 0 olacak ama baska bir sayi girdigimizde o 0 kaybolsun diye
      }
      if (noktaControl.length > 0 && a.textContent == ".") return;

      altYazi.textContent += a.textContent;
      if (a.textContent == ".") {
        noktaControl.push(".");
      }
    } else if (a.classList.contains("islem")) {
      noktaControl.splice(0, noktaControl.length);
      if (altYazi.textContent == "") return;

      islemler.push(a.textContent);
      ilkSayi = Number(altYazi.textContent);
      sayilar.push(ilkSayi);
      console.log(sayilar);
      console.log(islemler);

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
      ust_yazi.textContent = sayilar[0] + " " + islemler[0] + " ";
      altYazi.textContent = "";
    } else if (a.textContent == "=") {
      noktaControl.splice(0, noktaControl.length);
      sonSayi = Number(altYazi.textContent);
      if (islemler[0] == "+") sonuc = sayilar[0] + sonSayi;
      else if (islemler[0] == "-") sonuc = sayilar[0] - sonSayi;
      else if (islemler[0] == "x")
        if (altYazi.textContent == "") {
          sonSayi = 1;
          sonuc = sayilar[0] * sonSayi;
        } else {
          sonuc = sayilar[0] * sonSayi;
        }
      else if (islemler[0] == "÷") {
        if (altYazi.textContent == "") {
          sonSayi = 1; //textContent bos oldugunda onu otomatik olarak 0 olarak algiliyor.Onun icin burda bire esitledik
          sonuc = sayilar[0] / sonSayi;
        } else if (altYazi.textContent == 0) alert("Sayi 0'a bölünemez!");
        else {
          sonuc = sayilar[0] / sonSayi;
          if (sonuc % 1 == 0) sonuc = sonuc;
          //Eger tam bölünüyorsa sonu 0000 olarak gözükmesin diye bu sekilde yazdik
          else sonuc = (sayilar[0] / sonSayi).toFixed(12);
        }
      }
      ust_yazi.textContent = " ";
      altYazi.textContent = sonuc;
      console.log("Esittir sonrasi", sayilar);
      console.log("Esittir sonrasi", islemler);
      islemler.pop();
      sayilar.pop();
    } else if (a.textContent == "AC") {
      noktaControl.splice(0, noktaControl.length);
      sayilar.splice(0, sayilar.length);
      islemler.splice(0, islemler.length);
      console.log(sayilar);
      console.log(islemler);
      altYazi.textContent = "";
      ust_yazi.textContent = "";
    } else if (a.textContent == "±") {
      noktaControl.splice(0, noktaControl.length);
      number = Number(altYazi.textContent);
      number = number * -1;
      altYazi.textContent = number;
    } else if (a.textContent == "%") {
      noktaControl.splice(0, noktaControl.length);
      //if (altYazi.textContent == "") return; Bosken bastigimizda 0 gözükmesini istemezsek bunu kullanabiliriz

      number = Number(altYazi.textContent);
      number = number / 100;
      altYazi.textContent = number;
    }
  };
});

const meyveler3 = [
  "Armut",
  "Ayva",
  "Mango",
  "Cilek",
  "Erik",
  "Karpuz",
  "Kavun",
  "Muz",
];

//Sadece dizilerde gecerli oldugu icin önce dizi icindeki elemani da split() metodu ile diziye cevirmem lazim
const kelimeListHali = meyveler3[2].split("").reverse();
console.log(kelimeListHali);

//Tekrar eski halone getirmek icin join ile birlestirirz.
const birlestirmeTekrar = kelimeListHali.join("");
console.log(birlestirmeTekrar);
// veya direk kisaca

const kelimeListHali2 = meyveler3[5].split("").reverse().join("");
console.log(kelimeListHali2);
