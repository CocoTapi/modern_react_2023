import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'srge',
      label: "Dodger's favorite food",
      content: "Dodger likes homemade chicken soup and can's tsuna flakes"
    },
    {
      id: 'ower',
      label: "Dodger's favorite toy",
      content: 'Dodger likes blue shark toy. '
    },
    {
      id: 'qwer',
      label: "Dodger's medication",
      content: 'Dodger takes a pill of atopica with pill helper treats 2 consecutive days and one no pill day.'
    },
    {
      id: 'zxcc',
      label: "Dodger's food routine",
      content: 'Dodger eats breakfast at 7am, lunch at noon, first dinner at 5pm, the second dinner with owners, snack and pill at 10pm, and night snack at 12pm. '
    }
  ]

  return (
    <Accordion items={items}/>
  );
}

export default App;
