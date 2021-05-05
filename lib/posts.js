import fetch from 'node-fetch'
const apiUral = "http://jsonplaceholder.typicode.com/posts"

export async function getAllPostsData(){
  const res = await fetch(new URL(apiUral))
  const posts = res.json()
  return posts
}
