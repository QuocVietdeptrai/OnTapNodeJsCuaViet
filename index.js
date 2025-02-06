const express = require('express'); // require thư viẹn express
require("dotenv").config();

const database = require("./config/database");
const route = require("./routes/client/index_routes")

database.connect();

const app = express()
//const port = 3000// Cổng mở : http://localhost:3000/
const port = process.env.PORT;
// Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static('public'));

//Routes
route(app)
app.listen(port, () => {
    console.log(`Đó là : ${port}`)
})
