const express = require('express')
const mongoose = require('mongoose')
const Inventory = require('./models/inventory.model.js')
const app = express()

//Used the line below to allow express to take in JSON data
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from node API')
})

//Add a new item to the inventory
app.post('/api/inventory', async (req, res) => {
  try {
    const item = await Inventory.create(req.body)
    res.status(200).json(item)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//Get all items in the inventory
app.get('/api/inventory', async (req, res) => {
  try {
    const items = await Inventory.find({})
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//Get 1 item that's in the inventory, must enter its id
app.get('/api/inventory/:id', async (req, res) => {

  try {
    const { id } = req.params
    const item = await Inventory.findById(id)
    res.status(200).json(item)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
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
