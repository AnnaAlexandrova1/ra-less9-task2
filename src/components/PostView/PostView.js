import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../service/useFetch";
import {useState} from 'react'
import Post from "../Post/Post";
import Form from "../Form/Form";
import links from "../../service/link";

export default function PostView() {
    const [isEdit, setEdit] = useState(false);
    const [posts] = useFetch(`${links}/posts`, isEdit);
    const navigate = useNavigate();
    let { id } = useParams()

    const handleDelete = () => {
        fetch(`${links}/posts/${id}`,
            {
                method: 'DELETE',
            }
        ).then(() => {
            navigate('/')
        })
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSubmit = (text) => {
        const fetchBody = { id: Number(id), content: text }
        
        fetch(`${links}/posts`,
      {
        method: 'POST',
        body: JSON.stringify(fetchBody),
      })
      .then(() => {
        navigate('/');
      });
    }

    const handleClose = () => {
        setEdit(false)
    }

    return (
        <div className='post-view'>
            {posts && ((
        !isEdit &&
        <div>
          <div className="post-view__close" onClick={() => navigate('/')}>X</div>
          <Post post={posts.find((post) => post.id === Number(id))} />
          <div className="post-view__wrap">
            <div className="post-view__edit" onClick={handleEdit}>Изменить</div>
            <div className="post-view__delete" onClick={handleDelete}>Удалить</div>
          </div>
        </div>
      ) || (
          isEdit &&
          <div>
            <Form
              post={posts.find((post) => post.id === Number(id))}
              onSubmit={handleSubmit}
              onClose={handleClose}
            />
          </div>
        ))
      }
        </div>
    )
}