
// const express=require("express");
// const dbCon = require("./db-con");
// let formidable=require("express-formidable");
// let cors=require("cors");

// let app=express();
// app.use(formidable());
// app.use(cors());
// app.listen(5001);

// app.get("/getapi",(req,res)=>createServerCallback(req,res));
// function createServerCallback(req,res){
//     res.write("Welcome to express server");
//     res.end();
// }

// app.get("/getregister",(req,res)=>registerCallback(req,res));
// async function registerCallback(req,res){
//     console.log("Register API called");
//     let data=await dbCon.getRegister();
//     res.write(JSON.stringify(data));
//     res.end();
// }

// app.post("/saveregister",(req,res)=>saveRegisterCallback(req,res));
// async function saveRegisterCallback(req,res){
//     console.log("Save Register API called");
//     let data=await dbCon.saveRegister(req.fields.Name,req.fields.PhoneNumber,req.fields.Email,req.fields.Country,req.fields.Password);
//     res.end();
// }

// app.post("/checkuser",(req,res)=> checkLoggedInuserCallback(req,res));
// async function checkLoggedInuserCallback(req,res) {
// console.log("check user API called");
// let data = await dbCon.checkLoggedInUser(req.fields.Email,req.fields.Password);
// res.end(JSON.stringify(data));
// }

// app.get("/getproduct",(req,res)=>productCallback(req,res));
// async function productCallback(req,res){
//     console.log("Product API called");
//     let data=await dbCon.getProduct();
//     res.write(JSON.stringify(data));
//     res.end();
// }

// app.post("/saveproduct",(req,res)=>saveProductCallback(req,res));
// async function saveProductCallback(req,res){
//     console.log("Save Product API called");
//     let data=await dbCon.saveProduct(req.fields.ProductName,req.fields.NewPrice,req.fields.OldPrice,req.fields.ProductOffer,req.fields.ProductImage);
//     res.end();

// }

// //create get api for wishlist
// app.get("/getwishlistproducts/:userId",(req, res)=>wishlistcallback(req,res));
// async function wishlistcallback(req, res){
//    console.log("get wishlist  Api called" + req.params.userId);
//    let data = await dbCon.getwishlist(req.params.userId);
//    res.write(JSON.stringify(data));
//    res.end();
// }

// app.post("/savewishlist", async (req, res) => {
//     console.log("wishlist api called" + req.fields.productId,req.fields.userId);
//     let data = await dbCon.addtoWishlist(req.fields.productId,req.fields.userId);
//     res.redirect("http://localhost:3000/wishlist");
//     res.end();
// });

// app.get("/getcartproducts/:userId",(req, res)=>addtoCartcallback(req,res));
// async function addtoCartcallback(req, res){
//    console.log("get cart Api called" + req.params.userId);
//    let data = await dbCon.getcart(req.params.userId);
//    res.write(JSON.stringify(data));
//    res.end();
// }

// app.post("/savecart", async (req, res) => {
//     console.log("cart api called" + req.fields.productId,req.fields.userId);
//     let data = await dbCon.addtocart(req.fields.productId,req.fields.userId);
//     res.redirect("http://localhost:3000/addtocart");
//     res.end();
// });


// app.get("/wishlistcount/:userId",(req,res)=>WishlistCount(req,res));
// async function WishlistCount(req,res){
//     console.log("wishlist count save API called"+req.params.userId);
//     let data=await dbCon.WishlistCount(req.params.userId);
//     res.write(JSON.stringify(data));
//     res.end();
    
// }

// app.get("/cartcount/:userId",(req,res)=>CartCount(req,res));
// async function CartCount(req,res){
//     console.log("cart count save API called"+req.params.userId);
//     let data=await dbCon.CartCount(req.params.userId);
//     res.write(JSON.stringify(data));
//     res.end();  
// }

// app.get("/cartsum/:userId",(req,res)=>CartSum(req,res));
// async function CartSum(req,res){
//     console.log("cart sum save API called"+req.params.userId);
//     let data=await dbCon.CartSum(req.params.userId);
//     res.write(JSON.stringify(data));
//     res.end();  
// }

// app.post("/deletewishlistitem",(req,res)=>deleteWishlistItem(req,res));
// async function deleteWishlistItem(req,res){
//     console.log("wishlist save API called");
//     let data=await dbCon.deleteWishlistItem(req.fields.productId);
//     res.end();
// }

// app.post("/deletecartitem",(req,res)=>deleteCartItem(req,res));
// async function deleteCartItem(req,res){
//     console.log("cart save API called");
//     let data=await dbCon.deleteCartItem(req.fields.productId);
//     // res.redirect("http://localhost:3000/addtocart");
//     res.end();
// }


// app.post("/searchitem",(req,res)=>SearchProduct(req,res));
// async function SearchProduct(req,res){
//     console.log("search items API called");
//     let data=await dbCon.SearchProduct(req.fields.ProductName);
//     // res.redirect("http://localhost:3000/addtocart");
//     res.write(JSON.stringify(data));
//     res.end();
// }

// app.post("/editprofile",(req,res)=>EditProfile(req,res));
// async function EditProfile(req,res){
//     console.log("search items API called");
//     let data=await dbCon.EditProfile(req.fields.Name,req.fields.PhoneNumber,req.fields.Email,req.fields.Country,req.fields.id);
//     res.redirect("http://localhost:3000/dashboard");
//     res.end();
// }

// app.get("/getseller",(req,res)=>sellerCallback(req,res));
// async function sellerCallback(req,res){
//     console.log("Seller API called");
//     let data=await dbCon.getSeller();
//     res.write(JSON.stringify(data));
//     res.end();
// }


// app.post("/saveseller",(req,res)=>saveSellerCallback(req,res));
// async function saveSellerCallback(req,res){
//     console.log("Save Seller API called");
//     let data=await dbCon.saveSeller(req.fields.OwnerName,req.fields.BusinessName,req.fields.Email,req.fields.UserName,req.fields.Password,req.fields.Category);
//     res.end();

// }

// app.post("/checkseller",(req,res)=> checkLoggedInsellerCallback(req,res));
// async function checkLoggedInsellerCallback(req,res) {
// console.log("check seller API called");
// let data = await dbCon.checkLoggedInSeller(req.fields.Email,req.fields.Password);
// res.end(JSON.stringify(data));
// }


// app.get("/products/:id",(req,res)=>ProductsCallback(req,res));
// async function ProductsCallback(req,res){
//     try{
//         console.log("products api called");
//         let data=await dbCon.getProducts(req.params.id);
//         res.write(JSON.stringify(data));
//         res.end();

//     }catch(e){
//         console.log(e.message)
//         return res.status(500).json({message:"Internal Server Error"})
//     }
// }

const express = require("express");
const cors = require("cors");
const dbCon = require("./db-con");

const app = express();
app.use(express.json());  // Use express.json() instead of formidable
app.use(cors());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Default Route
app.get("/", (req, res) => res.send("Welcome to Express Server"));

// User Registration
app.get("/getregister", async (req, res) => {
    try {
        let data = await dbCon.getRegister();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/saveregister", async (req, res) => {
    try {
        const { Name, PhoneNumber, Email, Country, Password } = req.body;
        await dbCon.saveRegister(Name, PhoneNumber, Email, Country, Password);
        res.status(201).json({ message: "User Registered Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User Login
app.post("/checkuser", async (req, res) => {
    try {
        const { Email, Password } = req.body;
        let data = await dbCon.checkLoggedInUser(Email, Password);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Products
app.get("/getproduct", async (req, res) => {
    try {
        let data = await dbCon.getProduct();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/saveproduct", async (req, res) => {
    try {
        const { ProductName, NewPrice, OldPrice, ProductOffer, ProductImage } = req.body;
        await dbCon.saveProduct(ProductName, NewPrice, OldPrice, ProductOffer, ProductImage);
        res.status(201).json({ message: "Product Saved Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Wishlist
app.get("/getwishlistproducts/:userId", async (req, res) => {
    try {
        let data = await dbCon.getwishlist(req.params.userId);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/savewishlist", async (req, res) => {
    try {
        const { productId, userId } = req.body;
        await dbCon.addtoWishlist(productId, userId);
        res.status(201).json({ message: "Added to Wishlist" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/deletewishlistitem", async (req, res) => {
    try {
        await dbCon.deleteWishlistItem(req.body.productId);
        res.json({ message: "Wishlist Item Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cart
app.get("/getcartproducts/:userId", async (req, res) => {
    try {
        let data = await dbCon.getcart(req.params.userId);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/savecart", async (req, res) => {
    try {
        const { productId, userId } = req.body;
        await dbCon.addtocart(productId, userId);
        res.status(201).json({ message: "Added to Cart" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/deletecartitem", async (req, res) => {
    try {
        await dbCon.deleteCartItem(req.body.productId);
        res.json({ message: "Cart Item Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
