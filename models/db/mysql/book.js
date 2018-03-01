import MysqlBaseCRUD from '../services/interfaces/mysqlBaseCRUD'
import MysqlAuthorModel from './author'
import MysqlAuthorBookModel from './authorBook'
import { mysqlBook } from '../../../services/db/connectors/mysql'

class MysqlBookModel extends MysqlBaseCRUD {

    constructor () {
        super(mysqlBook)
        this.author = new MysqlAuthorModel()
        this.authorBook = new MysqlAuthorBookModel()
    }

    createNew (data) {
        let book

        return super.createNew(data)
            .then( newBook => {
                // console.log('book', newBook)
                book = newBook
                return Promise.all( data.authors_id.map( value => this.author.getById(value)) )
            })
            .then( ( findedAuthors ) => {
                console.log(findedAuthors)
                return Promise.all(data.authors_id.map(id =>
                        this.authorBook.createNew({
                            author_id: id,
                            book_id: newBook.id
                        })
                    )
                )
            })
            .then(authorBook => {
                if (!authorBook) throw new Error('authorBook wasn\'t create')
                return book
            })
    }

    update (entityData) {
        let book

        return super.update(entityData)
            .then(updatedBook => {
                book = updatedBook
                return this.authorBook.getListOf({book_id: updatedBook.id})
            })
            .then(authorBook => Promise.all(authorBook.map(value => {
                this.authorBook.remove(value.id)
            })))
            .then( () => Promise.all( data.authors_id.map( value => this.author.getById(value)) ))
            .then( values => )
            .then( () => Promise.all(entityData.authors_id.map(id =>
                    this.authorBook.createNew({
                        author_id: id,
                        book_id: entityData.id
                    })
            )))
            .then(()=> book)
    }

    remove (entityId) {
        return super.remove(entityId)

    }
}

export default MysqlBookModel