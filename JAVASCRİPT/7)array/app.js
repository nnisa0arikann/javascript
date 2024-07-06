let value;
const numbers = [1, 25, 400, 5, 50];
const langs = ["java", "c++", "js"];
const a = [22, "merhaba", null, undefined, 30];

// uzunluk
value = numbers.length;
value = a[a.length - 1];    //sondan bir önceki değeri verir.

// indeks
value = numbers[3];

// herhangi bir indeksteki değeri değiştirme
numbers[3] = 62;         // 3. indekste ki değer (5) , 62 oldu.
value = numbers;

// index of
value = numbers.indexOf(400);    //400 sayısının kaçıncı indeks olduğunu bulur.

// array in sonuna değer ekleme (PUSH)
numbers.push(2000);        // dizinin Sonuna 2000 ekledik.
numbers.unshift(73);       // dizinin Başına 73 ekledik.

// sonundan değer atma (pop)
numbers.pop();            // dizinin sonundaki değeri attık.
numbers.shift();          // dizinin başındaki değeri attık.

// splice : belli bir indeksten belli bir indekse kadar atmamızı sağlayacak.
numbers.splice(0, 2);      // 0 dan 3 e kadar olan indeksleri attı.

// reverse : diziyi tersine çeviriyor. (reverse=ters)
numbers.reverse();

// sort : sayıları sıralıyor ama ilk rakamına göre!
numbers.sort();

numbers.sort(function (x, y) {      // küçükten büyüğe sıralama.
    return x - y
});
numbers.sort(function (x, y) {      // büyükten küçüğe sıralama.
    return y - x
});


value = numbers;
console.log(value);