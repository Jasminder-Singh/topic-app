import mongoose, { Schema } from "mongoose";
const dataSchema = new mongoose.Schema({
    title : {type:String,require:true},
    description : {type:String, require:true},
    date : {type:Date, default : Date.now()}
},{timestamps:true});

const dataModel = mongoose.models.Topic || mongoose.model("Topic",dataSchema);
export default dataModel;