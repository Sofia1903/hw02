const { User } = require('../../models')
const { Unauthorized } = require('http-errors')

const getCurrentUser = async(req, res) => {
  const { _id } = req.user
  const getCurrentUser = await User.findById(_id, 'email subscription')
  if (!getCurrentUser) {
    throw new Unauthorized('Not authorized')
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user
    }
  })
}
module.exports = getCurrentUser