import Form from "react-bootstrap/Form";
import DynamicForm from "./DynamicComponent";
import { useState } from "react";

function SelectOption() {
  const [option, setOnption] = useState(false);
  const [filed, setFields] = useState([]);

    const filedData = {
      Registers: {
        Flip_Flops:{ label: 'Flip_Flops', type: 'text', value: '' },
        Latches: { label: 'Latches', type: 'text', value: '' },
        Counters: { label: 'Counters', type: 'text', value: '' },
      },
      Capacitors: {
        Electrolytic_Capacitors:{ label: 'Electrolytic_Capacitors', type: 'text', value: '' } ,
        Ceramic_Capacitors: { label: 'Ceramic_Capacitors', type: 'text', value: '' },
        Tantalum_Capacitors:{ label: 'Tantalum_Capacitors', type: 'text', value: '' },
        Variable_Capacitors: { label: 'Variable_Capacitors', type: 'text', value: '' },
      },
      Diodes: {
        Light_Emitting_Diodes: { label: 'Light_Emitting_Diodes', type: 'text', value: '' },
        Zener_Diodes: { label: 'Zener_Diodes', type: 'text', value: '' },
        Schottky_Diodes: { label: 'Schottky_Diodes', type: 'text', value: '' },
      },
    }

  const onSelectHandler = (event) => {
    setOnption(false);
    console.log(event.target.value);
    console.log(filedData[event.target.value]);
    setFields(filedData[event.target.value])
    setOnption(true);
  };

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => onSelectHandler(e)}
      >
        <option disabled selected value="">
          Open this select menu
        </option>
        <option value="Registers">Registers</option>
        <option value="Capacitors">Capacitors</option>
        <option value="Diodes">Diodes</option>
      </Form.Select>
      {option === true && <DynamicForm filedData={filed}></DynamicForm>}
    </>
  );
}

export default SelectOption;
