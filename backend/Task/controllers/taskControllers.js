const Task = require("../models/task");

exports.create = (req, res) => {
  const nTask = new Task({
    name: req.body.name,
    duration: req.body.duration,
    userId: req.body.userId,
  });
  nTask
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error to create the Task",
      });
    });
  console.log(nTask);
};

exports.get = async (req, res) => {
  const tasks = await Task.find({
    userId: req.query.userId
  })
  if (!tasks) {
    return res.status(404).send({message:"no existe tareas"})
  }
  res.send(tasks)
}

exports.update = async function (req, res) {
  
  result = await Task.updateOne(
    {_id:req.body._id},
    {
      $set: req.body
    }
  )
  res.send(result)
}

exports.delete = (req, res) => {
  Task.findByIdAndDelete(req.query._id)
    .then((data)=>{
      if(!data){
        res.status(404).send({message:"no se puede eliminar el documento porque no se encontró"})
      } else {
        res.send({message:"se elimino el documento exitosamente"})
      }
    })
    .catch((err)=>{
      res.status(500).send({message:"hubo un error en servidor"})
    })
}
