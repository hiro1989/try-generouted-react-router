import { Link, useParams } from "../../../router"

export default function PostsPostId() {
  const { id } = useParams("/posts/:id")
  return (
    <div>
      <div>Hello /posts/{id}!</div>
      <div>
        <Link
          to="/posts/:id/comments/:commentId"
          params={{
            id,
            commentId: Math.random().toString(36).substring(7),
          }}
        >
          See random comments
        </Link>
      </div>
    </div>
  )
}
