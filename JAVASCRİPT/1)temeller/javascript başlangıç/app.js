// değişken oluşturma (var)
var a = 10;
var b = 20;
var c = 30;
console.log(a, b, c);


// 2 tip veri tipi vardır.

// 1) PRİMİTİVE (ilkel) : number,string,boolean,null,undefined..
//number
var a = 10;
console.log(typeof a);

//string
var name = "mustafa";
console.log(name);
console.log(typeof name);

//boolean
var a = false;
console.log(a);

// null
var a = null;
console.log(a);
console.log(typeof a);

// 2)REFERENCE :array,function..
//array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]); //sıfırıncı değer yani ilk sayı:1

//kendi değişkenimizi oluşturalım
var person = {
    name: "mustafa",
    age: 25
}
console.log(person);

//function
var merhaba = function () {
    console.log("merhaba");
}
console.log(merhaba);


// buna dikkat et!! (a değerini değiştirmene rağmen b etkilenmiyor ilk aldığı değerde kalıyor.)
var a = 10;
var b = a;
console.log(a, b);
var a = 20;
console.log(a, b);







