const name = "murat coşkun";
const department = "bilişim";
const salary = 4000;

const a = "isim: " + name + "\n" + "departman: " + department + "\n" + "maaş: " + salary;     //   \n : alt satıra geçirir.

// const a = ` isim: ${name} \n departman: ${department} \n maaş: ${salary}`  //  `` bu backtick(ters tırnak) sembolüdür. Şablon Literallerini (şablon dizileri) daha kolay oluşturmak için kullanılır.

const html = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + department + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>";

// const html = `     
// <ul>
// <li>${name}</li>
// <li>${department}</li>
// <li>${salary}</li>
// </ul>`

document.body.innerHTML = html;
console.log(a);