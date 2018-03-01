import Author from '../models/db/services/authors'

const express = require('express')
const router = express.Router()
const author = new Author()

/* GET home page. */
router.get('/', function (req, res, next) {
    author.findAll()
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.get('/:id', function (req, res, next) {
    author.findOne(req.params.id)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.post('/', function (req, res, next) {
    author.create(req.body.author)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.put('/', function (req, res, next) {
    author.update(req.body.author)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

router.delete('/', function (req, res, next) {
    author.remove(req.body.authorId)
        .then(result => res.json(result))
        .catch(error => res.render('error', {error}))
})

module.exports = router
