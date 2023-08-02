import { GoBell, GoCopilot, GoEyeClosed } from 'react-icons/go';

import Button from './Button.js';

function App() {
  return (
    <div>
      <div>
        <Button success ><GoBell/>Click Me!</Button>
      </div>
      <div>
        <Button danger outline >Buy Now!</Button>
      </div>
      <div>
        <Button secondary><GoCopilot/>See Deal!</Button>
      </div>
      <div>
        <Button primary outline>Go to a Cart</Button>
      </div>
      <div>
        <Button warning rounded><GoEyeClosed />Hide Ads!</Button>
      </div>
    </div>
  );
}

export default App;
