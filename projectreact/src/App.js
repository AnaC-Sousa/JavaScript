import React, {useState} from 'react';
import Tweet from './Tweet';


function App(){

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John Snow', message: 'Winter is coming'},
    {name: 'traversy', message: 'Im awesome'}

  ])
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}


export default App;