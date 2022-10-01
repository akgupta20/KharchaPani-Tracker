import "./Expenses.css";
import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses=(props)=> {
  return (
    
      
      <Card className="expenses">
      {
        props.Expenses.map(
          expense=>(<ExpenseItem ExpenseItem={expense}/>)
        )
        }
      </Card>
   
  );
}
export default Expenses;
