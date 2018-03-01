import Author from './base/author'
import MongoBaseCRUD from '../services/interfaces/mongoBaseCRUD'

class MongoAuthorModel extends MongoBaseCRUD{

    constructor () {
      super(Author)
    }

    getById (id) {
        return super.getById(id).populate('books')
    }

    getListOf () {
        return super.getListOf().populate('books')
    }
}

export default MongoAuthorModel