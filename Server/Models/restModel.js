import mongoose from "mongoose";


const dishSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required: true,
    },
    image : {type: String, required: true}
})

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    image : {type : String, required: true},
    dishes : [dishSchema],
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
})

const dealSchema = new mongoose.Schema({
    discount : {
        type : Number,
        required: true,
    },
    restaurant: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required : true
    },
    categoryName : {
        type: String,
        required : true
    },
    image:{
        type: String,
        required : true
    }
})

const reviewSchema = new mongoose.Schema({
    customerName : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        min:1,
        max:5
    },
    date: {
        type : String,
        required : true
    },
    review : {
        type : String,
        required : true
    }
})

const restSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
      type : String,
      required : true
    },
    contact : {
        type : String,
        required : true
    },
    website : String,
    customerReviews : [reviewSchema],
    image : {
        type : String,
        required : true
    }
})

const Restaurant = mongoose.model("Restaurant", restSchema);
const Category = mongoose.model("Categories", categorySchema);
const Deal = mongoose.model('Deals', dealSchema);
export {Restaurant, Category, Deal}