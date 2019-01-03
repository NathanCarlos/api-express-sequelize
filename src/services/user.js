const User = require('../models/user')
class UserServices {
  static async findUsers () {
    try {
      let response = await User.findAll({})
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async createUser (username, email, password) {
    try {
      let response = await User.create({
        username,
        email,
        password
      })
      response.password = '******'
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async updateUser (id, username, email, password) {
    try {
      let response = await User.update(
        {
          username,
          email,
          password
        },
        { where: { id } }
      )
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async deleteUser (id) {
    try {
      let response = await User.destroy({
        where: { id }
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async authUser (email, password) {
    try {
      let response = await User.findAll({
        where: { email, password }
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}
module.exports = UserServices
