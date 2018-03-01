
class MysqlBaseCRUD {
    constructor(entity){
        this.entity = entity
    }

    createNew (data) {
        return this.entity.create(data)
    }

    getById (id) {
        return this.entity.findById(id)
    }

    getListOf (data) {
        return this.entity.findAll({ where: data})
    }

    update (entityData) {
        return this.entity.update(entityData, {where: {id: entityData.id}})
    }

    remove (entityId) {
        return this.entity.destroy({where: {id: entityId}})
    }
}

export default MysqlBaseCRUD