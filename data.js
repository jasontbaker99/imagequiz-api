let mq1 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};
let mq2 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};
let mq3 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};
let mq4 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};
let mq5 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};
let mq6 = {picture: 'bear.png', choices: ['c1','c2','c3'],answer:'c1'};

let bq1 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};
let bq2 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};
let bq3 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};
let bq4 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};
let bq5 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};
let bq6 = {picture: 'bird.png', choices: ['c1','c2','c3'],answer:'c1'};

let fq1 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};
let fq2 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};
let fq3 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};
let fq4 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};
let fq5 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};
let fq6 = {picture: 'tulip.png', choices: ['c1','c2','c3'],answer:'c1'};

let mammal = {name: 'mammal', id: 1, picture: 'bear.png', questions:[mq1,mq2,mq3,mq4,mq5,mq6]};
let bird = {name: 'bird', id: 2, picture: 'bird.png', questions:[bq1,bq2,bq3,bq4,bq5,bq6]};
let flower = {name: 'flower', id: 3, picture: 'tulip.png', questions:[fq1,fq2,fq3,fq4,fq5,fq6]};
let quizzes = [mammal,bird,flower];

let scores = 0;

module.exports.quizzes = quizzes;
