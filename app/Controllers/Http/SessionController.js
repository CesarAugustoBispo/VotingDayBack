'use strict'

class SessionController {
    async create ({ request, auth }) {
      console.log('aqui') 
      const { email, password } = request.all()
  
      const token = await auth.attempt(email, password)
  
      return token
    }
}

module.exports = SessionController
