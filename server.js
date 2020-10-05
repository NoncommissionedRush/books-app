const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 5000;

connectDB();
// ...

app.use(express.json());

app.use("/api/books", require("./routes/api/books"));

app.listen(port, () => console.log(`Server running on port ${port}`));
