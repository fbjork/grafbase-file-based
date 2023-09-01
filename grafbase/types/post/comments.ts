import { Post } from '../post'
import { Comment } from '../comment'

export default function Comments(post: Post): Comment[] {
  return [{ message: "Hello, World" }]
}
