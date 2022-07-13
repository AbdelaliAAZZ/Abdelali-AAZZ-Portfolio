let name= ['ali','adam','taha'];
let i;
for(i=0;i<3;i++){
    console.log(name[i]);
}
window.prompt();
for(i=0;i<5;i++){
    window.prompt();
}
let nam = 'abdelali ';
console.log(nam.repeat(4));
let namm = 'abdelali ';
console.log(namm.length);
let se= 'My name is botato';
console.log(se.slice(0,3));
let names =  ['ali','adam','taha'];
names.splice(0,2,'gamal','mona');
console.log(names);
let exemple = ['ali','adam','taha','gamal','oussama'];
console.log(exemple.reverse());
console.log(exemple.sort());
let num = prompt('saisir un nombre : ')
  
if(num > 0 ){
    console.log(`${num} est un nombre positif`);
}
else if(num < 0){
    console.log(`${num} est un nombre negatif`);
}
else {
    console.log(`${num} est un nombre null`);
}

let result = prompt('What is your result ?');
if(result >= 90)
{
    document.write('excellent');
}
else if(result >= 80){
    document.write('very Good')
}
else if(result >= 70)
{
    document.write('Good');
}
else if(result >= 50)
{
    document.write('acceptable');
}
else 
{
    document.write('Faild');
}