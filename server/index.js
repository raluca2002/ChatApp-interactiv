//the root of our application

const express = require("express");
const cors = require("cors");  //pentru comunicarea cu frontendul (fara, putem avea probleme la trimiterea sau primimirea datelor de pe frontend)
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
const chatRoute = require("./Routes/chatRoute")
const messageRoute = require("./Routes/messageRoute")
const teacherRoute = require("./Routes/teacherRoute")
const questionRoute =  require("./Routes/questionRoute")
const resultRoute = require("./Routes/resultRoute")
const app = express()  //aplicatia va fi un obiect care va avea diverse metode care vor fi folosite pentru a crea aplicatia
require("dotenv").config()


//functii midleware - adauga abilitati suplimentare codului
app.use(express.json()) //permite ca aplicatia sa trimita si sa primeasca date de tip json
app.use(cors())
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use("/api/teachers", teacherRoute);
app.use("/api/questions", questionRoute);
app.use("/api/results", resultRoute)
app.get("/", (req,res) =>{
    res.send("Wlecome our game app API")
});

mongoose.set('strictQuery', false);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

//creem un server care asculta un port
app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`)
})

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established"))
    .catch((error) => console.log("MongoDB connection failed: ", error.message));