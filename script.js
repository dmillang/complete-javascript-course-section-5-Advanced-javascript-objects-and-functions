// Function Constructors

// var Person = function(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
// }

// Person.prototype.calcAge = function() {
//     console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person ('John', 1990, 'teacher');
// var jane = new Person ('Jane', 1996, 'designer');
// var mark = new Person ('Mark', 1943, 'retired');

// john.calcAge();
// jane.calcAge();
// mark.calcAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Playing with constructor functions and instances

// var Automobile = function(model,wheels,color,yearMade,gasConsumption) {
//     this.model = model;
//     this.wheels = wheels,
//     this.color = color,
//     this.yearMade = yearMade,
//     this.gasConsumption = gasConsumption
// }

// Automobile.prototype.doesPollute = function() {
//     if (this.yearMade < 2015 && this.gasConsumption >= 10) {
//         console.log('This ' + this.color + ' ' + this.model + ' does polute.');
//     } else {
//         console.log(this.model + ' does NOT polute.');
//     };
// };

// var opel = new Automobile('Opel', 4, 'red', 2008, 10);
// var seat = new Automobile('Seat', 4, 'blue', 2017, 12);
// var suzuki = new Automobile('Suzuki', 'green', 2002, 6);

// opel.doesPollute();
// seat.doesPollute();
// suzuki.doesPollute();



// Creating Objects: Object.create
// var personProto = {
//     calcAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     },
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.lastName = 'Doe';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// john.calcAge();

// var jane = Object.create(personProto,
// {
//     name: { value: 'Jane'},
//     lastName: { value: 'Smith'},
//     yearOfBirth: { value: 1985},
//     job: { value: 'doctor'},
// });



// Primitives vs. Objects

// Primitives
// Variables of a primitve hold the data DOES NOT reference it
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
// Non-primitives (aka Objects) DO reference their data
obj1 = {
    name: 'John',
    year: 1990
};

obj2 = obj1;
obj1.year = 1985;
console.log(obj2.year);

// Functions
var age = 27;
var obj = {
    name: 'Mike',
    city: 'Lesbon',
};

function change(a, b) {
    a = 30,
    b.city = 'London'
};

change(a,obj);
console.log(age);
console.log(obj.city);