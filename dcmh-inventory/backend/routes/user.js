const express = require("express")
const router = express.Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user")

//Get all items in the inventory
router.get("/", getUsers) 

//Get 1 item that's in the inventory, must enter its id
router.get('/:id', getUser)

//Add a new item to the inventory
router.post('/', createUser)

//Update an item that's in the inventory, must enter its id
router.put('/:id', updateUser)

//Delete an item that's in the inventory, must enter its id
router.delete('/:id', deleteUser)

module.exports = router


