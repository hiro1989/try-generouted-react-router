import { Outlet } from "react-router-dom"
import { Link } from "../router"

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link
          to="/blogs/:blogId"
          params={{
            blogId: Math.random().toString(36).substring(7),
          }}
        >
          RandomBlog
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}
