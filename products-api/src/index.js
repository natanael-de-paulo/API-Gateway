const app = require('express')()

app.get('/products', (req, res) => res.send('Products API'))

app.listen(3001, () => console.log(`Users API listening on port 3001!`))
