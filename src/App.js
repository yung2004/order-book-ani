import React from 'react';
import logo from './logo.svg';
import './App.css';
import OrderBook from './components/orderbook.components';

function App() {
  return (
    
    <div className="App">
        <div className='title'>Order Book</div>
        <div className='IntroText'>
        Here demostrate simple order book operations.
        This implmenet using reactjs and element is animated using TransitionGroup and CSSTransition.
        </div>
        <OrderBook>
        </OrderBook>
    </div>
  );
}

export default App;
