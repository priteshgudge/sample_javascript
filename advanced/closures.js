function count() {
    var counter = 0;
    return function(){
        return ++counter;
    }
}
countFunc = count()

console.log(countFunc())
console.log(countFunc())
console.log(countFunc())

function classRoom(){
    var instructors = ['colt','elie'];
    return {
        getInstructors: function () {
            return instructors;
        },
        addInstructor: function (instructor) {
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom()
console.log(course1.getInstructors())
console.log(course1.addInstructor('paul'))
console.log(course1.getInstructors())

course2  = classRoom()
console.log(course2.getInstructors())
