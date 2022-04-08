import { useState } from 'react'

const Post = ({post}) => {
    const [likes, setLikes] = useState(0)
    return(
        <div>
        <img src={post.image} height="250" width="250"/>
        <p>Posted by {post.username} ™ {likes} likes</p>
        <button onClick={() => { setLikes(likes + 1)} }>fuck</button>
        <p>{post.content}</p>
    </div>
    )
}

export default Post