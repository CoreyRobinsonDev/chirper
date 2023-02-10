export type User = {
  displayName: string | null,
  email: string | null,
  phoneNumber: string | null,
  photoURL: string | null,
  uid: string | null
}

export type Post = {
  content?: string,
  media?: string,
  created_at: string,
  num_bookmarks: number,
  num_likes: number,
  num_dislikes: number,
  num_comments: number,
  poster_id: string,
  id: string
}