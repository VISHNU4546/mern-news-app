const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
require('dotenv').config();
const cookieParser = require("cookie-parser"); 
const app = express();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');

app.use('/v1/auth', authRoutes);
app.use('/v1/news', newsRoutes);
app.get("/",(req,res)=>{
    return res.status(200).send({
        succuss:true,
        messege:"root"
    })
})
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
