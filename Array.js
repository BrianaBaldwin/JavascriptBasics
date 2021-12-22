// let test111 = [];
// test111[0] = 1;
// test111[1] = 2;
// test111[2] = 3;
// test111[3] = 4;

// items.push(5,6,7); 
// console.log(items)

// for (let i = 0; i < items.length; i++){
//     console.log("item at the index ", i, items[i])
// }

let test111=[];

//add items one by one to items array
test111[0] = {name: "david"};  //computer will puts value for us in items array at line 91
test111[1] = true;
test111[2] = "three";
test111[3] = -4;
// items[99] = 52;

// array method push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// the pop() will remove item at the end of array
test111.push("item is pushed to back of the list", "two items added at a time");

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//The shift() method will remove item from the front
test111.unshift("first item", "second item");
console.log("items", test111);


let x = []; // x is a variable ; this is an empty array 
x[0] = 4;
x[1] = 5;
x[2] = 6;
x[3] = 7;

x.push(8,9,10);
x.unshift(1,2,3); // adding values to the beginning 
x.pop(); // removes the last value in the array 
x.shift(); // remove the first value in the array 
x.splice(0,1);// 0 represents starting index value ; 1 represents number of elements to be removed 
console.log(x);

let arrayList = [];

function pushValueIntoArrayFromBack(){
    let valueInInputFiled = document.getElementById("inputvalue").value;
    arrayList.push(valueInInputFiled);
    console.log("arrayList", arrayList);
}  

function pushValueIntoArrayFromFront() {
    let valueInInputFiled = document.getElementById("inputvalue").value;
    arrayList.unshift(valueInInputFiled);
    console.log("arrayList", arrayList);
}

// function contains step by step instructions - likes of code - which will be executed only when it is called
function addTwoNumber(){
    //onclick of button add two numbers
    //we are getting a string value - but we need number
    let firstNumber = document.getElementById("firstNumber1").value;  //we need to get value from input field with id #firstNumber
    //we are getting a string value - but we need number 
    let secondNumber =  document.getElementById("secondNumber1").value; //we need to get value from input field with id #secondNumber
    // we need to convert string to number using Number() - this is a built in function
    let sum =  Number(firstNumber) + Number(secondNumber); //we add two values

    //function overload - a function will do more than one activity - more than one function
    console.log("sum of the two numbers ", sum);
}


const array1 = [1, 2, 3, 4]; 

const array2 = array1.map(x => x * 3);//arrow function was passed in this line

console.log(array2);


const array3 = [20, 16, 32, 10];

const array4 = array3.map(x => x + 2); 

console.log(array4);