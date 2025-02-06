const productRouters = require("./products_routes")
const homeRouters = require("./home_routes")
module.exports = (app) =>{
    app.use("/" , homeRouters)
    app.use("/products" , productRouters)
}