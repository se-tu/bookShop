import MongoBookModel from '../mongo/book'
import MysqlBookModel from '../mysql/book'
import EntityCRUD from './interfaces/entityCRUD'

class Book extends EntityCRUD {

    constructor () {
        super(MongoBookModel, MysqlBookModel)
    }
}

export default Book