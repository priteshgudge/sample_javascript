
var colt = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;

    },
    addNumbers: function (a,b,c,d) {
        return this.firstName + " just calculated " + (a+b+c+d);
        
    }
}


var elie = {
    firstName: "Elie"
}

console.log(colt.sayHi())
console.log(colt.sayHi.apply(elie))

console.log(colt.addNumbers(1,2,3,4))

console.log(colt.addNumbers.call(elie, 1, 2, 3, 4))

console.log(colt.addNumbers.apply(elie,[ 1, 2, 3, 4]))
