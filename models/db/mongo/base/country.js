import mongoose from 'mongoose'

const Schema = mongoose.Schema

const countrySchema = new Schema({
    name: String,
    coefficient: Number
})

const Country = mongoose.model('Country', countrySchema)

export default Country