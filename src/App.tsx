import React, { useState } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import BalanceCard from './component/BalanceCard';

function App() {
  const [displayCategory, setDisplayCategory] = useState('Ethereum')
  
  return (
    <div className="App">
      <Sidebar setDisplayCategory={setDisplayCategory} displayCategory={displayCategory}/>
      <BalanceCard  displayCategory={displayCategory} />
    </div>
  );
}

export default App;
