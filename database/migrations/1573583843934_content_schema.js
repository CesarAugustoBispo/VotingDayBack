'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContentSchema extends Schema {
  up () {
    this.create('contents', (table) => {
      table.increments()
      table
      .integer('voting_id')
      .unsigned()
      .references('id')
      .inTable('votings')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('link')
      table.string('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('contents')
  }
}

module.exports = ContentSchema
