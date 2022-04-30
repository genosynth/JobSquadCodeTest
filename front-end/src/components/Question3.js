import React, { useState, useEffect } from 'react';
import axios from 'axios';


// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];


function Question3() {
  const [allCountries, updateAllCountries] = useState([])
  // the value of the search field 

  const getAllCountries = async()=>{
      
    await axios.get('http://192.168.0.145:5000/app/filterAll')
    .then((response) => {
      //console.log(response.data)
      updateAllCountries(response.data)
  
    })
  }

  useEffect(()=> {
    getAllCountries()
   //getArticles()
  }, [])

  
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(allCountries);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = allCountries.filter((user) => {
        return user.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(allCountries);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="question">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user} className="user">
              
              <span className="user-name">{user}</span>
             
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Question3;