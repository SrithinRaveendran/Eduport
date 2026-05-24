const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const course = require("./models/coursemodel")


const app = express()
app.use(express.json())
app.use(cors())
//mongodb+srv://srithinraveendran_db_user:srithin@clusterbellcorp.ry8lvpt.mongodb.net/"

mongoose.connect("mongodb+srv://srithinraveendran_db_user:srithin@clusterbellcorp.ry8lvpt.mongodb.net/")
    .then(console.log("connected to database"))
    .catch((e) => console.log(e, "error occured unable to connect to databse"))

app.post("/course", async (req, res) => {
    try {
        const courses = new course(req.body)
        const savedcourse = await courses.save()
        res.send("course saved")
    }
    catch(e) {
        console.log(e.message,'unable to save the course')
        res.send(500)
    }
})

app.get("/course", async (req,res)=>{
    try{
        const courses =await course.find()
        res.send(courses)
    }catch(e){
        res.send(500).message("something went wrong")
    }
})

// app.delete("/course",async(req,res)=>{
//     try{
//         const deleteall = await course.deleteMany()
//     }
// })


app.listen(5000, () => console.log("backend is running at 5000"))