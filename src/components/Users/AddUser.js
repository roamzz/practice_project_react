import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredUsername, setenteredUsername] = useState('');
  const [enteredAge, setenteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername);
    console.log(enteredAge);
    console.log(enteredName);

    //reset the form
    setenteredUsername('');
    setenteredAge('');
    setEnteredName('');
  };
  const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>name</label>
        <input id='name' type='text' value={enteredName} onChange={nameChangeHandler} />
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
