import React from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import UserIcon from "./user.svg";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-[#fcfcfc] shadow-gray-300 shadow-md overflow-hidden p-4">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={
            post.image ||
            "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-blue-700 text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-3">{post.description}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <Image className="mr-2 w-4" src={UserIcon} alt="User Icon" />
        <span>{post.userEmail}</span>
      </div>
      <div className="text-gray-400 text-xs mt-2">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default PostCard;
