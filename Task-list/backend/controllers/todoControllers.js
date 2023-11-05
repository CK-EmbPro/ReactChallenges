const TodoModel = require("../dbModels/todoModel")

const getTodos = async (req, res) => {
    try {
        let todos = await TodoModel.find()
        res.send(todos)
    } catch (error) {
        res.status(500).send(error.message)
    }
   
}

const getTodoById = async (req, res) => {
    let {id} = req.params
    try {
        let todo = await TodoModel.findById(id)
        res.send(todo)
    } catch (error) {
        res.status(500).send(error.message)
    }
   
}


const addTodo = async (req, res) => {
    let {task, priority } = req.body
    try{
        let todo = new TodoModel({
            task,
            priority
        })

        let response = await todo.save()
       res.send(response)
    }catch (error) {
        res.status(500).send(error.message)
    }
  
}


const updateTodo = async (req, res) => {
    const {id} = req.params
    const {task, priority} = req.body

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, {
            task,
            priority
        })

        const response = await updatedTodo.save()
        res.send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteTodo = async (req, res) => {
    const {id} = req.params


    try {

        let deletedTodo = await TodoModel.findByIdAndDelete(id)
        res.status(204).send(deletedTodo)

    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
}


