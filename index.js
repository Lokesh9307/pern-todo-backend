const express = require("express");
const cors = require("cors");
const pool = require("./db.js");
require('dotenv').config;

const app = express()

app.use(cors())
app.use(express.json())


// Routes
// create TODO
app.post("/todos", async (req, res) => {
    try {
        console.log(req.body)
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error)
    }
})

app.get("/",(req,res)=>{
    res.send("Server is running...");
    res.status(200)
})

// get All todo
app.get("/todos", async (req, res) => {
    try {
        const getTodos = await pool.query("SELECT * FROM todo");
        res.json(getTodos.rows);
    } catch (error) {
        console.log(error);
    }
})


// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const getTodoById = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(getTodoById.rows)
    } catch (error) {
        console.group(error)
    }
})


// update todo
app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("updated");
})


// delete todos
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = pool.query("DELETE from todo WHERE todo_id = $1", [id])
        res.json("todo deleted")
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log("Server is running...")
})