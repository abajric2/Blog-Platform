import React from "react";
import { fetchPosts } from "@/utils/api";
import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/types/post";

const PostsPage = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="px-10 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
