const express = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.post('/user', createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
