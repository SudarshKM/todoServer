const express = require('express')

const dotenv = require('dotenv')

const cors = require('cors')

const users = require ('./model/userModel.js')

dotenv.config()

const PORT = 4000 || process.env.PORT;

require ('./connection.js')

const router = require('./routes.js')

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);


app.post('/' , async (req,res)=>{

    const newUser = new users({
        username:'eby',
        email:'eby@gmail.com',
        password:"eby"
    })

    await newUser.save();
    res.status().json(newUser)


})

app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`);
})


