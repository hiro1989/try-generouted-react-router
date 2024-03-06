import { Link } from "../../router"

export default function Posts() {
  return (
    <div>
      <h3>Hello /posts/!</h3>
      <ul>
        <li>
          <Link
            to="/posts/:id"
            params={{
              id: "apollo-11",
            }}
          >
            Apollo 11
          </Link>
        </li>
        <li>
          <Link
            to="/posts/:id"
            params={{
              id: "apollo-12",
            }}
          >
            Apollo 12
          </Link>
        </li>
        <li>
          <Link
            to="/posts/:id"
            params={{
              id: "apollo-13",
            }}
          >
            Apollo 13
          </Link>
        </li>
      </ul>
    </div>
  )
}
