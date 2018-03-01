import * as mysqlAuthorDefiner from '../../../models/db/mysql/base/authors'
import * as mysqlBookDefiner from '../../../models/db/mysql/base/books'
import * as mysqlCountryDefiner from '../../../models/db/mysql/base/countries'
import * as mysqlAuthorBookDefiner from '../../../models/db/mysql/base/authorsbooks'

// Connection

import { Sequelize } from 'sequelize'
import { mysqlConfig } from '../../../configs/db'

const {database, username, password, options} = mysqlConfig
const sequelize = new Sequelize(database, username, password, options)

// Defined
const mysqlAuthor = mysqlAuthorDefiner.default(sequelize, Sequelize)
const mysqlBook = mysqlBookDefiner.default(sequelize, Sequelize)
const mysqlCountry = mysqlCountryDefiner.default(sequelize, Sequelize)
const mysqlAuthorBook = mysqlAuthorBookDefiner.default(sequelize, Sequelize)

mysqlAuthor.belongsToMany(mysqlBook, {
    through: {
        model: mysqlAuthorBook,
        unique: false
    },
    as: 'books',
    foreignKey: 'author_id',
    constraints: false
})

mysqlBook.belongsToMany(mysqlAuthor, {
    through: {
        model: mysqlAuthorBook,
        unique: false
    },
    as: 'authors',
    foreignKey: 'book_id',
    constraints: false
})

export { mysqlAuthor, mysqlBook, mysqlCountry, mysqlAuthorBook }