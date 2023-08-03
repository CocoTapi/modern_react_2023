import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'srge',
      label: "Dodger's favorite food",
      content: 'Dodger likes to drink chicken soup. '
    },
    {
      id: 'ower',
      label: "Dodger's favorite toy",
      content: 'Dodger likes to drink chicken soup. '
    },
    {
      id: 'qwer',
      label: "Dodger's medication",
      content: 'Dodger likes to drink chicken soup. '
    },
    {
      id: 'zxcc',
      label: "Dodger's routine",
      content: 'Dodger likes to drink chicken soup. '
    }
  ]

  return (
    <Accordion items={items}/>
  );
}

export default App;
