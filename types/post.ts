import { Comment } from "./comment"

export type Post = {
  title: string
  comments?: Comment[]
}
