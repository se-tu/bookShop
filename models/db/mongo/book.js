import Book from './base/book'
import MongoBaseCRUD from '../services/interfaces/mongoBaseCRUD'

class MongoBookModel extends MongoBaseCRUD{

    constructor () {
        super(Book)
    }
}

export default MongoBookModel