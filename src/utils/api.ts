import { Post } from "@/types/post";

export const fetchPosts = async (
  page = 1,
  limit = 8
): Promise<{ posts: Post[]; totalPages: number }> => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/posts?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
      cache: "no-store",
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to fetch post.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const createPost = async (
  title: string,
  description: string,
  content: string,
  image?: string
) => {
  try {
    const response = await fetch(`/api/posts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, content, image }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create post.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
