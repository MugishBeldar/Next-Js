import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const data = await db.snippet.findMany();
  const snippets = data.map(snippet => {
    return (
      <div className="flex border-2 text-2xl px-2 rounded-lg" key={snippet.id}>
        <h1 className="flex-1 flex flex-col justify-center ">{snippet.title}</h1>
        <Link
          href={`snippets/${snippet.id}`}
          key={snippet.id}
          className="">
          <p className="px-4 py-2 border-4 my-2 rounded-lg">View</p>
        </Link>
      </div>
    )
  })
  return (
    <>
      <div className="flex my-3">
        <h1 className="flex flex-col justify-center flex-1 text-4xl">Snippets</h1>
        <Link
          href={`snippets/new`}
        >
          <p className="flex flex-col justify-center text-4xl border-4 px-4 py-2 mb-2 rounded-lg">New</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 my-6">{snippets}</div>
    </>
  );
}
