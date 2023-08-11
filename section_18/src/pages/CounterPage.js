import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';


function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    event.preventdefault();
    const value = event.target.value;
    
    console.log(value)
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input 
        value={valueToAdd || ''}
          onChange={handleChange}
          type='number' 
          className='p-1 m-3 bg-grey-50 border border-grey-300' />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
