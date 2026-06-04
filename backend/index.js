const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const course = require("./models/coursemodel")
const auth = require("./models/loginmodel")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())


const mongodbconnector = process.env.MONGODB

mongoose.connect(mongodbconnector)
    .then(console.log("connected to database"))
    .catch((e) => console.log(e, "error occured unable to connect to databse"))

app.post("/course", async (req, res) => {
    try {
        const courses = new course(req.body)
        const savedcourse = await courses.save()
        res.send("course saved")
    }
    catch (e) {
        console.log(e.message, 'unable to save the course')
        res.send(500)
    }
})

app.post("/courses", async (req, res) => {
    try {
        const courses = await course.insertMany(req.body)

        res.status(201).json({
            message: "Courses saved successfully",
            data: courses
        })
    }
    catch (e) {
        console.log(e.message, "unable to save courses")

        res.status(500).json({
            message: "Unable to save courses",
            error: e.message
        })
    }
})

app.get("/course", async (req, res) => {
    try {
        const courses = await course.find()
        res.send(courses)
    } catch (e) {
        res.send(500).message("something went wrong")
    }
})


app.get("/course/:id", async (req, res) => {
    try {
        const id = req.params.id
        const singlecourse = await course.findById(id)
        res.send(singlecourse)
    } catch (e) {
        res.send(500).message("something went wrong")
    }
})
app.delete("/course", async (req, res) => {
    try {
        const deleteall = await course.deleteMany({})
    }
    catch (e) {
        res.send(500).message("something went wrong in delete")
    }
})

app.post('/register', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body

        const hasshedpassword = await bcrypt.hash(password, 10)
        console.log(hasshedpassword)

        const credentialpost = await new auth(
            { name, email, phone, password: hasshedpassword }
        )

        const savedcredential = credentialpost.save(credentialpost)
        // res.send("credential saved in database")

        console.log(req.body)
        res.send("got the data")
    }
    catch {
        console.log('something went wrong')
    }
})
app.post("/login", async (req, res) => {


    try {

        const { email, password } = req.body
        const user = await auth.findOne({ email })
        console.log(user, "user from backend")


        if (!user) {
            return (res.send("User with this email id"))
        }

        const passwordcheck = await bcrypt.compare(password, user.password)
        if (!passwordcheck) {
            return (res.send("password error"))
        }

        const token = jwt.sign({ id: user._id,name : user.name }, "secretcode", { expiresIn: "10d" })
        res.send({
            message: "login successful",
            token
        })

    }
    catch {
        console.log("something went wrong")

    }
})



app.listen(5000, () => console.log("backend is running at 5000"))