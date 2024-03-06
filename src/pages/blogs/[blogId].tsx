import { useParams } from "../../router"

export default function BlogsBlogId() {
  const { commentId, id } = useParams("/posts/:id/comments/:commentId")
  return (
    <div>
      Oops! id: {id ?? "undefined"}, commentId: {commentId ?? "undefined"}
    </div>
  )
}
