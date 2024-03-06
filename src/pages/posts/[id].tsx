import { useParams } from "../../router"

export default function PostsPostId() {
  const { id } = useParams("/posts/:id")
  return <div>Hello /posts/{id}! </div>
}
