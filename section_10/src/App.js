import Button from './Button.js';

function App() {
  return (
    <div>
      <div>
        <Button success >Click Me!</Button>
      </div>
      <div>
        <Button danger >Buy Now!</Button>
      </div>
      <div>
        <Button secondary>See Deal!</Button>
      </div>
      <div>
        <Button primary>Go to a Cart</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
    </div>
  );
}

export default App;
