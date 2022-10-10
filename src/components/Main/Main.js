import useFetch from "../../service/useFetch"
import { useNavigate } from 'react-router-dom'
import links from "../../service/link"
import Post from "../Post/Post"

export default function Main() {

    const [posts] = useFetch(`${links}/posts`)
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/posts/new')
    }

    return (
        <div className='main'>
            <div className="main-header">
                <button className="main-header__add-post" onClick={handleAdd}>Добавить пост</button>
            </div>
            {posts && posts.map((item) => <Post key={item.id} post={item} />)}
        </div>
    )
    
}