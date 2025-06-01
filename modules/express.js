const express = require('express');
const UserModel= require('../src/models/user.model');

const app = express()

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`Resquest Type ${req.method}`);
    console.log(`Content Type ${req.headers['content-type']}`);
    console.log(`Date ${new Date()}`);
    console.log(`URL ${req.url}`);
    next();
});

app.get("/users", async (req, res) =>{
    try {
        const users = await UserModel.find({})

        res.status(200).json(users);
    }catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/users/:id", async (req, res) =>{
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    }catch (err) {
        res.status(500).send(err.message);
    }
})

app.post("/users",  async (req, res) => {
    try{
        const user =  await UserModel.create(req.body)

        res.status(201).json(user);
    } catch(err){
        res.status(500).send(err.message)
    }
});

app.patch("/users/:id", async (req, res ) => {
    try{
        const id = req.params.id;
        const user =  await  UserModel.findByIdAndUpdate(id, req.body, {new: true});

        res.status(200).json(user);
    }
    catch(err){
        res.status(500).send(err.message)
    }
    });

app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await  UserModel.findByIdAndDelete(id);

        res.status(200).json(user);

    }catch (err){
        err.status(500).send(err.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando com express na porta ${port}`));