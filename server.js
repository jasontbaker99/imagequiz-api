const express = require('express');
var cors = require('cors');
var data = require('./data');

const app = express();

const port = process.env.PRT || 3000;


//middlewares
app.use(cors());


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

app.listen(port, () => {
    console.log('Listening on port '+port);
});

//get quiz info
//get quiz info by quiz id
//push score

