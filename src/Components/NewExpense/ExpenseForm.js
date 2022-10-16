import React, { useState } from "react";
import "./ExpenseForm.css";
import RequiredField from "./RequiredField";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState(" ");
  const [enteredAmount, setenteredAmount] = useState(" ");
  const [enteredDate, setenteredDate] = useState(" ");

  const titleChangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setenteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setenteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTitle === " ") setenteredTitle("");
    if (enteredAmount === " ") setenteredAmount("");
    if (enteredDate === " ") setenteredDate("");
    if (
      enteredTitle === " " ||
      enteredAmount === " " ||
      enteredDate === " " ||
      enteredTitle === "" ||
      enteredAmount === "" ||
      enteredDate === ""
    );
    else {
      const obj = {
        title: enteredTitle.toLocaleUpperCase(),
        amount: enteredAmount,
        date: new Date(enteredDate),
        id:(new (Date)).getTime() 
      };

      props.FromNewExpense(obj);

      setenteredAmount(" ");
      setenteredDate(" ");
      setenteredTitle(" ");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form-input">
          <label className="expense-form-label">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} className='input-field' 
          ></input>
          <RequiredField data={enteredTitle}></RequiredField>
        </div>
        <div className="expense-form-input">
          <label className="expense-form-label">
            Amount <span className="required">*</span>
          </label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.1"
            step="0.1"
            placeholder="Enter Amount " className='input-field' 
          ></input>
          <RequiredField data={enteredAmount}></RequiredField>
        </div>
        <div className="expense-form-input">
          <label className="expense-form-label">
            Date <span className="required">*</span>
          </label>
          <input
            type="date"
            className='input-field' 
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
          <RequiredField data={enteredDate}></RequiredField>
        </div>
      </div>
      <div className="expense-form-button">
        <button type="submit" className="btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};



export default ExpenseForm;
