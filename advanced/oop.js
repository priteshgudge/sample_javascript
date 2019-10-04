Vehicle = function(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if (this.isRunning === true){
        return 'Honk';
    }
}

veh = new Vehicle('make','model','year')

veh.turnOn()
console.log(veh.honk())
veh.turnOff()
console.log(veh.honk())
