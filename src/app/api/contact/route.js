import clientPromise from "@/lib/mongodb";
import User from "../../../lib/model.js"

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("egovtDB");

    const result = await db.collection("contacts").insertOne({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      createdAt: new Date(),
    });

    return Response.json({
      success: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error("MongoDB Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}