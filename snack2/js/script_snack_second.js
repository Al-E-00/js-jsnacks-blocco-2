/* 
name - surname generator

-- FROM   a list of names and surnames
-> generate false list with fake names and surnames
*/



let names = ["Alessio", "Luca", "Roberto", "Andrea", "Maria", "Chiara"];
let surnames = ["Di Giovanni", "Mazzella", "Leica", "Rossi", "Feola", "Siviero"];
let casualNamesSurnames = [];

let toDoLoops = 0;

//if names length is higher than surnames take that length
if (names.length > surnames.length) {
    toDoLoops = names.length;
// else take surnames length
} else if (names.length <= surnames.length) {
    toDoLoops = surnames.length;
}

//correction (data taken dynamically)
for (let i = 1; i <= toDoLoops; i++) {
    let namesIndex = Math.floor(Math.random() * names.length);
    let surnamesIndex = Math.floor(Math.random() * surnames.length);

    // Print new " name  surname  " randomly generated

    casualNamesSurnames.push(names[namesIndex] + " " + surnames[surnamesIndex]);
}

console.log (casualNamesSurnames);


