let arr = [
    {
    
        "Name" : "Cindy",
        "City" : "AZ",
        "Slogan" : {
            "one": "Be Bold",
            "two": "Be Strong"}
    
    },
    
    {
        
        "Name" : "Dosa",
        "City" : "QW",
        "Slogan" : {
            "one": "Hmmmm",
            "two": "Boolllll"}
    }
]
    


console.log(arr);
console.log(arr[0].Name);
console.log(arr[1].Slogan.one);


arr.forEach(function (arr) {
    console.log(arr.Name);
});

const arrs = arr.map(function (arr) {
    return arr.Name;
});
console.log(arrs);


const arrsFilter = arr.filter(function (arr) {
    return arr.Name === "Cindy";
}).map(function (arr){
    return arr.City;
});
console.log(arrsFilter);



let x = 10;
let dig = x = 10 ? "Dog" : "Cat" ;
console.log(dig);


function addNum(num1, num2) {
    console.log(num1+num2);
    return num1-num2;
}

addNum(5,2);



let addNum = (num1, num2) => {
    console.log(num1+num2);
    return num1+num2;
}

console.log(addNum(5,2));


let addNums = (num1, num2) => console.log(num1+num2);

addNums(5,2);



let addNums = (num1, num2) => num1+num2;

console.log(addNums(5,2));



(num1, num2) => console.log(num1+num2);

addNums(5,2);




/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
    //this.getBirthYear = function () {
    //    return this.dob.getFullYear();
    //}
    //this.getFullName = function() {
    //    //return this.firstName+" "+this.lastName;
    //    return `${this.firstName} ${this.lastName}`;
    //}

//ES05 (Before Class Introduction)
    //Person.prototype.getBirthYear = function () {
    //    return this.dob.getFullYear();
    //}
    //Person.prototype.getFullName = function() {
    //    //return this.firstName+" "+this.lastName;
    //    return `${this.firstName} ${this.lastName}`;
    //}
    
};
*/


class Person {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}

getBirthYear() {
   return this.dob.getFullYear();

}

getFullName() {
      return `${this.firstName} ${this.lastName}`;

}

}


let person = new Person("Holy", "Grave", "01-20-1994");

console.log(person);
console.log(person.firstName);
console.log(person.dob);
console.log(person.dob.getFullYear());

console.log(person.getBirthYear());
console.log(person.getFullName());



