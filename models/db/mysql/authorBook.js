
import { mysqlAuthorBook } from '../../../services/db/connectors/mysql'
import MysqlBaseCRUD from '../services/interfaces/mysqlBaseCRUD'

class MysqlAuthorBookModel extends MysqlBaseCRUD {

    constructor () {
        super(mysqlAuthorBook)
    }

}

export default MysqlAuthorBookModel