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

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 1; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// IIFE for privacy

// (function() {
//     // Function Constructor
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     // Write the method on Question prototype property
//     // Prototype chain to not have to copy the method
//     // on all questions
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function(ans) {
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//         } else {
//             console.log('Wrong answer! Try again :)');
//         }
//     }

//     var q1 = new Question('Is JS the coolest programming language in the world?', ['Yes', 'No'], 0);

//     var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

//     var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

//     //Retrive random question
//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();

//     // Alert with text capabilities
//     var answer = parseInt(prompt('Please select the correct answer.'));

//     questions[n].checkAnswer(answer);
// })();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// IIFE for privacy

(function() {
    // Function Constructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Write the method on Question prototype property
    // Prototype chain to not have to copy the method
    // on all questions
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer! Try again :)');

            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('Type in \'exit\' to close prompt');
        console.log('--------------------------------')
    } 

    var q1 = new Question('Is JS the coolest programming language in the world?', ['Yes', 'No'], 0);

    var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        //Retrive random question
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        // Alert with text capabilities
        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        };

    }

    nextQuestion();

})();
