import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={ styles.userLink }>
      <img 
        className={ styles.avatar }
        src="https://cdn.dribbble.com/users/824641/avatars/mini/28f65a0185635892bc0f04c388693056.jpg?1434190094"
        alt="avatar"
      /> 

      <a href="#user-url" className={ styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
