const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", require("./routes/homeRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/products", require("./routes/productRoutes"));

// Start Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
