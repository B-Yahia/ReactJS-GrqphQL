import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_POSTS } from "../GraphQL/queries";
import { DELETE_POST } from "../GraphQL/mutations";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { data } = useQuery(GET_POSTS);
  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [GET_POSTS],
  });
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (postId) => {
    deletePost({
      variables: { id: parseInt(postId) },
    });
  };

  const navigateToUpdatePage = (postId) => {
    const Link = "/add/" + postId;
    navigate(Link);
  };

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data]);
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(({ id, title, content, author }) => (
        <div key={id} className="card">
          <h3 className="card-title">{title}</h3>
          <p className="card-content">{content}</p>
          <small className="card-author">By {author}</small>
          <div className="card-btns">
            <button className="btn red-btn" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <button
              className="btn blue-btn"
              onClick={() => navigateToUpdatePage(id)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Posts;
