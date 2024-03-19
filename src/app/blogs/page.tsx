import BlogSection from "@/components/blogs/BlogSection";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

type BlogsProps = {
  searchParams: { [k: string]: string | string[] | undefined };
};
const Blogs = async ({ searchParams }: BlogsProps) => {
  const page = searchParams.page ?? "1";

  const client = getClient();
  const { data } = await client.query({
    query: getBlogPosts,
    variables: { page: +page },
  });

  return (
    <main>
      <BlogHero />
      <BlogSection data={data} />
    </main>
  );
};
export default Blogs;
