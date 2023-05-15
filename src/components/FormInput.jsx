import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, error, onChange, id, ...inputProps } = props;

  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="formInput ">
      {/* <label>{props.placeholder}</label> */}
      <label>{label}</label>
      <input
        // ref={props.inputRef}
        // type="text"
        // name={props.name}
        // placeholder={props.placeholder}
        // onChange={(e) => props.setUsername(e.target.value)}
        {...inputProps}
        onChange={onChange}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        onBlur={handleFocus}
        focused={focus.toString()}
      />
      <span>{error}</span>
    </div>
  );
};

export default FormInput;
