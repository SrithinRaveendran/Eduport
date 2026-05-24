const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    intructor:{
        type: String,
        required: true
    },
    price:{
        type: Number
    },
    duration:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    },
    lessons:{
        type:Number,
        required: true
    },
    imgae:{
        type: String,
        required: true
    }

})

const course = mongoose.model("course", courseSchema)
module.exports = course