import React from 'react';
import { createRoot } from 'react-dom/client';



class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);

    this.state = {
      count: 0,
    };
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0  
      };
    })
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}



function CounterDisplay({ count }) {
  if(count === 0) {
    return <p>{count}</p>
  }
  if(count % 5 === 0 && count % 7 ===0) {
    return <p>FizzBuzz</p>
  }
  if(count % 5 === 0) {
    return <p>Fizz</p>
  }
  if(count % 7 === 0) {
    return <p>Buzz</p>
  }

  return <p>{count}</p>;
}

function IncreaseButton({increase}) {
  return (
    <div>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}

function ResetButton({reset}) {
  return (
    <div>
      <button onClick={reset}>- Reset</button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
