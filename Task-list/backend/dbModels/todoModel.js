const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const todoShema = new Schema({
    task:{
        type:String,
        required: true, 
    },

    priority: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("TodoModel", todoShema)