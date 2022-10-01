import Card from "../UI/Card";
import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.ExpenseDate.toLocaleString("en-india", {
    month: "short",
  });
  const year = props.ExpenseDate.getFullYear();
  const day = props.ExpenseDate.toLocaleString("en-india", {
    day: "2-digit",
  });
  return (
    <Card className="date">
      <div className="ExpenseDateMonth">{month}</div>
      <div className="ExpenseDateYear">{year}</div>
      <div className="ExpenseDateDay">{day}</div>
    </Card>
  );
};
export default ExpenseDate;
