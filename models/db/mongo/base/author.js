import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: String,
    description: String,
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

const Author = mongoose.model('Author', authorSchema)

export default Author