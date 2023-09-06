import { Post } from '../type'
import { Comment } from '../../comment/type'

export function Resolver(post: Post): Comment[] {
  return [{ message: `Hello, ${post.title}!` }]
}
