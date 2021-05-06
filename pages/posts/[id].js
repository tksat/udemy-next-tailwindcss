import Link from 'next/link'
import Layout from '../../components/Layout'
import {getAllPostsIds, getPostData } from '../../lib/posts'

export default function Post({ post }){
  if(!post){
    return <div>Loading...</div>
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">{"ID : "}{post.id}</p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          ブログ一覧へ戻る
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = await getAllPostsIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }){
  const { post } = await getPostData(params.id)

  return {
    props: {
      post,
    }
  }
}
