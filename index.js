const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// 1. IMPORT ROUTES (Using the correct paths for your structure)
const authRoute = require('./server/routes/auth');
const postRoute = require('./server/routes/posts');
const verify = require('./server/routes/verifyToken'); // This is the gatekeeper

dotenv.config();

// 2. CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to LOCAL MongoDB Successfully!'))
    .catch((err) => console.log('DB Connection Error: ', err));

// 3. MIDDLEWARE
app.use(express.json()); // Allows server to read JSON from the frontend
app.use(cors());         // Allows your index.html to talk to the server

// 4. ROUTE MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

// 5. PROTECTED PROFILE ROUTE (This fixes the "Server Error" on the Dashboard)
app.get('/api/user/profile', verify, (req, res) => {
    // req.user is populated by the verifyToken middleware
    res.send({ 
        id: req.user._id, 
        message: "Successfully retrieved protected data" 
    });
});

// 6. START SERVER
const PORT = 5000;
app.listen(PORT, () => console.log(`Server LIVE on ${PORT}`));