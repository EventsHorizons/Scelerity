declare module "reading-time" {
  type ReadingTimeResults = {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };

  export default function readingTime(
    text: string,
    options?: { wordsPerMinute?: number },
  ): ReadingTimeResults;
}

declare module "mdx/types" {
  import type { ComponentProps, JSX, ReactNode } from "react";

  type MDXProps = {
    children?: ReactNode;
    [key: string]: unknown;
  };

  export type MDXComponents = {
    [key: string]:
      | keyof JSX.IntrinsicElements
      | ((props: MDXProps & ComponentProps<"div">) => ReactNode);
  };
}
