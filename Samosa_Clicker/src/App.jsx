import './App.css';
import {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10){
      setMultiplier(2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100){
      setMultiplier(1);
      setMultiplier(5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000){
      setMultiplier(1);
      setMultiplier(10);
      setCount(count - 1000);
    }
  }

  


  return (
    <div className="App">
      <div className='Header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="images/5f21f44671c393e69f38edd1b592e016.png" alt="" className='samosa' onClick={updateCount}/>
      </div>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>	10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App