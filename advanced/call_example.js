var person = {
    firstName: "Colt",
    sahHi: function(){
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName

        },
        determineContext: function(){
            return this === person;
        },
    }
}
console.log("Sample 1")
console.log(person.sahHi())
console.log(person.determineContext())

console.log("Sample 2")
console.log(person.dog.sayHello())
console.log(person.dog.determineContext())

// Passing "this" value to sayHello
console.log("Sample 3")
console.log(person.dog.sayHello.call(person))
console.log(person.dog.determineContext.call(person))


