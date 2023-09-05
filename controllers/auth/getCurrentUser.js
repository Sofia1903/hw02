const { User } = require('../../models')
const { Unauthorized } = require('http-errors')

const getCurrentUser = async(req, res) => {
  const { _id } = req.user
  const getCurrentUser = await User.findById(_id)
  if (!getCurrentUser) {
    throw new Unauthorized('Not authorized')
  }
  const {email, subscription} = getCurrentUser
  res.status(200).json({
        email,
        subscription,
        
  })
}
module.exports = getCurrentUser