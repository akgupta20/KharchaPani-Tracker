import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";


const NewExpense = (props) => {
    const SaveInNewExpense = (expenseObject) => {
        props.FromApp(expenseObject);
        
   }
  return (
    <Card className="new-expense">
      <ExpenseForm FromNewExpense={SaveInNewExpense} />
    </Card>
  );
};
export default NewExpense;
