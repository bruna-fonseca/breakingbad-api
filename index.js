const express = require('express');
const cors = require('cors');
require('dotenv').config();

const characterRoute = require('./routes/characterRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(characterRoute);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}!`));
