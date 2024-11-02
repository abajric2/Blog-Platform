import { getPost } from "@/utils/api";

interface PostProps {
  params: Promise<{ slug: string }>;
}

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;

  const post = await getPost(slug);

  console.log(post, params);

  return <div>Post</div>;
};

export default Post;
