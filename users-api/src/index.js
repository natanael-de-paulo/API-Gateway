const app = require('express')()

app.get('/users', (req, res) => res.send('Users API'))

app.listen(3002, () => console.log(`Users API listening on port 3002!`))
