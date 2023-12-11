import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetItemPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetItemPage(props: SnippetItemPageProps) {
  const { id } = props.params;

  const snippetData = await db.snippet.findFirst({ where: { id: +id } });

  if (!snippetData) {
    return notFound();
  }

  return (
    <div>
      <h2 className="font-bold mb-1 text-green-400">{snippetData.title}</h2>
      <label htmlFor="code" className="text-xs opacity-30">
        Code
      </label>
      <p className="border p-4" id="code">
        {snippetData.code}
      </p>
    </div>
  );
}
