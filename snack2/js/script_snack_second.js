/* 
name - surname generator

-- FROM   a list of names and surnames
-> generate false list with fake names and surnames
*/

let names = ["Alessio", "Luca", "Roberto", "Andrea", "Maria", "Chiara"];
let surnames = ["Di Giovanni", "Mazzella", "Leica", "Rossi", "Feola", "Siviero"];
let casualNamesSurnames = [];

for (let i = 1; i <= 6; i++) {
    let num = Math.floor(Math.random() * 6);
    let numSecond = Math.floor(Math.random() * 6);
    casualNamesSurnames.push([names[num], surnames[numSecond]]);
}

console.log (casualNamesSurnames);


