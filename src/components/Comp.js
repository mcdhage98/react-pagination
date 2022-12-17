import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Comp() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      setPost(response.data[0]);
    });
  },[]);

  let noOfPages = Math.ceil(posts.length/postsPerPage);
  let buttons = [];

  for(let i=1;i<=noOfPages;i++){
	buttons.push(<button key={i} onClick={()=> setCurrentPage(i)}>{i}</button>)
  }

  return (
    <div>
      <Pagination posts={posts} post={post} postsPerPage={postsPerPage} currentPage={currentPage}/>
	  {buttons}
    </div>
  );
}

export default Comp;
