import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    contact : {
        type : String,
        required : true,
    },
    password : {
        type: String, 
        required : true
    }, 
    gender : {
        type: String,
        default : "Not Specified"
    },
    country : {
        type : String, 
        default : "Not Specified"
    },
    address: [{
       state : {
        type:String,
        default :'',
       },
       city : {
        type:String,
        default:''
       },
       pincode : {
        type:String,
        default:''
       },
       phone:{
        type:String,
        default:''
       },
       fulladdress: {
        type:String,
        default:''
       }
    }],
    paymentMethods: [{
        paymentName: {
            type: String,
            default : "MaestroCard"
        },
        cardNumber: {
            type: String,
            default : ""
        },
        date : {
            type:String,
            default: ""
        },
        cvc : {
            type:String,
            default:""
        },
        name :{
            type : String,
            default :""
        }
    }]
})

const User =  mongoose.model("Users", userSchema);
export default User;