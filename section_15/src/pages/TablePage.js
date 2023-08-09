import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500'},
    { name: 'Apple', color: 'bg-red-500'},
    { name: 'Banana', color: 'bg-yellow-500'},
    { name: 'Lime', color: 'bg-green-500'},

  ]

  return (
    <div>
      <Table data={data}/>
    </div>
  );
}

export default TablePage;
