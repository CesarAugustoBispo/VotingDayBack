'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VotingSchema extends Schema {
  up () {
    this.create('votings', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('title')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('votings')
  }
}

module.exports = VotingSchema
