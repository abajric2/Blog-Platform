import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
