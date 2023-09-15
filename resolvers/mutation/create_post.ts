import { Post } from "../../types/post"

type PostCreateInput = {
  title: string
}

export function Resolver(input: PostCreateInput): Post {
  return { title: input.title }
}
