// Function Constructors

var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1996, 'designer');
var mark = new Person ('Mark', 1943, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

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

