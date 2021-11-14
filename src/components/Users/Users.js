import React from 'react';
import Card from '../UI/Card';
import styles from './Users.module.css';

const Users = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname} ({user.age} years old).
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
