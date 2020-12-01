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

app.get('/quizzes/:id', (request, response) => {
    let questions = data.quizzes.map(x=>{
        return {q: x.questions}
    });
    response.json(questions);
});

app.post('/score', (request, response) => {
    let id = request.body.id;
    let score = request.body.score;
    data.scores.push({id: id, score: score});
    response.json({message: 'Score posted ... Done'});
});

app.listen(port, () => {
    console.log('Listening on port '+port);
});

//get quiz info
//get quiz info by quiz id
//push score

