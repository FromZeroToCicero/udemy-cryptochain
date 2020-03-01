const express = require('express');
const Blockchain = require("./blockchain");
const bodyParser = require("body-parser");

const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

const PORT = 4200;
app.listen(PORT, () => {
   console.log(`Connected to blockchain api on localhost:${PORT}`);
})