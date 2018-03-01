import MongoAuthorModel from '../mongo/author'
import MysqlAuthorModel from '../mysql/author'
import EntityCRUD from './interfaces/entityCRUD'

class Author extends EntityCRUD {

    constructor () {
        super(MongoAuthorModel, MysqlAuthorModel)
    }
}

export default Author