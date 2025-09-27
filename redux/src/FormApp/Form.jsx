import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAction, formSubmitAction } from "../Redux/actions/formAction";

const Form = () => {
  const inputvalue = useSelector((state) => state.forms.input);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(inputAction(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue.length > 0) {
      dispatch(formSubmitAction(inputvalue));
    }else{
      alert("input is empty")
    }
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={(e) => handleInput(e)}
        value={inputvalue}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        {" "}
        submit form
      </button>
      <p>form input value {inputvalue}</p>
    </form>
  );
};

export default Form;
