import { Routes, Route, BrowserRouter} from "react-router-dom";
import { useState } from 'react';

import Home from "./page/Home";
import About from "./page/About";
import Category from "./page/Category";
import Tag from "./page/Tag";
import Archive from "./page/Archive";
import Post from "./page/Post";
import Edit from "./page/Edit";
import Login from "./page/Login";
import OAuth from "./page/OAuth";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/about"  element={<About searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/categories" element={<Category searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/tags" element={<Tag searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/archives" element={<Archive searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/posts/:postId" element={<Post searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/edit" element={<Edit searchResults={searchResults} setSearchResults={setSearchResults} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/oauth2/code/:platform" element={<OAuth/>} />
      </Routes>
    </BrowserRouter>
  );
}