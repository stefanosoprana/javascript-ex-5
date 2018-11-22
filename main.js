// Oggetti
// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

// PUNTO 1

var studenti = {
  nome: 'Stefano',
  cognome: 'Soprana',
  età: 21,
}

for (var k in studenti) {
  console.log(studenti[k]);
  document.writeln(studenti[k])
}

// PUNTO 2

// var studenti1 = [
//   {
//     nome: 'Stefano',
//     cognome: 'Soprana',
//     età: 21,
//   },
//   {
//     nome: 'Luca',
//     cognome: 'Bianchi',
//     età: 22,
//   },
//   {
//     nome: 'Paolo',
//     cognome: 'Esposito',
//     età: 19,
//   },
// ];
//
// for (var i = 0; i < studenti1.length; i++) {
//   console.log(studenti1[i].nome + ' ' + studenti1[i].cognome);
//   document.writeln(studenti1[i].nome + ' ' + studenti1[i].cognome + '<br>');
//
// }

// PUNTO 3

// var studenti2 = [
//   {
//     nome: 'Stefano',
//     cognome: 'Soprana',
//     età: 21,
//   },
//   {
//     nome: 'Luca',
//     cognome: 'Bianchi',
//     età: 22,
//   },
//   {
//     nome: 'Paolo',
//     cognome: 'Esposito',
//     età: 19,
//   },
// ];
//
// var rischiestaNome = prompt('inserisci un nome')
// var rischiestaCognome = prompt('inserisci un cognome')
// var rischiestaetà = parseInt(prompt('inserisci un età'))
//
//
// studenti2.push(
//
//   {
//   nome: rischiestaNome,
//   cognome: rischiestaCognome,
//   età: rischiestaetà
//   },
//
// );
//
//
// for (var i = 0; i < studenti2.length; i++) {
//   console.log(studenti2[i].nome + ' ' + studenti2[i].cognome + ' ' + studenti2[i].età);
//   document.writeln(studenti2[i].nome + ' ' + studenti2[i].cognome + ' ' + studenti2[i].età + '<br>');
// }
