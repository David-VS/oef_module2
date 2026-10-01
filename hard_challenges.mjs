import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*Schrijf een script dat 5 getallen inleest. 
Toon na het inlezen wat het hoogste getal, 
het laagste getal en het gemiddelde is. */

let invoer = parseFloat( await userInput.question("geef een getal in"));
let subtotaal = invoer;
let hoogste = invoer;
let laagste = invoer; 


invoer = parseFloat( await userInput.question("geef een tweede getal in"));
subtotaal += invoer;
if(invoer > hoogste){
    hoogste = invoer;
}
if(invoer < laagste){
    laagste = invoer
}

invoer = parseFloat( await userInput.question("geef een derde getal in"));
subtotaal += invoer;
if(invoer > hoogste){
    hoogste = invoer;
}
if(invoer < laagste){
    laagste = invoer
}

invoer = parseFloat( await userInput.question("geef een vierde getal in"));
subtotaal += invoer;
if(invoer > hoogste){
    hoogste = invoer;
}
if(invoer < laagste){
    laagste = invoer
}

invoer = parseFloat( await userInput.question("geef een vijfde getal in"));
subtotaal += invoer;
if(invoer > hoogste){
    hoogste = invoer;
}
if(invoer < laagste){
    laagste = invoer
}
console.log("gemiddelde is " + subtotaal/5);
console.log("de hoogste waarde was " + hoogste);
console.log("de laagste waarde was " + laagste);

/*Schrijf een script dat een jaartal inleest en als output het aantal dagen in februari weergeeft.
 */
let jaar = parseFloat( await userInput.question('Geef een jaartal in'))
let dagenFeb = 28;

if(jaar % 400 == 0){
    console.log('sowieso een schrikkeljaar')
    dagenFeb = 29
}else if(jaar % 100 == 0){
    console.log('ah nee toch niet')
}else if(jaar % 4 == 0){
    console.log('schrikkeljaar')
    dagenFeb = 29
}else{
    console.log('of toch niet')
}
console.log('in '+jaar+' telt februari '+dagenFeb)

process.exit()