const userModel = require('../model/user.model');

// npm i jsonwebtoken(for installing this package)
const jwt = require("jsonwebtoken");



async function registerUser(req, res) {
    const { username, email, password } = req.body;

    const user = await userModel.create({ username, email, password });

    /*jwt.sign humy token create kr ky deti hai, lakin token create krny ky liye isy 2 cheezen chaiyen
    1- jo bhi data ho wo us specific user ka ho
    2- jo bhi token data generate ho wo unique hona chaiye
    */

    // Token generate yahan ho raha hai
    // jwt.sign(payload, secretKey). Sign function 2 arguments leta hai,
    // payload , or sath secret key, jo hm ny .env mn store ki hai.
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET )

    /*  - Token ko hm response mn show nahi krty, is ky liye hm cookie storage use krty hain
        - cookie storage ka admin access hota hai server ky pass
        - cookie storage kja use krny ky liye hm aik package install krty hain, jis ki command hai [npm i cookieparser]
        - cookie parser package ko as a middleware app.js mn use kr rahy hon gy
    */



    /*
    so, cookie hm ny kioun use kiya hai?
    cookie storage is liye use krty hain kioun ky server ky pass cookie storage ka direct access hota hai, 
     */
    res.cookie("token", token);

    res.status(201).json({
        message: "User Generated Successfully",
        user,
    })
}

module.exports = {
    registerUser
};