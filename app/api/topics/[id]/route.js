import connectDB from "@/libs/conect";
import dataModel from "@/models/data";
import { NextResponse } from "next/server";
export async function PUT(req,{params}){
    try{
        const {id} = params;
        const {newTitle,newDescription} = await req.json();
    
        await connectDB();
        await dataModel.findByIdAndUpdate(id,{$set : {title : newTitle,description : newDescription}});
        return NextResponse.json({message : "success"},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"Failed"},{status:500});
    }
}
export async function GET(req,{params}){
    try{
        const {id} = params;
        await connectDB();
        const result = await dataModel.findById(id);
        return NextResponse.json({message : "success",result},{status : 200});
    }catch(err){
        console.log(err);
        return NextResponse.json({message : "failed"},{status : 500});
    }
}