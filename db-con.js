// const mysqldb=require("mysql2");
// const con=mysqldb.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Admin$123",
//     database:"safecart"
// });

// function startConnection(){
//     con.connect((err)=>{
//         if(err)
//             throw(err);
//         console.log("connected");
//     })
// }

// async function getRegister(){
//     startConnection();
//     const query=`select * from register`;
//     const data=await con.promise().query(query);
//     return data[0];
// }

// async function saveRegister(Name,PhoneNumber,Email,Country,Password){
//     startConnection();
//     const query=`insert into register(Name,PhoneNumber,Email,Country,Password) values('${Name}','${PhoneNumber}','${Email}','${Country}','${Password}')`;
//     await con.promise().query(query);
//     return true;
// }

// async function checkLoggedInUser(Email,Password) {
//     startConnection();
//     const query = `select id,Name,PhoneNumber,Email,Country,Password from register
//     where Email='${Email}' and Password='${Password}'`;
//     const data = await con.promise().query(query);
//     return data[0];
// }

// async function getProduct(){
//     startConnection();
//     const query=`select * from products`;
//     const data=await con.promise().query(query);
//     return data[0];
// }

// async function saveProduct(ProductName,NewPrice,OldPrice,ProductOffer,ProductImage){
//     startConnection();
//     const query=`insert into products(ProductName,NewPrice,OldPrice,ProductOffer,ProductImage) values('${ProductName}','${NewPrice}','${OldPrice}','${ProductOffer}','${ProductImage}')`;
//     await con.promise().query(query);
//     return true;
// }

// async function getwishlist(userId){
//     startConnection();
//     const query=`select distinct *  from products as p join wishlist as w on p.id=w.productId and userId='${userId}';`;
//     const data = await con.promise().query(query);
//     return data[0];
// }

// async function addtoWishlist(productId,userId){
//     startConnection();
//     let data=await con.promise().query(`insert into wishlist(productId,userId) values ('${productId}','${userId}')`)
//     return data[0];
// }

// async function getcart(userId){
//     startConnection();
//     const query=`select distinct *  from products as p join addtocart as a on p.id=a.productId and userId='${userId}';`;
//     const data = await con.promise().query(query);
//     return data[0];
// }

// async function addtocart(productId,userId){
//     startConnection();
//     let data=await con.promise().query(`insert into addtocart(productId,userId) values ('${productId}','${userId}')`)
//     return data[0];
// }

// async function WishlistCount(userId){
//     startConnection();
//     let data=await con.promise().query(`select count(*) as wishlistcount from wishlist where userId='${userId}'`);
//     console.log("count wishlist items")
//     return data[0];
// }

// async function CartCount(userId){
//     startConnection();
//     let data=await con.promise().query(`select count(*) as cartcount from addtocart where userId='${userId}'`);
//     console.log("count cart items")
//     return data[0];
// }

// async function CartSum(userId){
//     startConnection();
//     let data=await con.promise().query(`select sum(NewPrice) as total from products join addtocart on products.id=addtocart.productId where userId='${userId}'`);
//     console.log("sum of cart items")
//     return data[0];
// }

// async function deleteWishlistItem(productId){
//     startConnection();
//     let data=await con.promise().query(`delete from wishlist where productId='${productId}'`);
//     console.log("delete wishlist item")
//     return data[0];
// }

// async function deleteCartItem(productId){
//     startConnection();
//     let data=await con.promise().query(`delete from addtocart where productId='${productId}'`);
//     console.log("delete cart item")
//     return data[0];
// }

// async function SearchProduct(ProductName){
//     startConnection();
//     let data=await con.promise().query(`select * from products where ProductName like '%${ProductName}%'`);
//     console.log("searched items")
//     return data[0];
// }

// async function EditProfile(Name,PhoneNumber,Email,Country,id){
//     startConnection();
//     let data=await con.promise().query(`update register set Name = '${Name}',PhoneNumber='${PhoneNumber}', Email = '${Email}', Country = '${Country}' where id='${id}' `);
// }

// async function getSeller(){
//     startConnection();
//     const query=`select * from seller`;
//     const data=await con.promise().query(query);
//     return data[0];
// }

// async function saveSeller(OwnerName,BusinessName,Email,UserName,Password,Category){
//     startConnection();
//     const query=`insert into seller(OwnerName,BusinessName,Email,UserName,Password,Category) values('${OwnerName}','${BusinessName}','${Email}','${UserName}','${Password}','${Category}')`;
//     await con.promise().query(query);
//     return true;
// }

// async function checkLoggedInSeller(Email,Password) {
//     startConnection();
//     const query = `select id,OwnerName,BusinessName,Email,UserName,Password,Category from seller
//     where Email='${Email}' and Password='${Password}'`;
//     const data = await con.promise().query(query);
//     return data[0];
// }
// async function getProducts(id){
//     startConnection();
//     const query=`SELECT * FROM products where id =${id} `;
//     const data=await con.promise().query(query);
//     return data[0]; 
// }

// module.exports={
//     getRegister:async()=>getRegister(),
//     saveRegister:async(Name,PhoneNumber,Email,Country,Password)=>saveRegister(Name,PhoneNumber,Email,Country,Password),
//     getProduct:async()=>getProduct(),
//     saveProduct:async(ProductName,NewPrice,OldPrice,ProductOffer,ProductImage)=>saveProduct(ProductName,NewPrice,OldPrice,ProductOffer,ProductImage),
//     checkLoggedInUser:async(Email,Password)=>checkLoggedInUser(Email,Password),
//     getwishlist:async(userId)=>getwishlist(userId),
//     addtoWishlist:async(productId,userId)=>addtoWishlist(productId,userId),
//     getcart:async(userId)=>getcart(userId),
//     addtocart:async(productId,userId)=>addtocart(productId,userId),
//     WishlistCount:async(userId) => WishlistCount(userId),
//     CartCount:async(userId) => CartCount(userId),
//     CartSum:async(userId) => CartSum(userId),
//     deleteWishlistItem:async(productId)=>deleteWishlistItem(productId),
//     deleteCartItem:async(productId)=>deleteCartItem(productId),
//     SearchProduct:async(ProductName)=>SearchProduct(ProductName),
//     EditProfile:async(Name,PhoneNumber,Email,Country,id)=>EditProfile(Name,PhoneNumber,Email,Country,id),
//     getSeller:async()=>getSeller(),
//     saveSeller:async(OwnerName,BusinessName,Email,UserName,Password,Category)=>saveSeller(OwnerName,BusinessName,Email,UserName,Password,Category),
//     getProducts:async(id)=>getProducts(id),
//     checkLoggedInSeller:async(Email,Password)=>checkLoggedInSeller(Email,Password)
// }

const mysql = require("mysql2");

const con = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Admin$123",
    database: process.env.DB_NAME || "safecart",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

// Get Registered Users
async function getRegister() {
    const [data] = await con.query("SELECT * FROM register");
    return data;
}

// Save User Registration
async function saveRegister(Name, PhoneNumber, Email, Country, Password) {
    await con.query("INSERT INTO register (Name, PhoneNumber, Email, Country, Password) VALUES (?, ?, ?, ?, ?)", 
        [Name, PhoneNumber, Email, Country, Password]);
}

// User Login
async function checkLoggedInUser(Email, Password) {
    const [data] = await con.query("SELECT id, Name, PhoneNumber, Email, Country FROM register WHERE Email=? AND Password=?", 
        [Email, Password]);
    return data;
}

// Get Products
async function getProduct() {
    const [data] = await con.query("SELECT * FROM products");
    return data;
}

// Save Product
async function saveProduct(ProductName, NewPrice, OldPrice, ProductOffer, ProductImage) {
    await con.query("INSERT INTO products (ProductName, NewPrice, OldPrice, ProductOffer, ProductImage) VALUES (?, ?, ?, ?, ?)", 
        [ProductName, NewPrice, OldPrice, ProductOffer, ProductImage]);
}

// Get Wishlist
async function getwishlist(userId) {
    const [data] = await con.query("SELECT p.* FROM products p JOIN wishlist w ON p.id = w.productId WHERE w.userId = ?", 
        [userId]);
    return data;
}

// Add to Wishlist
async function addtoWishlist(productId, userId) {
    await con.query("INSERT INTO wishlist (productId, userId) VALUES (?, ?)", 
        [productId, userId]);
}

// Delete Wishlist Item
async function deleteWishlistItem(productId) {
    await con.query("DELETE FROM wishlist WHERE productId = ?", [productId]);
}

// Get Cart
async function getcart(userId) {
    const [data] = await con.query("SELECT p.* FROM products p JOIN addtocart a ON p.id = a.productId WHERE a.userId = ?", 
        [userId]);
    return data;
}

// Add to Cart
async function addtocart(productId, userId) {
    await con.query("INSERT INTO addtocart (productId, userId) VALUES (?, ?)", 
        [productId, userId]);
}

// Delete Cart Item
async function deleteCartItem(productId) {
    await con.query("DELETE FROM addtocart WHERE productId = ?", [productId]);
}

module.exports = {
    getRegister,
    saveRegister,
    checkLoggedInUser,
    getProduct,
    saveProduct,
    getwishlist,
    addtoWishlist,
    deleteWishlistItem,
    getcart,
    addtocart,
    deleteCartItem
};
