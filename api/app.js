const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandling = require("./middlewares/error");

const app = express();

dotenv.config({ path: "config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS FIX FOR RENDER
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://e-vote-frontend.onrender.com"
  ],
  credentials: true
}));

// Allow OPTIONS preflight
app.options("*", cors());

// Routes
const user = require("./Router/userRoutes");
const poll = require("./Router/pollRoutes");
const vote = require("./Router/voteRoutes");

app.use("/api/v1/user", user);
app.use("/api/v1/poll", poll);
app.use("/api/v1/vote", vote);

app.use('/api/v1/profile-image', express.static(__dirname + '/uploads/profile_image'));

// Error Middleware
app.use(ErrorHandling);

module.exports = app;
