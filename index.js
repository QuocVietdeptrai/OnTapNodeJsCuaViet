const express = require('express'); // require thư viẹn express
require("dotenv").config();

const database = require("./config/database");

const systemConfig = require("./config/system");

const route = require("./routes/client/index_routes")
const routeAdmin = require("./routes/admin/index_routes")

database.connect();

const app = express()
//const port = 3000// Cổng mở : http://localhost:3000/
const port = process.env.PORT;
// Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");



// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin; // Dùng để cấu hình config để từ file js sang file pug . Ví dụ ở đây là /admin 
app.use(express.static('public'));

//Routes
route(app)
routeAdmin(app)
app.listen(port, () => {
    console.log(`Đó là : ${port}`)
})
