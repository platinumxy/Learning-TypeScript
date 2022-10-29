// create Data classes 
type Person2 = {
    name:string,
    age:number,

};


type PersonContructor2 = Person2 | {UID:number};

const bob2 : PersonContructor2 = {
    name:"Bob",
    age:10
    
}

console.log(bob2)
console.log(bob2.name)
console.log(bob2.age)
console.log(bob2.funFact)