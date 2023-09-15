import { Post } from "../../types/post"
import { Comment } from "../../types/comment"

export function Resolver(post: Post): Comment[] {
  return [{ message: `Hello, ${post.title}!` }]
}
