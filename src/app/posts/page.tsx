import { fetchPosts } from "@/utils/api";
import React from "react";

const PostsPage = async () => {
  const posts = await fetchPosts();

  console.log(posts);
  return <div>PostsPage</div>;
};

export default PostsPage;
