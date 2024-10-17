import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
 const [name,setName] = useState("")
 function handleonchange(event){
  setName(event.target.value)
 }
 function add() {
  // Ensure there's a name before sending the request
  if (!name) {
    alert("Please enter a name");
    return;
  }
 
  fetch('http://localhost:5005/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name, // Send 'name' directly instead of wrapping it in 'body'
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      // Clear the input after successful submission
      //setName("");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
 }
 

  return (
    <div className="App">
      <h1>HALLO</h1>
      <p>name:</p>
      <input type="text" value={name} onChange={handleonchange}/>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
