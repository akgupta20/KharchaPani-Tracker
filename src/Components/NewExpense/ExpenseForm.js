import React, { useState } from "react";
import "./ExpenseForm.css";
import RequiredField from "./RequiredField";

const isStringContainOnlySpaces = ourstr => {
  for (let i = 0; i < ourstr.length; i++)
    if (ourstr[i] !== ' ')
      return 0;
   return 1;// 1means containing
}

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  let today_date = `${new Date().getFullYear()}-${new Date().toLocaleString("en-india", { month: "2-digit", })}-${new Date().getDate()}`;
  const [enteredDate, setenteredDate] = useState(today_date);
  const [RequiredEnteredAmount, setRequiredEnteredAmount] = useState('not-blank');
  const [RequiredEnteredTitle, setRequiredEnteredTitle] = useState('not-blank');



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
    
    if (enteredAmount ==='')
      setRequiredEnteredAmount('blank');
    else setRequiredEnteredAmount('not-blank');
    if (isStringContainOnlySpaces(enteredTitle))
      setRequiredEnteredTitle('blank');
    else setRequiredEnteredTitle('not-blank');

    if (enteredAmount !== '' || ! isStringContainOnlySpaces(enteredTitle))
 {
      const obj = {
        title: enteredTitle.toLocaleUpperCase(),
        amount: enteredAmount,
        date: new Date(enteredDate),
        id: new Date().getTime()
      };
      props.FromNewExpense(obj);
      setenteredAmount('');
      setenteredDate(today_date);
      setenteredTitle("");
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
            placeholder="Enter expense name"
          ></input>
          <RequiredField data={RequiredEnteredTitle}></RequiredField>
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
          <RequiredField data={RequiredEnteredAmount}></RequiredField>
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
