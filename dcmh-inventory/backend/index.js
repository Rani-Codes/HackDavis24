const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from node API')
})


mongoose.connect('mongodb+srv://Rani:Ku8Z8FsMF5dgCVwv@hackdavis24.xywjix4.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(3001, () => {
      console.log('Server is running on port 3001')
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })
