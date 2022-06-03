const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const dotenv = require("dotenv");
const fileupload = require('express-fileupload');
const cors = require("cors");

const usersRouter = require("./routes/api/users");
const userProfiles = require("./routes/userProfiles");
const topicRoutes = require("./routes/topics");
const groupRoutes = require("./routes/groups");
const panelRoutes = require("./routes/panels");


dotenv.config();
const config = require('config');
const app = express();
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(cors());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use(userProfiles);
app.use(topicRoutes);
app.use(groupRoutes);
app.use(panelRoutes);
app.use("/marksSupervisor", require("./routes/marksSupervisor"));
app.use("/marksPannel", require("./routes/marksPannel"));
app.use("/templates", require("./routes/templates"));
app.use("/topicRegDoc", require("./routes/topicRegDoc"));
app.use("/finalDoc", require("./routes/finalDoc"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


