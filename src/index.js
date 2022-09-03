const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.json({msg: 'Backend is Running'})
})

app.get('/test', (req, res) => {
  return res.json({msg: 'I ❤️ Node.js'})
})

app.listen(3000, () => {
  console.log('Backend is Running in port 3000');
})