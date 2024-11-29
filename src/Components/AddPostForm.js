import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST, UPDATE_POST } from "../GraphQL/mutations";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST, GET_POSTS } from "../GraphQL/queries";

function AddPostForm() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const {
    data: postData,
    loading: postLoading,
    error: postError,
  } = useQuery(GET_POST, {
    variables: { id: parseInt(params.id) },
    skip: !params.id,
  });

  const [addPost, { data: addData, loading: addLoading, error: addError }] =
    useMutation(ADD_POST, {
      refetchQueries: [GET_POSTS],
    });
  const [
    updatePost,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_POST);

  useEffect(() => {
    if (postData) {
      setTitle(postData.post.title);
      setAuthor(postData.post.author);
      setContent(postData.post.content);
    }
  }, [postData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updatePost({
        variables: {
          id: parseInt(params.id),
          title: title,
          content: content,
          author: author,
        },
      });
    } else {
      addPost({
        variables: {
          title: title,
          content: content,
          author: author,
        },
      });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {params.id ? <h2>Update Post</h2> : <h2>Create post </h2>}
      <input
        className="input-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <input
        className="input-author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Post author"
      />
      <textarea
        className="input-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write content"
      />
      <input
        className="btn blue-btn"
        type="submit"
        value={params.id ? "Edit" : "Add"}
      />
    </form>
  );
}

export default AddPostForm;
