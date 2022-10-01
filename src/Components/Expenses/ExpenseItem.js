import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem= (props) => {
 const title = props.ExpenseItem.title;
  return (
    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseItem.date} />
      <div className="expense-item__discription">
        <h3>{title}</h3>
      </div>
      <Card className="expense-item__price"> {props.ExpenseItem.amount} &#8377;</Card>
     
    </Card>
  );
}
export default ExpenseItem;
