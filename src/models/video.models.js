import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{timestamps:true})