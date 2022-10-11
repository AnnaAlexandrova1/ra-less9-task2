import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import AddPost from './components/AddPost/AddPost'
import PostView from './components/AddPost/AddPost';
import Main from './components/Main/Main';
import useFetch from './service/useFetch';

import './App.css';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostView />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
