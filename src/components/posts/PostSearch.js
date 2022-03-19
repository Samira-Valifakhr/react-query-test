import React, { useState } from 'react';

export default function PostSearch({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='search...'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {data &&
        data
          .filter((post, index, array) => {
            if (searchTerm === '') {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post, key) => {
            return (
              <div key={key}>
                <p>{post.title}</p>
              </div>
            );
          })}
    </div>
  );
}
