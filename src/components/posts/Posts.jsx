import React from 'react';
import { useQuery } from 'react-query';
import PostSearch from './PostSearch';
import './Posts.css';

async function fetchPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.json();
}

export function Posts({ user }) {
  const { data, isError, error, isLoading } = useQuery(['posts', user.id], () =>
    fetchPosts(user.id)
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <div>
        <div>
          <PostSearch data={data} />
        </div>
      </div>
    </>
  );
}
