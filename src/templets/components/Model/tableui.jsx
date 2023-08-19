import Table from "react-bootstrap/Table";

const columndata = ["Id", "Registers", "Capacitors", "Diodes"];

const Tabledata = [
  {
    id: 1,
    Registers: {
      Flip_Flops: 10,
      Latches: 20,
      Counters: 10,
    },
    Capacitors: {
      Electrolytic_Capacitors: 10,
      Ceramic_Capacitors: 11,
      Tantalum_Capacitors: 30,
      Variable_Capacitors: 40,
    },
    Diodes: {
      Light_Emitting_Diodes: 50,
      Zener_Diodes: 30,
      Schottky_Diodes: 50,
    },
  },
  {
    id: 2,
    Registers: {
      Flip_Flops: 10,
      Latches: 20,
      Counters: 10,
    },
    Capacitors: {
      Electrolytic_Capacitors: 10,
      Ceramic_Capacitors: 11,
      Tantalum_Capacitors: 30,
      Variable_Capacitors: 40,
    },
    Diodes: {
      Light_Emitting_Diodes: 50,
      Zener_Diodes: 30,
      Schottky_Diodes: 50,
    },
  },
  {
    id: 3,
    Registers: {
      Flip_Flops: 10,
      Latches: 20,
      Counters: 10,
    },
    Capacitors: {
      Electrolytic_Capacitors: 10,
      Ceramic_Capacitors: 11,
      Tantalum_Capacitors: 30,
      Variable_Capacitors: 40,
    },
    Diodes: {
      Light_Emitting_Diodes: 50,
      Zener_Diodes: 30,
      Schottky_Diodes: 50,
    },
  },
];

function TableUi() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columndata.map((columndata, index) => (
            <th key={index}>{columndata}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Tabledata.map((tabledata, index) => {
          return (
            <tr key={index}>
            <td>{tabledata.id}</td>
            <td>{JSON.stringify(tabledata.Capacitors).replace(/[{},"]/g, "\n")}</td>
            <td>{JSON.stringify(tabledata.Registers).replace(/[{},"]/g, "\n")}</td>
            <td>{JSON.stringify(tabledata.Diodes).replace(/[{},"]/g, "\n")}</td>
            </tr>
          );
        })}

        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableUi;
