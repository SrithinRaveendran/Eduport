const mongoose = require("mongoose")



const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description:[ {
    type: String,
    required: true,
  }],

  category: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
  },

  duration: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },

  lessons: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  whatYouWillLearn: {
    type: [String],
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length >= 9
      },
      message: 'At least 9 learning points are required',
    },
  },

  curriculum: [
    {
      lessonTitle: {
        type: String,
        required: true,
      },

      topics: [
        {
        name:{
          type: String,
          required: true,
        },
        topicduration:{
          type:Number,
          required:true
        }
      }
      ],

      totalduration: {
        type: String,
      },
    },
  ],
})

module.exports = mongoose.model('Course', courseSchema)
// const course = mongoose.model("course", courseSchema)
// module.exports = course