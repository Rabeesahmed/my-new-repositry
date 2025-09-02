
var age = +prompt("Enter your age");
if(age<13){
    console.log("Child");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else{
    console.log("Adult");
}

/Question 02:/
var num = +prompt("Enter a Number");
if(num/2 && num/3){
    console.log("Divisible by both");
}else{
    console.log("Not divisible by both");
}

/Question 03:/
var pass = prompt("Enter your password");
if(pass === "saylani123"){
    console.log("Access Granted");
}else{
    console.log("Access Denied");
}

/Question 04:/
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
if(num1>num2){
    console.log(num1);
}else{
    console.log(num2);
}

/Question 05:/
var colors = ["Red", "Green", "Blue", "Black", "White"];
alert(colors[0] + colors[4]);

/Question 06:/
var fruits = ["Apple", "Mango", "Banana"];
fruits.push("Grapes");
console.log(fruits);

/Question 07:/
var cities = ["Karachi", "Lahore", "Multan", "Peshawar"];
cities.shift();
console.log(cities);

/Question 08:/
var num = [10, 20, 30, 40, 50];
num.splice(2,1);
console.log(num);

/Question 09:/
var num1 = [100, 200, 300, 400, 500];
var num2 = num1.slice(1,4);
console.log(num2);

/Question 10:/
var sub1 = +prompt("Enter your first subject's marks");
var sub2 = +prompt("Enter your second subject's marks");
var sub3 = +prompt("Enter your third subject's marks");
var subjects = [sub1, sub2, sub3];
var total = "Total = " + sub1 + sub2 + sub3;
console.log(total);
var avg = "Average = " + total/3;
console.log(avg);


var month = +prompt("Enter month number");
if(month<=3){
    console.log("Autumn");
}else if(month>3 && month<=6){
    console.log("Summer");
}else if(month>6 && month<=9){
    console.log("Spring");
}else if(month>9 && month<=12){
    console.log("Winter");
}

/Question 12:/
for(i=1; i<=10; i++){
    console.log(i*2);
}

/Question 13:/
var names = ["Ali", "Sara", "Ahmed", "Ayesha"];
for(i=0; i < names.length; i++){
    console.log(names[i]);
}

/Question 14:/
var num = +prompt("Enter a number for Multiplication table");
for(i=1; 1<=10; i++){
    console.log(num + " x ",i , " = ", num*i);
}

/Question 15:/
var nums = [2, 4, 6, 8,10];
var sum = 0;
for(i=0; i<nums.length; i++){
    sum += nums[i];
}
console.log(sum);

/Question 16:/
var entername = prompt("Enter your name");
if(entername === "Alice" || entername === "Bob"){
    console.log("Welcome!");
}else{
    console.log("You are not authorized");
}

/Question 17:/
var enternum = +prompt("Enter a number to check");
if(enternum > 0 ){
    if(enternum % 2 === 0){
        console.log("Positive Even");
    }
    if(enternum % 2 === 1){
        console.log("Positive Odd")
    }
}else{
    console.log("Negative Number");
}

/Question 18:/
var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
fruits.splice(2, 0, "Mango");
console.log(fruits);
