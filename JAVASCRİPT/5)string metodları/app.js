let value;
const firstname = "murat";
const lastname = "coşkun";
const langs = "java,python,c++";

value = firstname + lastname;
value = firstname + " " + lastname;

value = "Murat";
value += "Coşkun";  // value = value + "coşkun" 

value = firstname.length;  // kelime uzunluğunu hesaplar.

value = firstname.concat(" ", lastname, " ", "caz"); // firstname + " " + .. (bu şekilde de yazılabiliyor. (concat = birleştirmek) )

value = firstname.toLowerCase();  // kelimenin tüm harflerini küçük harfe dönüştürür.
value = firstname.toUpperCase(); // kelimenin tüm harflerini büyük harfe dönüştürür.

value = firstname[4];  // 4. indeksi gösterir. (0=m 1=u 2=r 3=a 4=t şeklinde)
value = firstname[firstname.length - 2]; // kelime uzunluğundan yine istediğimiz indekse ulaşabiliyoruz. (-2 yazdığımız için sondan ikinci harfi "a" harfini verir. )

//indexOf
value = firstname.indexOf("r");  // r harfini vererek indeksini bulmasını sağlıyoruz.

//charAt
value = firstname.charAt(4); // 4. charı (karakteri) verecek.
value = firstname.charAt(firstname.length - 2);

//split
value = langs.split(","); // virgüle göre parçalayacak.

//replace
value = langs.replace("python", "css"); // python kelimesini css ile değiştirdik. (replace=değiştirmek)

//includes
value = langs.includes("java"); // boolean bir değerdir. kelimeyi aratırıyoruz eğer varsa true yoksa false şeklinde dönüt veriyor.
value = langs.includes("c#");


console.log(value);