const express = require('express')
const router = express.Router()

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts')
})

// @route POST api/auth
// @desc Add contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add a user')
})

// @route PUT api/auth
// @desc Update contact
// @access Private
router.put('/', (req, res) => {
  res.send('update a contact')
})

// @route DELETE api/auth
// @desc Delete contact
// @access Private
router.delete('/', (req, res) => {
  res.send('Delete a contact')
})

module.exports = router