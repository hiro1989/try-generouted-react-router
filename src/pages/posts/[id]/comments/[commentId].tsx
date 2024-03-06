import { useParams } from "../../../../router"

export default function PostsPostIdCommentId() {
  const { id, commentId } = useParams("/posts/:id/comments/:commentId")
  return (
    <div>
      Hello /posts/{id}/comments/{commentId}!
    </div>
  )
}
