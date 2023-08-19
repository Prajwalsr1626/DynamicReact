import React, { useEffect, useState } from 'react';

function DynamicForm({ filedData }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    // Convert filedData object to initialFields array
    const initialFields = Object.keys(filedData).map((fieldName) => {
      const field = filedData[fieldName];
      return {
        ...field,
        name: fieldName,
      };
    });

    // Update fields state with initialFields
    setFields(initialFields);
  }, [filedData]);

  const addField = () => {
    const newField = {
      label: `Field ${fields.length + 1}`,
      type: 'text',
      value: '',
      name: `Field${fields.length + 1}`,
    };
    setFields([...fields, newField]);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  return (
    <div>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input
              type={field.type}
              value={field.value}
              onChange={(event) => handleInputChange(index, event)}
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
