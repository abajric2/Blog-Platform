import { getPost } from "@/utils/api";
import React from "react";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post: React.FC<PostProps> = async ({ params }) => {
  const { slug } = await params;

  const post = await getPost(slug as string);

  console.log(post);

  return <div>Post</div>;
};

export default Post;
