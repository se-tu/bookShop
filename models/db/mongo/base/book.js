import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: String,
    text: String,
    description: String,
    numberOfPage: Number,
    startPrice: Number,
    _author: { type: Schema.Types.ObjectId, ref: 'Author'}
})

const Book = mongoose.model('Book', bookSchema)

export default Book