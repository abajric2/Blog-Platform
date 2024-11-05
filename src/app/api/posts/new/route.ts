import prisma from "@/utils/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/authOptions";

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .slice(0, 100);
};

const createUniqueSlug = async (slug: string) => {
  let uniqueSlug = slug;
  let count = 1;

  while (await prisma.post.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${count}`;
    count++;
  }

  return uniqueSlug;
};

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, description, content, image } = await req.json();

  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required." },
      { status: 400 }
    );
  }

  const slug = generateSlug(title);
  const uniqueSlug = await createUniqueSlug(slug);

  const newPost = await prisma.post.create({
    data: {
      title,
      description,
      content,
      image,
      slug: uniqueSlug,
      userEmail: session.user.email,
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
