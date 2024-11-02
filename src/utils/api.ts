import { Post } from "@/app/posts/types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPost = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
