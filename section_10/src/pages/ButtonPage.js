import { GoBell, GoCopilot, GoEyeClosed } from 'react-icons/go';

import Button from '../components/Button.js';

function ButtonPage () {
  const handleClick = () => {
    console.log('Click!')
  }

  return (
    <div>
      <div>
        <Button success onClick={handleClick} className='mb-5' >Click Me!</Button>
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

export default ButtonPage;
