let mq1 = {picture: 'bear.png', page: "1/6",choices: ['dog','cat','bear'],answer:'bear'};
let mq2 = {picture: 'dog.png', page: "2/6",choices: ['cat','fox','dog'],answer:'dog'};
let mq3 = {picture: 'fox.png', page: "3/6",choices: ['moose','mouse','fox'],answer:'fox'};
let mq4 = {picture: 'cat.png', page: "4/6",choices: ['fox','dog','cat'],answer:'cat'};
let mq5 = {picture: 'moose.png', page: "5/6",choices: ['mouse','mink','moose'],answer:'moose'};
let mq6 = {picture: 'mouse.png', page: "6/6",choices: ['moose','lion','mouse'],answer:'mouse'};

let bq1 = {picture: 'owl.png', page: "1/6",choices: ["eagle","owl","penguin"],answer:'owl'};
let bq2 = {picture: 'eagle.png', page: "2/6",choices: ["penguin","eagle","owl"],answer:'eagle'};
let bq3 = {picture: 'duck.png', page: "3/6",choices: ["owl","duck","eagle"],answer:'duck'};
let bq4 = {picture: 'penguin.png', page: "4/6",choices: ["eagle","penguin","owl"],answer:'penguin'};
let bq5 = {picture: 'quail.png', page: "5/6",choices: ["owl","quail","duck"],answer:'quail'};
let bq6 = {picture: 'chicken.png', page: "6/6",choices: ["penguin","chicken","eagle"],answer:'chicken'};

let fq1 = {picture: 'daffodil.png', page: "1/6",choices: ["daffodil","tulip","sunflower"],answer:'daffodil'};
let fq2 = {picture: 'rose.png', page: "2/6",choices: ["rose","waterlily","daisy"],answer:'rose'};
let fq3 = {picture: 'tulip.png', page: "3/6",choices: ["tulip","sunflower","rose"],answer:'tulip'};
let fq4 = {picture: 'daisy.jpg', page: "4/6",choices: ["daisy","tulip","waterlily"],answer:'daisy'};
let fq5 = {picture: 'sunflower.png', page: "5/6",choices: ["sunflower","daisy","rose"],answer:'sunflower'};
let fq6 = {picture: 'waterlily.png', page: "6/6",choices: ["waterlily","tulip","daisy"],answer:'waterlily'};

let mammal = {name: 'mammal', id: 1, picture: 'bear.png', questions:[mq1,mq2,mq3,mq4,mq5,mq6]};
let bird = {name: 'bird', id: 2, picture: 'bird.png', questions:[bq1,bq2,bq3,bq4,bq5,bq6]};
let flower = {name: 'flower', id: 3, picture: 'daffodil.png', questions:[fq1,fq2,fq3,fq4,fq5,fq6]};
let quizzes = [mammal,bird,flower];

let scores = [];

module.exports.scores = scores;
module.exports.quizzes = quizzes;
