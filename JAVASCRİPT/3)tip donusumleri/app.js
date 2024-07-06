// veri tiplerini string'e çevirme : her veri tipini çevirebiliriz.

let value;

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () { console.log() });
value = String([1, 2, 3, 4]);

value = (10).toString();   //bu şekilde de stringe çevirebiliriz.


// veri tiplerini number'a çevirme :
value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("hello world");
value = Number(function () { console.log() });
value = Number([1, 2, 3, 4]);


console.log(value);
console.log(typeof value);


// const a="hello world" +34;
const a = Number("34") + 53;
console.log(a);
console.log(typeof a);




