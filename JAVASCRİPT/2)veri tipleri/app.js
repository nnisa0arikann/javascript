//değişken tipleri: var,let,const

// 1) var  : tanımlanan değişkeni tekrar tanımlayabiliriz.
var name = "mustafa";
console.log(name);
name = "murat";
console.log(name);

// 2) let  : tanımlanan bir değişkeni tekrar tanımlayamayız (hata verir) ancak değerini güncelleyebiliriz.
// let name="mustafa";
// console.log(name);
// name="murat";
// console.log(name);  // (çıktıda hata veriyor)

let a, b;
a = 10;
b = 20;
console.log(a + b);

// 3) const  : (sabit demek) değişkene daha sonrasında tekrar değer ataması yapılamaz.
// const name="mustafa"; 
// console.log(name);
// name="murat"; 
// console.log(name);      (çıktıda hata veriyor)

const c = [1, 2, 3, 4, 5];
console.log(c);
c.push(6);             //push ile c ye tekrar değer atadık.böyle durumlarda c nin değeri değişmez, referans noktası değişir.
console.log(c);
