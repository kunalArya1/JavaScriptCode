
/*
const bank = 100;
bank = 250;
console.log(bank);

    -> we cannot do this because this primitive type.
 */


// -> but we can do this with refrance type

const user =["kunal","maa","papa","bhai"];

user[1] ="Kunal";
user.push("neha");

// console.log(user);

// user = [] ;   -> this will us error because you cannot reassign it.


//                  -> Now About Memory usages

/*
let bank = 250;
let myNewBank = bank;

console.log(bank , myNewBank);

myNewBank = 400;

console.log(bank ,myNewBank);

     -> it works perfectly because here we are copying data of bank and
        assigning to myNewBank that why when we are changing the value
        of myNewBank then bank is not changed

        -> we can say that here it "pass by value"


 */


/*
        -> we will see refrance type

const family = ["Maa","Papa","Bhai","Me"];

const newFamily = family;

console.log(newFamily);

// let add some member to newFamily
newFamily.push("Wife");
console.log(newFamily);

// but problem is here our family has also changed because it was not "pass by value"
// it is "pass by refrence".


// with object
const tweet = {
    username : "kunal",
    tweet: 21,
    reTwwet : 31,
}

const newTwwet = tweet;
newTwwet.tweet = 25;

console.log(tweet);

 */


/* forEach Method

const family = ["Maa","Papa","Me","Bro"];
family.forEach((value, index) => {
    console.log(index , value);
});

family.sort();
console.log(family);

family.push("Wife");
console.log("New Family Member");
console.log(family)

*/
// HOF - Higher Order Function
//      -> HOF is a function that takes another function as an argument.


function rep(fn){
    fn();
    fn();
    fn();
}

function sayHello(){
    console.log("Hello!");
}
rep(sayHello);

rep(() =>{
    console.log("Hello There!");
})

rep(() => {
    return sayHello;
});

