const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.use(cors())

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse);
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('learning platfrom running on', port)
})