//this is my first java script project
console.log('hello world');

//variables
let name ='chamindu';
console.log(name);
// cannot be a reserved keyword
// shoud be a meaning full
// cannot a start with a nummber (1name)
//cannot  contain a space or hyphen(-)
// are case - sensitive
let firstName ='cj',lastName='jayahansa';
console.log(firstName,lastName);

//consetnt variables
const eage=13;
console.log(eage); 

// var variables
var name34='j34';
console.log(name34);

//primitive type
let name2 ='cj2';
let age=40;
let isApproved=false;
let firstName2=undefined;
let color=null;
//change data type data moddels depend 

let person={
    name3: 'cj4',
    age:40,
};
//dot natation
person.name3='cj5';
console.log(person.name3);

//bracket notation
person['name3']='mary';
console.log(person.name3);
//
let selection='name3';
person[selection]='cj6';
console.log(person.name3);

//array
let selectedcolors = ['red','blue'];
console.log(selectedcolors);
console.log(selectedcolors[0]);
selectedcolors[2]='green'
selectedcolors[2]=1;
console.log(selectedcolors);
console.log(selectedcolors.length);


//function
function greet (name,lastname){
    console.log('hello '+name+' '+lastname)
}
greet ('john','smith');
greet ('mary');

//calculating value
function sqaure(number){
    return number*number;
}
console.log(sqaure(2));