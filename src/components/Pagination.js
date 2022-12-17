import React from "react";

function Pagination({ posts, postsPerPage, post , currentPage}) {
	const lastPosition = currentPage * postsPerPage;
	const firstPosition = lastPosition - postsPerPage;
  return (
	<>
    <table>
      <tr>
        {Object.keys(post).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {posts.slice(firstPosition,lastPosition).map((post) => {
        return (
          <tr>
            {Object.keys(post).map((key) => {
              return <td>{post[key]}</td>;
            })}
          </tr>
        );
      })}
    </table>
	</>
  );
}

export default Pagination;
