// 1-misol 
// Birlik (1–9)
// let bir = "bir";
// let ikki = "ikki";
// let uch = "uch";
// let tort = "to'rt";
// let besh = "besh";
// let olti = "olti";
// let yetti = "yetti";
// let sakkiz = "sakkiz";
// let toqqiz = "to'qqiz";

// // Onlik (10-90)
// let on = "o'n";
// let yigirma = "yigirma";
// let ottiz = "ottiz";
// let qirq = "qirq";
// let ellik = "ellik";
// let oltmish = "oltmish";
// let yetmish = "yetmish";
// let sakson = "sakson";
// let toqson = "toqson";

// let son = prompt("Son kiriting");
// let result = "";

// if (son > 0 && son < 1000) {
//     let yuzlik = Math.floor(son / 100);
//     let onliklar = Math.floor((son % 100) / 10);
//     let birliklar = son % 10;

//     // Yuzlik
//     switch (yuzlik) {
//         case 1: result += bir + " yuz "; break;
//         case 2: result += ikki + " yuz "; break;
//         case 3: result += uch + " yuz "; break;
//         case 4: result += tort + " yuz "; break;
//         case 5: result += besh + " yuz "; break;
//         case 6: result += olti + " yuz "; break;
//         case 7: result += yetti + " yuz "; break;
//         case 8: result += sakkiz + " yuz "; break;
//         case 9: result += toqqiz + " yuz "; break;
//     }
//     // Onlik
//     switch (onliklar) {
//         case 1: result += on + " "; break;
//         case 2: result += yigirma + " "; break;
//         case 3: result += ottiz + " "; break;
//         case 4: result += qirq + " "; break;
//         case 5: result += ellik + " "; break;
//         case 6: result += oltmish + " "; break;
//         case 7: result += yetmish + " "; break;
//         case 8: result += sakson + " "; break;
//         case 9: result += toqson + " "; break;
//     }
//     // Birlik
//     switch (birliklar) {
//         case 1: result += bir; break;
//         case 2: result += ikki; break;
//         case 3: result += uch; break;
//         case 4: result += tort; break;
//         case 5: result += besh; break;
//         case 6: result += olti; break;
//         case 7: result += yetti; break;
//         case 8: result += sakkiz; break;
//         case 9: result += toqqiz; break;
//     }
//     console.log(result);
// } else {
//     console.log("Iltimos, 1 dan 999 gacha bo'lgan son kiriting.");
// }
// 2-misol
// let son = +prompt("44 dan 66 gacha bir son o'ylang: ");
// if (son < 44 || son > 66 || isNaN(son)) {
//   console.log("Faqat 44 dan 66 gacha bo'lgan son kiriting!");
  
// } else {
//   let topildi = false;
//   let urinish = 0;

//   while (!topildi) {
//     let taxmin = Math.floor(Math.random() * (66 - 44 + 1)) + 44;
//     urinish++;

//     console.log("Mening Tahlilim:", taxmin);

//     if (taxmin === son) {
//       console.log("Topdim! Siz o'ylagan son bu:", taxmin);
//       console.log("Urinishlar soni:", urinish);
//       topildi = true;
//     }
//   }
// }

// 3-misol 
// let soz = prompt("Biror so'z kiriting:");
// let i = 0;

// if (soz) {
//   while (i < soz.length) {
//     console.log(soz[i]);
//     i++;
//   }
// } else {
//   console.log("Hech qanday so'z kiritilmadi.");
// }
