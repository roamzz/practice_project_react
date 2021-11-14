import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredUsername, setenteredUsername] = useState('');
  const [enteredAge, setenteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredName.trim().length === 0
    ) {
      setError({
        title: 'Invllid input name',
        message: 'Please enter a value',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invllid input age',
        message: 'Please enter a value age',
      });
      return;
    }

    props.onAddUser(enteredName, enteredUsername, enteredAge);

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

  const closeErrorModalHandler = () => {
    setError(null);
    console.log('on close handler');
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseErrorModal={closeErrorModalHandler}
          title={error.title}
          message={error.message}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='name'>name</label>
          <input
            id='name'
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
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
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
