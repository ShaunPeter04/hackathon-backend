
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://shaun:ares2008@cluster0.dsyjzb7.mongodb.net/?appName=Cluster0").then(

    () => {
        console.log("mongodb connected")
    }

).catch(
    () => {
        console.log(error)
    }
)

const Team = mongoose.model("Teams", new mongoose.Schema(

    {
        teamId: String,
        teamName: String,
        teamLeaderName: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        numberOfMembers: Number,
        projectTitle: String,
        problemStatementTrack: String,
        technologyStack: String,
        mentorName: String,
        registrationDate: Date,
        tableStationNumber: String

    }

))


app.get("/test", (req, res) => {

    res.send("hello world")
})

app.post("/add-team", async (req, res) => {

    await Team.create(req.body)
    res.json({ "status": "success" })
})

app.post("/view-teams", async (req, res) => {

    const teams = await Team.find()
    res.json(teams)
})


app.listen(3000, () => {

    console.log("server started")
})