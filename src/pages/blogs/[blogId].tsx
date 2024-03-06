import { useParams } from "../../router"

export default function BlogsBlogId() {
  const { blogId } = useParams("/blogs/:blogId")
  return <div>Hello /blogs/{blogId}!</div>
}
