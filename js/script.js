
/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while */

const  listaSpesa = ["mela","melone","pesca","pera","banana","arancia"];
console.log(listaSpesa);
const listaSpesaHtml = document.getElementById("listaspesa");
console.log(listaSpesaHtml);

let i = 0 ; 
let messageLi = "";
 while (i<listaSpesa.length){
    messageLi = `<li>${listaSpesa[i]}</li>`;
    console.log(messageLi);
    i++;
    listaSpesaHtml.innerHTML += messageLi;
 }

 