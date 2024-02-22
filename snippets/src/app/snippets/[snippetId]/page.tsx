import Link from "next/link"
import { notFound } from "next/navigation"

import { db } from "@/db"
import * as actions from '@/actions'

interface ViewSnippetPageProps {
    params: {
        snippetId: string,
    }
}

const ViewSnippetPage = async (props: ViewSnippetPageProps) => {
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.snippetId)
        }
    })
    if (!snippet) {
        return notFound()
    }

    const deleteSnippetAction = actions.deleteSnippetCode.bind(null, snippet.id);
    return (
        <div className="h-screen">
            <div className="flex text-4xl my-4 h-[5%]">
                <p className="flex-1  ">{snippet.title}</p>
                <div className="flex gap-10">
                    <Link href={`${snippet.id}/edit`} className="border-2 rounded-lg px-4">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button className="border-2 rounded-lg px-4 py-[2px]">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="text-2xl bg-slate-100 px-2 border-4 rounded-lg max-h-[90%] overflow-y-auto">
                {snippet.code}
            </pre>
        </div>
    )
}

export default ViewSnippetPage