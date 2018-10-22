//OOP Defined
//Object oriented programing
function House(bedrooms,bathrooms,numsSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numsSqft;
}
let firstHouse = new House(2,2,1000)//does this work?
firstHouse; // undefined... guess not!


function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " " + " age " + this.age + " just barked!");
    }
}

let rusty = new Dog('Rusty', 3)
let fido = new Dog('Fido', 1)

rusty.bark();
fido.bark();


function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //we can also set properties on the keyword this
    // that are preset values
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    //using call
    Car.call(this, make, model, year)
    // using this to specify number of wheels for motor cycle
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    // using apply
    Car.apply(this, [make,model,year]);
    this.numWheels = 2;

}
function Motorcycle(make,model,year){
    //even better using apply with arguments
    Car.apply(this, arguments);// arguments javascript key word // calling (make,model,year)
    this.numWheels = 2;
}


// this is the constructor function
function Person(name){
    this.name = name;
}

//this is an object created fromt the Person Constructor

let elie = new Person("Elie");
let colt = new Person("Colt")

// since we used the new keyword, we have established 
// a link between the object and the prototype property 
// we can acces that using __proto__ 

elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// The person.prototype object alos has a property
// called constructor which points back to the function

Person.prototype.constructor === Person; //true

Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to access properties on the prototype??
// __proto__!