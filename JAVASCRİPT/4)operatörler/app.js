let value;

const value1 = 10;
const value2 = 5;

//aritmetik operatörler
value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;

//math objeleri
value = Math.PI;              //pi sayısı
value = Math.E;               //logaritma sayısı

value = Math.round(3.6);      //sayıyı en yakın tam sayı değerine yuvarlar.
value = Math.ceil(3.2);       //üstünde ki tam sayıya yuvarlar.
value = Math.floor(3.6);      //altında ki tam sayıya yuvarlar.

value = Math.sqrt(16);        //karekök alma
value = Math.abs(-10);        //mutlak değere alma
value = Math.pow(8, 3);         //üs alma metodu. 8 in 3 ücüncü kuvvetini alır.

value = Math.max(10, -1, 100, 32);  //verilen sayılardan en büyüğünü çeker gösterir.
value = Math.min(10, -1, 100, 32);  //en küçük olanı çeker.

value = Math.random();          // 0 ile 1 arasında rastgele sayı üretir. (0 dahil 1 dahil değil)
value = Math.random() * 20;       // 0 ile 20 arası sayı üretir.
value = Math.floor(Math.random() * 20);  //0 ile 20 arasında sayı üretip daha sonra onu bir altındaki TAM SAYI ya yuvarlayacak ondalıktan da kurtarmış olacak.

console.log(value);