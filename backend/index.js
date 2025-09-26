onst express = require('express')
const app = express()
const port = 3001

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Echelon backend listening on port ${port}`)
})
