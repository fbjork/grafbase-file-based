import { Post } from './grafbase/generated'

type PostCreateInput = {
  title: string
}

export default function PostCreate(input: PostCreateInput): Post {
  return { title: input.title }
}
