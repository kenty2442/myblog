import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postDirPath = path.join(process.cwd(), 'posts')

export function getPosts() {
    const postNames = fs.readdirSync(postDirPath)

    return postNames.map((postName) => {
        const postPath = path.join(postDirPath, postName)
        const result = matter(fs.readFileSync(postPath, 'utf8'))

        return result.data
    })
}

export function getIds() {
    const postNames = fs.readdirSync(postDirPath)

    return postNames.map(postName => {
        return {
            params: {
                id: postName.replace(/\.md$/, '')
            }
        }
    })
}



export function getPostById(id) {
    const postPath = path.join(postDirPath, `${id}.md`)

    const result = matter(fs.readFileSync(postPath, 'utf8'))

    return {
        id,
        ...result.data,
        content: result.content
    }
}