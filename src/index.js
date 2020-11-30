const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./routes/index"));

app.listen(PORT);
console.log(`Server on port ${PORT}`);
