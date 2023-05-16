const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  duration: { type: String, required: true, unique: false },
  userId: { type: String, required: true, unique: false }    
})

module.exports = mongoose.model('Task', taskSchema)