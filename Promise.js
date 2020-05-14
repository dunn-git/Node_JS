let person = {
    "name" : "Brave",
    "age" : 26
}



console.log("Start......!");

//function oop () {
//    //console.log("example");
//}
//
//function hello(word) {
//    setTimeout(() => console.log("First CallBack"),1000);
//    //console.log("Hahahha");
//    
//}
//
//hello("hdg");
//
//function another(email, callback) {
//    setTimeout(()=>console.log("hoochie"),5000);
//    
//}
//
//another("du", oop());

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Got the User");
    resolve({user : "Rohith"});
    },2200);
});

//promise.then(() => console.log("Durga"));
promise.then((user) => {
    console.log(user) }
    );


console.log("End.......!");