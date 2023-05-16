const User = require('../models/user')

exports.create = (req, res) => {
  const nUser = new User({
    code: req.body.code,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
  nUser.save().then(
    data => {
      res.send(data)
    }
  ).catch(
    error => {
      res.status(500).send({
          message: error.message || 'Error to create the user'
      })
    }
  )
  console.log(nUser);
}

exports.checkUser = async (req, res) => {
  const body = req.query
  console.log(body)
  let coincidence = await User.findOne({
    userName: body.userName,
    password: body.password
  })
  let authUser = {
    login: true
  }
  if (!coincidence) {
    authUser.login = false
  }
  res.send(authUser)
}