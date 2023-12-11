import { db } from "@/db";
import Link from "next/link";

export default async function HomePage() {
  const data = await db.snippet.findMany();

  console.log(data);

  return (
    <div>
      <h1 className="pb-6">Home Page</h1>
      <section>
        <h2>All Snippets</h2>
        <ul className="flex flex-col gap-10">
          {data.map((snippet) => {
            return (
              <Link href={`/snippets/${snippet.id}`}>
                <li className="p-4 border rounded" key={snippet.id}>
                  <h3 className="border-b font-bold mb-4">{snippet.title}</h3>
                  <p>{snippet.code}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
