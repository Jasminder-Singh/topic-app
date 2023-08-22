import dataModel from "@/models/data.js";
import { NextResponse } from "next/server";
import connectDB from "@/libs/conect.js";

export async function GET(req, res) {
    try {
        await connectDB();
        const result = await dataModel.find();

        return NextResponse.json({ result }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Failed" }, { status: 500 });

    }
}
export async function POST(req) {
    try {
        
        const { title, description } = await req.json();
        await connectDB();
        await dataModel.create({ title, description });
        return NextResponse.json({ message: "Ok" }, { status: 201 });


    } catch (error) {
        console.log("Error " + error);
        return NextResponse.json({ message: "Failed" }, { status: 500 });

    }
}
export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id");
        await connectDB();
        const result = await dataModel.findByIdAndDelete(id);
        return NextResponse.json({ message: "Success", result }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Failed" }, { status: 500 });
    }
}