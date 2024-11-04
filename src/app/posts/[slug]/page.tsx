import { getPost } from "@/utils/api";
import Image from "next/image";
import { Post as PostType } from "@/types/post";
import { notFound } from "next/navigation";

interface PostProps {
  params: Promise<{ slug: string }>;
}

const PostDetails = async ({ params }: PostProps) => {
  const { slug } = await params;
  const post: PostType | null = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full py-32 px-10">
      <div className="flex flex-col md:flex-row w-3/4">
        <div className="w-full md:w-1/2 h-auto relative">
          <Image
            src={
              post.image ||
              "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="max-h-72 min-h-56"
          />
        </div>
        <div className="flex flex-col p-6 w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <div className="text-gray-500 text-sm mb-4">
            <span>Posted by {post.userEmail}</span> •{" "}
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="w-3/4 mt-28 text-gray-700 prose prose-lg">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetails;
