var colt = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;

    },
    sayHiTimeout: function(){
        setTimeout(function () {
            console.log("Hi "+ this.firstName) // This refers to the global object if used directly --> object that it is attached to is the window
        },1000)
    },
    addNumbers: function (a,b,c,d) {
        return this.firstName + " just calculated " + (a+b+c+d);

    },
    sayHiTimeoutCorrect: function(){
        setTimeout(function () {
            console.log("Hi "+ this.firstName)
        }.bind(this),1000)
    },
}


var elie = {
    firstName: "Elie"
}

var elieCalc = colt.addNumbers.bind(elie,1,2,3,4)
console.log(elieCalc())

var elieCalc2 = colt.addNumbers.bind(elie, 1, 2)
console.log(elieCalc2(3, 4))

// Part 2
colt.sayHiTimeout()
colt.sayHiTimeoutCorrect()




