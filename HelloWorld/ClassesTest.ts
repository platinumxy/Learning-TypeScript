// create Data classes 
type Person = {
    name:string,
    age:number,

    //Note ? makes it non mandatory 
    funFact?:string
};


type PersonContructor = Person | {UID:number};

const bob : PersonContructor = {
    name:"Bob",
    age:10
    
}

const Charles : PersonContructor = {
    name : "Charles",
    age:10,
    funFact : "He is the king of england"
}

console.log(bob)
console.log(bob.name)
console.log(bob.age)
console.log(bob.funFact)