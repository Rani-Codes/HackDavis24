const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/inventory")

//Get all items in the inventory
router.get("/", getItems) 

//Get 1 item that's in the inventory, must enter its id
router.get('/:id', getItem)

//Add a new item to the inventory
router.post('/', createItem)

//Update an item that's in the inventory, must enter its id
router.put('/:id', updateItem)

//Delete an item that's in the inventory, must enter its id
router.delete('/:id', deleteItem)

module.exports = router


