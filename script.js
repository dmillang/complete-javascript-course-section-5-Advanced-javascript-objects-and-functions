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

// // Primitives
// // Variables of a primitve hold the data DOES NOT reference it
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// // Objects
// // Non-primitives (aka Objects) DO reference their data
// obj1 = {
//     name: 'John',
//     year: 1990
// };

// obj2 = obj1;
// obj1.year = 1985;
// console.log(obj2.year);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Mike',
//     city: 'Lesbon',
// };

// function change(a, b) {
//     a = 30,
//     b.city = 'London'
// };

// change(a,obj);
// console.log(age);
// console.log(obj.city);



// First Class Functions: Passing Functions as Arguments

// var years = [1990, 1972, 1954, 2003, 2010];

// var calcArr = function (arr, fn) {
//     arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// var ages = calcArr(years, calcAge);
// console.log(ages);

// var fullAges = calcArr(ages, isFullAge);
// console.log(fullAges);

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var maxHeartRates = calcArr(ages, maxHeartRate);
// console.log(maxHeartRates);



// First Class Functions: Functions Returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' can you explain what UX is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach ' + name + "?");
//         }
//     } else {
//         return function(name) {
//             console.log(name + ' what do you do for a living?');
//         }
//     }
// }

// var designerQuestion = interviewQuestion('designer');
// var teacherQuestion = interviewQuestion('teacher');

// var john = {
//     name: 'John',
//     lastName: 'Doe'
// }

// var jane = {
//     name: 'Jane',
//     lastName: 'Smith'
// }

// var mike = {
//     name: 'Mike',
//     lastName: 'Dune'
// }

// designerQuestion(jane.name);
// teacherQuestion(john.name);

// // Another solution: call the two functions at the same time
// interviewQuestion('unknown')(mike.name);
// interviewQuestion('designer')('Joanne');



// Immediately Invoked Function Expressions (IIFE)

// function game() {
//     var score = (Math.random() * 10);
//     console.log(score >= 5);
// }

// game();

// IIFE
// (function() {
//     var score = (Math.random() * 10);
//     console.log(score >= 5); 
// })();

// (function(goodLuck) {
//     var score = (Math.random() * 10);
//     console.log(score >= 5 - goodLuck); 
// })(5);



// Closures

// function retirement(ageOfRetirement) {
//     var a = ' years until retirement.';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((ageOfRetirement - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//     var a = ' can you explain what UX is?';
//     var b = 'What subject do you teach ';
//     var c = ' what do you do for a living?';
//     return function(name) {
//         if (job === 'designer') {
//                 console.log(name + a);
//         } else if (job === 'teacher') {
//                 console.log(b + name + "?");
//         } else {
//                 console.log(name + c);
//         }
//     }
// }

// var designer = interviewQuestion('designer');
// var teacher = interviewQuestion('teacher');
// var unknown = interviewQuestion('unknown');

// designer('Jane');
// teacher('Mike');
// unknown('John');

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' can you explain what UX is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach ' + name + "?");
//         }
//     } else {
//         return function(name) {
//             console.log(name + ' what do you do for a living?');
//         }
//     }
// }



// Bind, Call and Apply

// var john = {
//     name: 'John',
//     lastName: 'Doe',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style,timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// };

// john.presentation('friendly','morning');

// john.presentation('formal','night');

// var emily = {
//     name: 'Emily',
//     age: 48,
//     job: 'librarian'
// };

// Call
// john.presentation.call(emily,'formal','evening');

// Apply
// this won't work because the method is not expecting an array value
// john.presentation.apply(emily, ['friendly','afternoon']);

// Bind (returns a function)
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily,'formal');
// emilyFormal('evening');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 1; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);