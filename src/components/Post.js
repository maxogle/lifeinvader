import { useState } from 'react'

const Post = ({post}) => {
    const [likes, setLikes] = useState(0)
    return(
        <div className="post">
            <img className="post-img" src={post.image} />
            <p className="post-content">Posted by {post.username} ♥︎ {likes} likes</p>
            <button onClick={() => { setLikes(likes + 1)} }>like
             <i class="fa-solid fa-heart"></i>
            </button>
        <p>{post.content}</p>
    </div>
    )
}

export default Post