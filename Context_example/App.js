import './App.css';
import Display from './Display';
import GetName from './GetName';
import { useState, createContext } from 'react';

export const AppContext=createContext(null);

function App() {
  
   const [name,setName]=useState('');
  
  return (
    <div>
      <h1>use Probs for data transfer </h1>
      <AppContext.Provider value={{name,setName}}>
      <GetName />
      <Display />
      </AppContext.Provider>
      

    </div>
    );
   
}

export default App;
