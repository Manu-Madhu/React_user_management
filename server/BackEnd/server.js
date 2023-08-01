const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./Config/db')
const app = express();

// mongo Connection
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./Routes/userRouter');
app.use('/', userRouter)


app.listen(port, () => console.log(`You are Running port${port}`));