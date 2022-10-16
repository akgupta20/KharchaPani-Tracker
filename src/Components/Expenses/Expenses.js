import "./Expenses.css";
import React,{useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import TotalExpense from "./TotalExpense";

const Expenses = (props) => {
  
  const SaveInExpenses = (deleteExpense) => {
    props.FromAppToExpense(deleteExpense);
  }
 
   let expenseCardClasses = 'expenses ex-' +  props.ExpensesTheme ;
    

  
  

  return (
    <Card className={expenseCardClasses}>
      <TotalExpense title='Totel Expense' amount={props.totalExpense} />
      {
        props.Expenses.map(
          expense => (<ExpenseItem ExpenseItem={expense}
            FromExpenses={SaveInExpenses} ItemTheme={props.ExpensesTheme}
          />)
        )

      } </Card>


  );
}
export default Expenses;
