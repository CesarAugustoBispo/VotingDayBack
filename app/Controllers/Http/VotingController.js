'use strict'

const Voting = use('App/Models/Voting')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with votings
 */
class VotingController {
  /**
   * Show a list of all votings.
   * GET votings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const votings = Voting.all()

    return votings
  }

   /**
   * Create/save a new voting.
   * POST votings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'description'
    ])
  
    const voting = await Voting.create({ ...data, user_id: id })
  
    return voting
  }

  /**
   * Display a single voting.
   * GET votings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const voting = await Voting.findOrFail(params.id)
  
    await voting.load('contents')
  
    return voting
  }

   /**
   * Update voting details.
   * PUT or PATCH votings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const voting = await Voting.findOrFail(params.id)
  
    const data = request.only([
      'title',
      'description'
    ])
  
    voting.merge(data)
  
    await voting.save()
  
    return voting
  }

  /**
   * Delete a voting with id.
   * DELETE votings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const voting = await Voting.findOrFail(params.id)
  
    if (voting.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await voting.delete()
  }
}

module.exports = VotingController
