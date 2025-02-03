export interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: Date;
  userEmail: string;
}
