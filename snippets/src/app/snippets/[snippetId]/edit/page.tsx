import { db } from "@/db"
import { SnippetEditForm } from "@/components"

interface SnippetEditPageProps {
    params: {
        snippetId: string,
    }
}
const SnippetEditPage = async (props: SnippetEditPageProps) => {
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.snippetId)
        }
    })
    return (
        <div className="mt-2">
            {
                snippet &&
                <SnippetEditForm snippet={snippet} />
            }

        </div>
    )
}

export default SnippetEditPage