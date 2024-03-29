'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Voting extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    content () {
        return this.hasMany('App/Models/Content')
    }
}

module.exports = Voting
