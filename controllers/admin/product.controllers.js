// [GET ] /admin/products 
const Product = require("../../models/product_model");

module.exports.index = async (req, res) => {
    //Xử lý bộ lọc (Start)
    let filterStatus = [
        {
            name:"Tất cả",
            status:"",
            class:""
        },
        {
            name:"Hoạt động",
            status:"active",
            class:""
        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class:""
        }

    ];
    if(req.query.status){
        const index = filterStatus.findIndex(item => item.status == req.query.status)
        // console.log(index);
        filterStatus[index].class="active";
    }else{
        const index = filterStatus.findIndex(item => item.status == "")
        // console.log(index);
        filterStatus[index].class="active";

    }
    //Xử lý bộ lọc (End )
    // console.log(req.query.status);
    
    let find = {
      
    };
    if(req.query.status){
        find.status = req.query.status
    }
    
    try {
        const products = await Product.find(find);

        const newProducts= products.map(item => {
            item.priceNew = (item.price*(100-item.discountPercentage)/100).toFixed(0);
            return item;
        })
        console.log(newProducts); // Kiểm tra giá trị của mảng products
        res.render("admin/pages/products/index.pug", {
            pageTitle: "Danh sách sản phẩm",  // Thêm dấu phẩy ở đây
            products: newProducts,               // Đảm bảo truyền đúng dữ liệu
            filterStatus: filterStatus 
        });
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        res.render("admin/pages/products/index.pug", {
            pageTitle: "Danh sách sản phẩm",
            products: []  // Trả về mảng rỗng nếu có lỗi
        });
    }
};