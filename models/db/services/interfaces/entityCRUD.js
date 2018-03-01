class EntityCRUD {

    constructor (MongoModel, MysqlModel) {
        this.mongo = new MongoModel()
        this.mysql = new MysqlModel()

        // this.setDb()
        this.db = this.mysql
    }

    setDb(){
        this.changeDb()
    }

    changeDb () {
        this.db = ( Math.random() < 0.5) ? this.mongo : this.mysql
    }

    create (data) {
        return this.db.createNew(data)
    }

    findOne (id) {
        return this.db.getById(id)
    }

    findAll () {
        return this.db.getListOf()
    }

    update (data) {
        return this.db.update(data)
    }

    remove (id) {
        return this.db.remove(id)
    }

}

export default EntityCRUD