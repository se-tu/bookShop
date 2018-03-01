
class MongoBaseCRUD {

    constructor(entity){
        this.Entity = entity
    }

    createNew (data) {
        let entity = new this.Entity(data)
        return entity.save()
    }

    getById (id) {
        return this.Entity.findById(id)
    }

    getListOf () {
        return this.Entity.find()
    }

    update (entityData) {
        return this.Entity.update({_id: entityData.id}, entityData)
    }

    remove (entityId) {
        return this.Entity.destroy({id: entityId})
    }
}

export default MongoBaseCRUD