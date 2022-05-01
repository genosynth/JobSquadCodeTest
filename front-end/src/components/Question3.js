import React, { useState, useEffect } from 'react';
import axios from 'axios';



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
      const results = allCountries.filter((country) => {
        return country.toLowerCase().startsWith(keyword.toLowerCase());
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