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
      table
      .integer('type_id')
      .unsigned()
      .references('id')
      .inTable('types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('contents')
  }
}

module.exports = ContentSchema
