import Layout from '../../component/layout'
import { getIds, getPostById } from '../../lib/posts'


export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    }
}

export default function Post({ post }) {
    console.log(post)
    return (
        <Layout>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Layout>
    )
}