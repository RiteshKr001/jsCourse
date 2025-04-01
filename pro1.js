console.log("hello");

const accId = 1223222; // cannot be changed its not allowed
let accEmail = "353@gmail.com"; //can be changed
var accPass = "2345" // forget about var due to scope issue only const and let are being used
//prefer not to use var due to block scope and functional scope issue
accountCity = "delhi"
let accountState;

// console.table([accEmail, accId, accPass, accountState])

"use strict";  //treat all JS code as newer version

//code readability should be high

//DATATYPE

let name = "ritesh"
let age = 20
let isActive = true;

//Primitive data type

// num = 2^53
//bigint
//string -> ""
//boolean ->true/false
//null -> standalone value
//undefined -> 
//symbol 

console.log(typeof undefined); //undefined
console.log(typeof null); //object

//object

//conversion

let score = "44" // it will be converted successfully into no. but if scoere = "43jgj" then after conversion it will become NaN not a number. but typeof will be number
// if null then after conversion it will be 0
//if bool then 0 or 1.
let valInNo = Number(score)

//bool conversion Boolean
//if string empty = false else true;

//String 

//++++operation++++

let value = 3
let negVal = -value

//"1"+2 or 1 + "2"  == 12
// "1" + 2 +2 = 122
// 1+2+"3" = 33   so basically operation start from left to right and the datatye of first variable will decide the operation

//         Comparison
//while comparing make sure both datatype are same elsee op can be unpredictable sumtime
//"2" > 1 true

//null > 0 falde
// nul == 0 false
// null >= 0 true

// equality(==) and comparison operator work diff comparison firss convert null into 0 then check.

// undefined in each case false //avoid thse kind of comparison 

// === check datatype too

//     datatype summary

// based on how data is stored in memory they are divided into 

//primitive (call by value)-> string, num, bool, null, undef, symbol, bigint

//non-primitive(reference type) -> array, objects, function 
//all non primit ar type of object;

//js is dynamiccaly typed

const id = Symbol("123")
const accID = Symbol("123")

//they both are not same
// can add n after no to change it into biINT

//array
const arr = ["1", "gjj", "hgshj"];


//object they are in key value pair
let myObj = {   // type of object
    name: "ritesh",
    age: 43
}

const myFun = function(){    // typeof = function or object function
    console.log("my fun");
    
}


let fg = 58297027580258n //type of biint
// console.log(typeof fg);

//           stack and heap  

//primitive - stack(value) 

//non-prim - heap(reference) dynamic mem alloc