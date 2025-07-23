/*
// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow frontend to access backend
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.listen(5000, () => {
  console.log('Backend is running on http://localhost:5000');
});

*/

const express = require('express');
const cors = require('cors');
const { readFile } = require('fs');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/allTasks', (req, res) => {
  readFile('./simBd/Tasks.json', 'utf8', (err, json) => {
    if(err) {
      res.status(500).send('An error has occurred. Try again later...')
    }


    res.json({allTasks: JSON.parse(json)});
  })
})

app.get('/api/task', (req, res) => {
  const{id} = req.query;
  readFile('./simBd/Tasks.json', 'utf8', (err, json) => {
    if(err) {
      res.status(500).send('An error has occurred. try again later...')
    }
    
    try {
      // convert the read json from String to a Js Array
      const tasks = JSON.parse(json);

      // find the first task with the selected id
      const task = tasks.find((task) => task.ID === id);

      if (!task) {
        res.status(404).send('task not found');
      }

      res.json({ task })

    } catch(Err) {
      res.status(500).send('error parsin tasks');
    }

  })
});


app.listen(5000, () => console.log('The backend is running on http://localhost:5000'));
