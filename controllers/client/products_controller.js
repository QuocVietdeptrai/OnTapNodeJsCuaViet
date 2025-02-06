const Product = require("../../models/product_model");

module.exports.index = async (req, res) => {
    try {
        const products = await Product.find({
       
        });

        const newProducts= products.map(item => {
            item.priceNew = (item.price*(100-item.discountPercentage)/100).toFixed(0);
            return item;
        })
        console.log(newProducts); // Kiểm tra giá trị của mảng products
        res.render("client/pages/products/index.pug", {
            pageTitle: "Danh sách sản phẩm",  // Thêm dấu phẩy ở đây
            products: newProducts               // Đảm bảo truyền đúng dữ liệu
        });
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        res.render("client/pages/products/index.pug", {
            pageTitle: "Danh sách sản phẩm",
            products: []  // Trả về mảng rỗng nếu có lỗi
        });
    }
};
