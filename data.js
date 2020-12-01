let mq1 = {picture: 'bear.png', page: "1/6",choices: ['c1','c2','c3'],answer:'c1'};
let mq2 = {picture: 'dog.png', page: "2/6",choices: ['c1','c2','c3'],answer:'c1'};
let mq3 = {picture: 'fox.png', page: "3/6",choices: ['c1','c2','c3'],answer:'c1'};
let mq4 = {picture: 'cat.png', page: "4/6",choices: ['c1','c2','c3'],answer:'c1'};
let mq5 = {picture: 'moose.png', page: "5/6",choices: ['c1','c2','c3'],answer:'c1'};
let mq6 = {picture: 'mouse.png', page: "6/6",choices: ['c1','c2','c3'],answer:'c1'};

let bq1 = {picture: 'owl.png', page: "1/6",choices: ['c1','c2','c3'],answer:'c1'};
let bq2 = {picture: 'eagle.png', page: "2/6",choices: ['c1','c2','c3'],answer:'c1'};
let bq3 = {picture: 'duck.png', page: "3/6",choices: ['c1','c2','c3'],answer:'c1'};
let bq4 = {picture: 'penguin.png', page: "4/6",choices: ['c1','c2','c3'],answer:'c1'};
let bq5 = {picture: 'quail.png', page: "5/6",choices: ['c1','c2','c3'],answer:'c1'};
let bq6 = {picture: 'chicken.png', page: "6/6",choices: ['c1','c2','c3'],answer:'c1'};

let fq1 = {picture: 'daffodil.png', page: "1/6",choices: ['c1','c2','c3'],answer:'c1'};
let fq2 = {picture: 'rose.png', page: "2/6",choices: ['c1','c2','c3'],answer:'c1'};
let fq3 = {picture: 'tulip.png', page: "3/6",choices: ['c1','c2','c3'],answer:'c1'};
let fq4 = {picture: 'daisy.jpg', page: "4/6",choices: ['c1','c2','c3'],answer:'c1'};
let fq5 = {picture: 'sunflower.png', page: "5/6",choices: ['c1','c2','c3'],answer:'c1'};
let fq6 = {picture: 'waterlily.png', page: "6/6",choices: ['c1','c2','c3'],answer:'c1'};

let mammal = {name: 'mammal', id: 1, picture: 'bear.png', questions:[mq1,mq2,mq3,mq4,mq5,mq6]};
let bird = {name: 'bird', id: 2, picture: 'bird.png', questions:[bq1,bq2,bq3,bq4,bq5,bq6]};
let flower = {name: 'flower', id: 3, picture: 'daffodil.png', questions:[fq1,fq2,fq3,fq4,fq5,fq6]};
let quizzes = [mammal,bird,flower];

let scores = 0;

module.exports.quizzes = quizzes;
