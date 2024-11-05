import React from "react";
import { fetchPosts } from "@/utils/api";
import PostCard from "@/components/PostCard/PostCard";
import PaginationControls from "@/components/PaginationControls/PaginationControls";
import { Post } from "@/types/post";

interface PostsPageProps {
  searchParams: Promise<{ page?: string }>;
}

const PostsPage = async ({ searchParams }: PostsPageProps) => {
  const params = await searchParams;

  const page = parseInt(params.page || "1", 10);
  const limit = 8;

  const { posts, totalPages } = await fetchPosts(page, limit);

  return (
    <div className="px-10 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationControls currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default PostsPage;
