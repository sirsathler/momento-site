import CSS from './feed.scss'
import Post from './post/post'

import { fetchFeed } from './feedService'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../global/contexts/Auth'
import { useEffect } from 'react'




export default function Feed() {
    const authProvider = useContext(AuthContext)
    const [feed, setFeed] = useState([])

    useEffect(() => {
        const feedFetcher = async () => {
            const feedList = await fetchFeed(authProvider.token)
            setFeed(feedList)
        }

        feedFetcher()
    }, [])



    return (
        <div className="page feed-page generic-container">
            <div className="feed-container">
                {
                    feed.map(postInfo => {
                        return <Post post={postInfo} />
                    })
                }
            </div>
        </div>
    )
}