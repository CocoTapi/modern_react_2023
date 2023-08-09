import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 4},
    { name: 'Cherry', color: 'bg-red-500', score: 5},
    { name: 'Banana', color: 'bg-yellow-500', score: 3},
    { name: 'Lime', color: 'bg-green-500', score: 9},

  ];

  const config = [
    { label: 'Name' },
    { label: 'Color' },
    { label: 'Score' }
  ];

  return (
    <div>
      <Table data={data} config={config}/>
    </div>
  );
}

export default TablePage;
