const express = require("express");
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/apiroutes.js"));
require("./routes/htmlroutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});