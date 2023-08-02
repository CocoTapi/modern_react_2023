import { GoBell, GoCopilot, GoEyeClosed } from 'react-icons/go';

import Button from './Button.js';

function App() {
  const handleClick = () => {
    console.log('Click!')
  }

  return (
    <div>
      <div>
        <Button success onClick={handleClick} >Click Me!</Button>
      </div>
      <div>
        <Button danger rounded outline ><GoBell />Buy Now!</Button>
      </div>
      <div>
        <Button secondary outline >See Deal!</Button>
      </div>
      <div>
        <Button primary><GoEyeClosed />Go to a Cart</Button>
      </div>
      <div>
        <Button warning rounded outline><GoCopilot />Hide Ads!</Button>
      </div>
    </div>
  );
}

export default App;
