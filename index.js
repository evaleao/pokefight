const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let pokedex = require('./pokedex.json');

app.use(cors());

app.get('/pokemon', (req, res) => {
    res.send(pokedex)
});

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    res.send(pokedex[id-1])
});





app.listen(port, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
