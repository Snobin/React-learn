import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const handleClick=()=>{
    setCount(count+1);
  }
  return <div>
    <button onClick={handleClick}> Add animal</button>
    <div>
      Number of count:{count}
    </div>
  </div>
}

export default App;
