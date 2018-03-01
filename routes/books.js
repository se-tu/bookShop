import Book from '../models/db/services/book'

const express = require('express')
const router = express.Router()
const book = new Book()

/* GET home page. */
router.get('/', function (req, res, next) {
    book.findAll()
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.get('/:id', function (req, res, next) {
    book.findOne(req.params.id)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.post('/', function (req, res, next) {
    book.create(req.body.book)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.put('/', function (req, res, next) {
    book.update(req.body.book)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.delete('/', function (req, res, next) {
    book.remove(req.body.book.id)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

module.exports = router
