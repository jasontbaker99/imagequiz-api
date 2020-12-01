const express = require('express');
var cors = require('cors');
var data = require('./data');
var bodyParser = require('body-parser');
const { request } = require('express');
const app = express();

const port = process.env.PORT || 3000;


//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    console.log("Yo");
});

app.get('/quizzes', (request, response) => {
    let metadata = data.quizzes.map(x=>{
        return {name: x.name, id: x.id, pic: x.picture}
    });
    response.json(metadata);
});

app.get('/quizzes/1', (request, response) => {
    let quiz = data.quizzes.map(x=>{
        if(x.id == 1){
            return x.questions;
        }
    });
    response.json(quiz);
});

app.get('/quizzes/2', (request, response) => {
    let quiz = data.quizzes.map(x=>{
        if(x.id == 2){
            return x.questions;
        }
    });
    response.json(quiz);
});

app.get('/quizzes/3', (request, response) => {
    let quiz = data.quizzes.map(x=>{
        if(x.id == 3){
            return x.questions;
        }
    });
    response.json(quiz);
});

app.post('/score', (request, response) => {
    let id = request.body.id;
    let score = request.body.score;
    data.scores.push({id: id, score: score});
    console.log("Yo");
    response.json({message: 'Score posted ... Done'});
});

app.listen(port, () => {
    console.log('Listening on port '+port);
});

//get quiz info
//get quiz info by quiz id
//push score

