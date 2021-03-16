const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Message From Auth Server' });
})

app.listen('3001', () => {
    console.log('auth server listening on 3001')
})