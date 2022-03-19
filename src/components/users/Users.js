import React from 'react';
import UserSearch from './UserSearch';
import './Users.css';

export function Users() {
  return (
    <div className='app__user ' data-test='users-display'>
      <div className='app__wrapper_user'>
        <UserSearch data-test='users-search' />
      </div>
    </div>
  );
}
