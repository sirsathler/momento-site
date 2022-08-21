import CSS from './feed.scss'
import Post from './post/post'

export default function Feed() {
    return (
        <div className="page feed-page generic-container">

            <div className="feed-container">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}