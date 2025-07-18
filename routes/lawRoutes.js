
const express = require('express')

const router  = express.Router()

const { getAllLaws, getLawById, createLaw, deleteLaw } = require('../controllers/lawController')

router.get('/', getAllLaws)

router.get('/:id', getLawById)

router.post('/', createLaw)

router.delete('/:id', deleteLaw)

module.exports = router