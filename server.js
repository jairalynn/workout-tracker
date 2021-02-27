const express = require("express");
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/apiroutes.js"));
require("./routes/htmlroutes")(app);

const MONGODB_URI = "mongodb+srv://jairalynn:poopYOU21@cluster0.g2lhn.mongodb.net/workout?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});