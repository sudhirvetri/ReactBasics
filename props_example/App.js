import './App.css';
import Display from './Display';
import GetName from './GetName';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('');
  
  return (
    <div>
      <h1>use Probs for data transfer </h1>
      <GetName setName= {setName}></GetName>

      <Display name= {name} />

    </div>
    );
   
}

export default App;
