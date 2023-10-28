const express = require('express');
const server = express();

server.get('/curso', (req, res) => {
    return res.json({ curso: 'Node.js' });
})

server.listen(3000);
