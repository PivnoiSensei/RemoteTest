import express from "express";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "usersAccounts",
    password: "1111",
    port: 5432,
})
db.connect();
const corsOptions = {
    origin: ["http://localhost:5173"],
};

const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.json({fruits:["apples", "orange", "strawberry"]});
});
app.get("/emojipedia", async (req, res)=>{
    const userResult = await db.query("SELECT * FROM usernames ORDER BY id ASC");
    let userArray = userResult.rows.map(row =>({
        id: row.id,
        userName: row.username
     }))

     const emojisResult = await db.query("SELECT * FROM emojis ORDER BY id ASC")
     let emojisArray = emojisResult.rows.map(row=>({
        id: row.id,
        emoji: row.emoji,
        name: row.name,
        meaning: row.meaning
     }))
     res.json({
        users: userArray,
        emojis: emojisArray
    });
})

app.post("/addUser", async (req, res) =>{
    const fName = req.body.fName;
    const lName = req.body.lName
    const fullName = fName + " " + lName;
    try {
       const result = await db.query("INSERT INTO usernames (username) VALUES ($1) RETURNING *", [fullName])
       //res.status(201).json(result.rows[0]);
       setTimeout (() =>{
        res.redirect("http://localhost:5173/emojipedia");
       }, 3000);
       
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error"});
    }
})


app.listen(port, () =>{
    console.log(`Server started on port:${port}`)
})