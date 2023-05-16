module.exports = (app) => {
  const user = require('../controllers/userController')
  app.post('/user/create', user.create)
  app.get('/user/singin', user.checkUser)
}