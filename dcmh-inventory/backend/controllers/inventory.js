const Inventory = require("../models/inventory.model")


const getItems = async (req, res) => {
    try {
        const items = await Inventory.find({})
        res.status(200).json(items)
      } 
    catch (error) {
        res.status(500).json({message: error.message})
      }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Inventory.findById(id)
    
        if(!item) {
          return res.status(404).json({message: "Item not found"})
        }
    
        res.status(200).json(item)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

const createItem = async (req, res) => {
    try {
        const item = await Inventory.create(req.body)
        res.status(200).json(item)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Inventory.findByIdAndUpdate(id, req.body)
    
        if(!item) {
          return res.status(404).json({message: "Item not found"})
        }
    
        const updatedItem = await Inventory.findById(id)
        res.status(200).json(updatedItem)
    
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Inventory.findByIdAndDelete(id)
    
        if(!item) {
          return res.status(404).json({message: "Item not found"})
        }
    
        res.status(200).json({message: "Item Deleted Successfully"})
    
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}