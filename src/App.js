import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import Users from './components/Users/Users';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHanlder = (uName, uSurname, uAge) => {

    setUsersList((prevUserList) =>  {
        return [...prevUserList, {name: uName, surname: uSurname, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHanlder} />
      <Users users={usersList} />
    </div>
  );
}

export default App;
