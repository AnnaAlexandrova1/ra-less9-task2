import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Post({ post }) {
    const navigate = useNavigate();

    const hancleClick = () => {
        navigate(`/posts/${post.id}`)
    }

    return (
        <div className="post" onClick={hancleClick}>
            <div className='post__date'>Дата создания: {post.created}</div>
            <div className='post__content'>{post.content}</div>
        </div>
    )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    created: PropTypes.number,
    content: PropTypes.string,
  })
};