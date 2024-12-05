import { Router } from "express";
import authentication from "../middlewares/authentication.js";
import {Restaurant, Category, Deal} from "../Models/restModel.js";

export const restRouter = Router();


restRouter.get("/", async(req, res)=>{
    try {
        const restaurants = await Restaurant.find({});
        return res.status(200).json({msg : "successfull", restaurants : restaurants, success : true});
    } catch (error) {
        return res.status(403).json({msg : "Oops! an error occured", success: false});
    }
})

restRouter.get("/categories",  async(req, res)=>{
    try {
        const categories = await Category.find({}).select('name image');
        return res.json({msg :"Categories fetched successfully", success: true, categories: categories});
    } catch (error) {
        return res.json({msg : "Oops! an error occured", success:false});
    }
})

restRouter.get("/deals" , async (req, res)=>{
    try {
        const deals = await Deal.find({});
        return res.json({msg :"Deals fetch Successful", deals : deals, success: true});
    } catch (error) {
        return res.json({msg : "Error in fetching data", success: false});
    }
})


restRouter.get("/:id",authentication, async (req, res)=>{
    const restId = req.params.id;
    try {
        const restaurant = await Restaurant.findById(restId);
        return res.status(200).json({msg : "successful operation", restaurant : restaurant, success: true});
    } catch (error) {
        return res.status(403).json({msg : "Oops! an error occured", success : false});
    }
})

restRouter.post("/create", async(req, res)=>{
    const {name, address, contact, website, image, Custreview} = req.body;

    try {
        await Restaurant.create({
            name, address, contact, website, image, customerReviews:Custreview
        })
        console.log("Done");
    } catch (error) {
        console.log("issue: in Catch");
    }
})

restRouter.put("/addReview", async(req, res)=>{
    const {id, Custreview} = req.body;

    try {
       await Restaurant.findByIdAndUpdate(id, { $push: { customerReviews: Custreview } });
        console.log("Done");
    } catch (error) {
        console.log("issue: in Catch");
    }
})

restRouter.post("/category", async(req, res)=>{
    const {name, image, restaurant, dishses} = req.body;
    try {
        await Category.create({name, image, restaurant, dishes:dishses});
        console.log("category added")
    } catch (error) {
        console.log("from category catch")
    }
})

restRouter.get("/category/:id", authentication , async(req, res)=>{
    const restId = req.params.id;
    try {
        const menu = await Category.find({restaurant:restId});
        return res.json({msg:'successful', menu :menu, success : true});
    } catch (error) {
        console.log("from category catch")
    }
})