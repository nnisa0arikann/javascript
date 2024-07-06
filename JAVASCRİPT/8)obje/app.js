let value;
const programmer = {                  // obje {} süslü parantez içerisine yazılır. 
    name: "nisa",
    age: 21,
    email: "nisa.arikan06@gmail.com",
    langs: ["java", "js", "c++"],
    adress: {                          // obje içerisine obje oluşturduk.
        city: "ankara",
        street: "yenimahalle"
    },
    work: function () {
        console.log("programcı çalışıyor");
    }
}

value = programmer;
value = programmer.email;        // email i görüntüledik. genel kullanım şekli budur.
value = programmer["email"];      // bu şekilde de görüntüleyebiliriz.
value = programmer.langs;
value = programmer.adress.city;    // city i görüntülemek için önce adress objesini girdik çünkü onun başlığı altında bir obje. 

programmer.work();                // fonksiyonu çalıştırdık.

const programmers = [               // dizi içerisinde obje kullanımı
    { name: "nisa", age: 21 },
    { name: "melih", age: 20 }
];

value = programmers[0];             // diziden sıfırıncı indeksi görüntüledik.
value = programmers[0].age;         // sıfırıncı indeksten age i görüntüledik.


console.log(value);