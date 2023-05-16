module.exports = (app) => {
  const task = require('../controllers/taskControllers')
  app.post('/task/create', task.create)
  app.get('/task/get', task.get)
  app.put('/task/update', task.update)
  app.delete('/task/delete', task.delete)
}