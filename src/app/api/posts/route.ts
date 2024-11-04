import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const posts = await prisma.post.findMany({
      skip,
      take: limit,
    });

    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({ posts, totalPages }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
