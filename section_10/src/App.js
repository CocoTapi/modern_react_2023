import Button from './Button.js';

function App() {
  return (
    <div>
      <div>
        <Button success >Click Me!</Button>
      </div>
      <div>
        <Button danger rounded outline >Buy Now!</Button>
      </div>
      <div>
        <Button secondary>See Deal!</Button>
      </div>
      <div>
        <Button primary outline>Go to a Cart</Button>
      </div>
      <div>
        <Button warning rounded>Hide Ads!</Button>
      </div>
    </div>
  );
}

export default App;
