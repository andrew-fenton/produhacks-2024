require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const appRoutes = require("./routes/routes");

const PORT = process.env.PORT || 5000;
const DB_CONN_STR = process.env.DB_CONN_STR;

// Utilities
app.use(cors());

// Listeners
app.listen(PORT, () => {
    // Database connection
    try {
        mongoose.connect(DB_CONN_STR, {});
        mongoose.connection.on("connected", () => console.log("Connected to MongoDB."));
    } catch (e) {
        console.error(e);
    }

    console.log(`Server is running on port ${PORT}`);
  });

// Routes
app.get('/', (req, res) => {
  res.send('ProduHacks 2024 API');
});

app.use('/data', appRoutes);