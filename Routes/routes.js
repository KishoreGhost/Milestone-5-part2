const express = require('express')
const users = require("../model/User.model")
const userData = express.Router()
const data = express.Router()

data.use(express.json())
userData.use(express.json())


data.get("/get", async(req, res) => {
    try{
        const Users = await users.find()
        res.status(200).json(Users) 
    }catch(err){
        res.status(500).json({message: "Failed to fetch user",error: err.message})
    }
})

userData.post("/post", async (req, res) => {
    try{
        const {id, name} = req.body
        console.log(id, name)
        const newUser = await users.create({id, name})
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({error: err.message})
        console.log(err)
    }
})

module.exports = {userData,data}