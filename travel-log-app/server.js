const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/auth");
const travelLogRoutes = require("./routes/travelLogs");

const app = express();

app.use(cors());            
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/travel-logs", travelLogRoutes);

sequelize.sync().then(() => console.log("Database connected"));

app.listen(5000, () => console.log("Server running on port 5000"));
