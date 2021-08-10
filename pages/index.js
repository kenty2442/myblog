import Link from 'next/link'
import Layout from '../component/layout'
import { getPosts } from '../lib/posts'

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout pageTitle={'Home'}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ul>
        {
          posts.map(({ title }) => {
            return <li>
              <Link href="#">
                <a>
                  {title}
                </a>
              </Link>
            </li>
          })
        }
      </ul>
    </Layout >
  )
}
