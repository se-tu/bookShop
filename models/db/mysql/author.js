import { mysqlAuthor } from '../../../services/db/connectors/mysql'
import MysqlBaseCRUD from '../services/interfaces/mysqlBaseCRUD'

class MysqlAuthorModel extends MysqlBaseCRUD {

    constructor () {
        super(mysqlAuthor)
    }

}

export default MysqlAuthorModel