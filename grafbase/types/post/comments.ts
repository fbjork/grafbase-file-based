import { Post, Comment } from './grafbase/generated'

export default function Comments(post: Post): Comment[] {
  return [{ message: `Hello, ${post.title}!` }]
}
