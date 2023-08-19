import React from "react";

export default function input({ name, label, error,accept,value,disabled, ...rest })
{
  return (
    <section className="from-group">
    {labels[0] != "" ?<label htmlFor={label}>{labels[0]}</label>:""}
      <input 
       {...rest}
       value={value}
       name={name}
       id={name}
       accept={accept}
       className="form-control"
       placeholder={labels[1]}
       disabled={disabled}
      />    
    </section>
  );
}
