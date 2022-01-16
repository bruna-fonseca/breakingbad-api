const express = require('express');

const characterRoute = require('./routes/characterRoute');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(characterRoute);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
