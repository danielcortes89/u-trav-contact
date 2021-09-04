const express = require('express')
const { check, validationResult } = require('express-validator/check')
const auth = require('../middleware/auth')
const Contact = require('../models/Contact')
const User = require('../models/User')
const router = express.Router()

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id}).sort({date: -1})

		res.json(contacts)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
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