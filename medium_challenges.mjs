import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/**
 * M1: Songtitels
Maak een keuzemenu met de keuze tussen 4 verschillende artiesten. 
Lees daarna de keuze in van de gebruiker en toon een songtitel van deze artist. 
Een voorbeeld hiervan:
 */
console.log("Kies een artiest:\n1. Red Hot Chili Peppers\n2. AC/DC");
let invoer = await userInput.question("keuze");

switch(invoer){
    case 1: console.log("Californication");
        break;
    case 2: console.log("Back in black");
        break;
}

//oplossing 2
if(invoer == "1"){
    console.log("Californication");
}else if(invoer == "2"){
    console.log("Back in black");
}




/*
Vraag twee getallen aan de gebruiker. 
Vraag vervolgens aan de gebruiker of hij deze wilt optellen, aftrekken, vermenigvuldigen of delen.
 */

let getal1 = parseFloat( await userInput.question("Geef een eerste getal"));
let getal2 = parseFloat( await userInput.question("Geef een tweede getal"));
let operator = await userInput.question("Kies een bewerking +, -, *, /");

switch(operator){
    case '+':console.log(getal1 + getal2);
        break;
    case '-':console.log(getal1 - getal2);
        break;
    case '*':console.log(getal1 * getal2);
        break;
    case '/':console.log(getal1 / getal2);
        break;
    default:console.log("wrong button");
}

/**
 * Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. 
 * Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. 
 * De vragen mag je zelf kiezen.
 */

let score = 0;
let antwoord = "";
//vraag 1
antwoord = await userInput.question('Vraag 1: Wat is de hoofdstad van Frankrijk?');
if(antwoord == 'Parijs'){
    console.log('correct!')
    score++;
}else{
    console.log('fout')
}
antwoord = await userInput.question('Hoeveel planeten zijn er in ons zonnestelsel?');
if(antwoord == '8'){
    console.log('correct!')
    score++;
}else{
    console.log('fout')
}
antwoord = await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld?');
if(antwoord == 'Blauwe Vinvis'){
    console.log('correct!')
    score++;
}else{
    console.log('fout')
}
antwoord = await userInput.question('Vraag 4: Wie schreef het toneelstuk \'Romeo en Julia\'?');
if(antwoord == 'Shakespeare'){
    console.log('correct!')
    score++;
}else{
    console.log('fout')
}
antwoord = await userInput.question('Hoeveel poten heeft een spin?');
if(antwoord == '8'){
    console.log('correct!')
    score++;
}else{
    console.log('fout')
}

console.log('Je behaalde ' + score + ' op 5!');

process.exit();