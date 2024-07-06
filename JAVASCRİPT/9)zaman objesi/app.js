let value;
const now = Date();         // şuan ki zamanı almamızı sağlar.
value = now;


const date1 = new Date("1-5-2024 23:15:00");   // kendi tarihimizi oluşturduk. (ay-gün-yıl)
const date2 = new Date("june 2 2003");
const date3 = new Date("06/02/2003");

value = date1.getMonth();        // 1. ay ocak fakat indeksleri 0,1,2,.. şeklinde saydığı için ocak 0. indeks oldu.
value = date1.getDate();         // günü gösteriyor. fakat bu sefer istediğimiz sayıyı veriyor 1 den saydığı için.
value = date1.getDay();          // 5 ocak pazartesiye denk geliyor. burada da pazartesinin haftanın kaçıncı günü olduğunu gösteriyor.(pazarı 0 dan başlayarak sayıyor.)

value = date1.getHours();           // saati gösterir.
value = date1.getMinutes();         // dakikayı gösterir.
value = date1.getSeconds();         // saniyeyi gösterir.
value = date1.getMilliseconds();    // milisaniyeyi gösterir.

date1.setMonth(7);                  // tarih (gün,ay,yıl,saat,vb..) değiştirmek istediğimizde set kullanıyoruz.
date1.setDate(15);


value = date1;
console.log(value);