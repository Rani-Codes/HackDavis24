const express = require('express')
const mongoose = require('mongoose')
const Inventory = require('./models/inventory.model.js')
const User = require('./models/user.model.js')
const app = express()
const inventoryRoute = require('./routes/inventory.js')
const userRoute = require('./routes/user.js')


//Used the line below to allow express to take in JSON data
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from node API')
})

app.use('/api/inventory', inventoryRoute)

app.use('/api/user', userRoute)

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
