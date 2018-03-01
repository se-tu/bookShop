import mongoose from 'mongoose'

const connect = (config) => {

    mongoose.connect(config.uri)
    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    db.once('openUri', () => console.log('mongo is here'))

}
export default connect