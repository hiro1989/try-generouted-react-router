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
        {/* <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link> */}
      </div>
      <hr />
      <Outlet />
    </>
  )
}
