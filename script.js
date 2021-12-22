console.log("hello");

// let elementToChangeColor = document.getElementById("purple").style.color;

function changeColorToBlue(){
    document.getElementById("purple").style.color = "blue";
}

function changeColorToYellow(){
    document.getElementById("purple").style.color = "yellow";
}

function changeColorToPurple(){
    document.getElementById("purple").style.color = "purple";
}

function changeColorToGreen(){
    document.getElementById("purple").style.color = "green";
}


// let arr = [1, 2, 3, 4, 5, 6];
let fifthGradeStudents = ["alex", "david", "student5","student4","student6"];
let fifthGradestudent1 ="david";
let fifthGradestudent2 ="alex";
let fifthGrade = "testdata";
console.log("string element", fifthGrade.length);

console.log("Students in fifth grade", fifthGradeStudents.length);

console.log("Students in fifth grade", fifthGradeStudents);

console.log("Students in fifth grade", fifthGradeStudents[0]);

console.log("Students in fifth grade", fifthGradeStudents[1]);

console.log("Students in fifth grade", fifthGradeStudents[2]);

console.log("Students in fifth grade", fifthGradeStudents[3]);

console.log("Students in fifth grade", fifthGradeStudents[4]);

// inside object there will be key value pairs - key means firstname - value means "aneta"
let obj = {
    firstname: "Sherell",
    secondname: "Baldwin",
    age: 24,
    sex: "f"
}

let element = {
    style: {
        color: "blue"
    }
}
// console.log("obj", obj.firstname)
console.log("element.style.color is ", element.style.color);

let arr = ["apple", "banana", "grape", "pear", "strawberry"];
arr[5] = "orange"
console.log(arr)

let fruits = ["apple", "pineapple", "grapes", "orange", "new fruits"];

// fruits[fruits.length] = "updated fruit";

console.log("fruits", fruits);

// let fruits = ["apple", "pineapple", "grapes", "orange", "new fruits"];

// fruits[fruits.length] = "updated fruit";

console.log("fruits", fruits);
// i=2; i++ means i = 1+1 increase the value of i by 1
for(let i=0; i< fruits.length; i++){
    console.log("element in fruits arrary of index ", i , fruits[i]);
}

let items1 =[];
let obj1 = {};
let text = "Hello";
let number1 = 4;
let test = true; //true, false -  yes, no -  on,  off -  1, 0

//here you have to add items one by one in items array

// typeof

console.log("typeof", typeof test);

let items=[1,2,3,4];

//add items one by one to items array
console.log()

function showalert() {
    alert("helloworld")
}