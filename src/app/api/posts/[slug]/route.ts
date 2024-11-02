import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
};
