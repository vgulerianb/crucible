import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehype from "rehype-raw";
import { GithubButton } from "../../components/GithubButton";
import CopyComp from "@/app/components/Copy";
import { prisma } from "../../../prisma/db";

async function getBlog(id: string) {
  const generations = await prisma.generations.findFirst({
    where: {
      session_id: id,
    },
    select: {
      blog: true,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 1,
  });
  return generations?.blog || undefined;
}

export default async function Tweet({ params }: { params: { id: string } }) {
  const blog = await getBlog(params?.id);
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full flex items-center flex-col max-w-[900px] gap-[16px] mt-[32px]">
        <div className="flex justify-between w-full">
          <h1 className="text-[28px] font-semibold text-center">
            Generated Blog
          </h1>
          <GithubButton />
        </div>

        <div className="w-full cursor-pointer bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn whitespace-break-spaces">
          {blog ? (
            <>
              <CopyComp text={blog} />
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehype]}
                className={`markdownHolder`}
              >
                {blog}
              </ReactMarkdown>
            </>
          ) : (
            <>
              Blog not found. If you believe this is an error, please try
              refreshing the page or raise an issue on Github.
            </>
          )}
        </div>
      </div>
    </div>
  );
}
