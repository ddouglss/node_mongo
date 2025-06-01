const express = require('express');
const UserModel= require('../src/models/user.model');
const app = express()

app.use(express.json());
app.get("/home", (req, res) => {
    res.contentType('application/html');
    res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", async (req, res) =>{
    try {
        const users = await UserModel.find({})

        res.status(200).json(users);
    }catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/users",  async (req, res) => {
    try{
        const user =  await UserModel.create(req.body)

        res.status(201).json(user);
    } catch(err){
        res.status(500).send(err.message)
    }
})

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando com express na porta ${port}`));