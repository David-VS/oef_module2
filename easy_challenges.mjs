import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
Vraag een getal aan de gebruiker. 
Controleer of dit getal even of oneven is (met behulp van de restoperator %). 
Print even of oneven af naar de gebruiker.
*/
let invoer = parseFloat( await userInput.question('Geef een getal in'));

if(invoer % 2 == 0){
    console.log('Dit getal is even');
}else{
    console.log('Dit getal is oneven');
}

/*
Maak 2 variabelen aan: minimum en maximum. Ken een getal toe aan deze variabelen.

Vraag een getal aan de gebruiker. Controleer of dit getal tussen minimum en maximum ligt.
 */
invoer = parseFloat( await userInput.question('Geef een getal in'));
maximum = parseFloat( await userInput.question('Geef een maximumwaarde in'));
minimum = parseFloat( await userInput.question('Geef een minimumwaarde in'));

//uit luiheid heb ik hier een template literal gebruikt, dit is niet met een gewone single quote maar backtick
if(invoer > minimum && invoer < maximum){
    console.log(`je getal ${invoer} ligt tussen ${minimum} en ${maximum}`);
}else{
    console.log(`je getal ${invoer} ligt helaas niet tussen ${minimum} en ${maximum}`);
}


/*
Gebruik een switch/case om te controleren hoeveel dagen de variabele maand heeft. 
*/

let maand = await userInput.question('geef een maand in');
let dagen = 0;

switch(maand){
    case "januari":
    case "maart":
    case "mei":
    case "juli":
    case "augustus":
    case "oktober":
    case "december":dagen = 31;
        break;
    case "april":
    case "juni":
    case "september":
    case "november":dagen = 30;
        break;
    case "februari":dagen = 28;
        break;
    default: dagen = 0;
}
console.log(dagen);

process.exit();