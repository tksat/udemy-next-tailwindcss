import Layout from '../components/Layout'
import {getAllPostsData} from "../lib/posts"
import Post from "../components/Post"

const Blog = ({posts}) => {
  return (
    <Layout title="blog" >
      <ul>
        {posts.map(post => <Post key={post.id} post={post} /> )}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(){
  const posts = await getAllPostsData()
  return {
    props: {posts}
  }
}

export default Blog
