import { Router } from "express";
import User from "../Models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { validationSignIn, validationSignUp } from "../middlewares/validation.js";
import authentication from "../middlewares/authentication.js";

export const userRouter = Router();


userRouter.post("/signin", validationSignIn , async (req, res)=>{

    const body = req.body;
    try {
        const user = await User.findOne({email : body.email});
        if(!user){
            return res.json({msg : "User not registered", success: false});
        }
        const checkpassword = await bcrypt.compare(body.password, user.password);
        if(checkpassword){
            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
            return res.status(200).json({msg : "Sign-In successful", token : token, success: true});
        }
        else{
            return res.json({msg : "Incorrect Password", success : false});
        }
    } catch (error) {
        return res.json({msg : "unexpected error occured", success : false});
    }   
})

userRouter.post("/signup", validationSignUp, async (req, res)=>{
    const {name, contact, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    try {
        await User.create({name, contact, password: hashedPassword, email});
        return res.status(200).json({msg : "User Registered", success : true});
    } catch (error) {
        return res.status(400).json({msg : error.message, success : false});
    }
})

userRouter.post("/paymentMethod", authentication, async (req, res)=>{
    const {name, cardNumber, date, cvc} = req.body;
    const userId = req.userId;

    try {
        await User.findByIdAndUpdate(userId,{
            $push: {
              paymentMethods: { name: name, cardNumber: cardNumber, date, cvc}
            }
          });
          return res.status(200).json({msg : "Payment Method Added", success : true});
        
    } catch (error) {
        return res.status(400).json({msg : "Oops! An error Occured", success : false});
    }
})

userRouter.put("/paymentMethod", authentication, async (req, res)=>{
    const {name, cardNumber, date, cvc, payid} = req.body;
    const userId = req.userId;

    try { await User.updateOne({ _id:userId, "paymentMethods._id" : payid}, { $set: {  "paymentMethods.$.name": name,
        "paymentMethods.$.cardNumber": cardNumber,
        "paymentMethods.$.date": date,
        "paymentMethods.$.cvc": cvc}});
      
          return res.status(200).json({msg : "Payment Method Updated", success : true});
        
    } catch (error) {
        return res.status(400).json({msg : "Oops! An error Occured", success : false});
    }
})

userRouter.get("/payment", authentication, async (req, res)=>{
    const userId = req.userId;
    try {
        const data = await User.findById(userId, 'paymentMethods');
        return res.status(200).json({msg : "Data Found", success: true, paymentMethods : data});
    } catch (error) {
        return res.json({msg : "Oops! An error occured." , success : false});
    }
} )

userRouter.get("/profile", authentication, async(req, res)=>{
    const userId = req.userId;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.json({msg:"No such User exists", success: false});
        }
        return res.json({msg : "User Found", success : true, user : user});
    } catch (error) {
        return res.json({msg : "Oops! An error Occured", success: false});
    }
})

userRouter.put("/profile", authentication, async(req, res)=>{
    const {name, email, gender, country} = req.body;
    const userId = req.userId;
    try {
        const user = await User.findByIdAndUpdate(userId, {$set :{name, email, gender, country}});
        if(!user){
            return res.json({msg:"No such User exists", success: false});
        }
        return res.json({msg : "User Found", success : true, user : user});
    } catch (error) {
        return res.json({msg : "Oops! An error Occured", success: false});
    }
})

userRouter.post("/address", authentication, async(req, res)=>{
    const userId = req.userId;
    console.log(userId);
    const {state, city, pincode, phone, fulladdress} = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId,{$push :{address:{state, city, pincode, phone, fulladdress}}}, {new:true, useFindAndModify: false});
        if(!user){
            return res.json({msg:"No such User exists", success: false});
        }
        return res.json({msg:"Document Updated", user:user, success:true});
    } catch (error) {
        return res.json({msg : "Oops! An error Occured", success: false});
    }

})