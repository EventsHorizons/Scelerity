import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { blogMdxComponents } from "@/components/blog/mdx-components";

type Props = {
  source: string;
};

export async function ArticleBody({ source }: Props) {
  return (
    <div className="article-prose mx-auto max-w-[42rem]">
      <MDXRemote
        source={source}
        components={blogMdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
