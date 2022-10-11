import React from 'react';
import { useNavigate } from "react-router-dom";
import Post from '../Post/Post';
import useFetch from '../../service/useFetch';
import links from '../../service/link';

export default function Main() {
  const [posts] = useFetch(`http://localhost:7777/posts`);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/posts/new');
  }
    
  return (
    <div className="main-grud">
      <div className="main-grud__header">
        <button className="main-grud__add-post" onClick={handleAdd}>Создать пост</button>
      </div>
      {posts && posts.map((post) =>
        <Post key={post.id} post={post} />
      )}
    </div>
  );
}