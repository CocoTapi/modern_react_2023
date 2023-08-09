function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>
  })

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>{column.render(fruit)}</td>
      )
    });

    return (
      <tr className="border-b" key={fruit.name}>
        {renderedCells}
      </tr>
    );

    // return (
    //   <tr className="border-b" key={fruit.name}>
    //     <td className="p-3">{config[0].render(fruit)}</td>
    //     <td className="p-3">{config[1].render(fruit)}</td>
    //     <td className="p-3">{config[2].render(fruit)}</td>
        
    //   </tr>
    // )
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>);
}

export default Table;
