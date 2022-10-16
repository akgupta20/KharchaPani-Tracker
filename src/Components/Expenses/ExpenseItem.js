import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  
  let classes = "expense-item item-" + props.ItemTheme;

  const deleteHandler = () => {
    let delete_it = window.confirm("Are you want to delete ?")
    if (delete_it)
      props.FromExpenses(props.ExpenseItem);
    else;
  }
  const date = new Date(props.ExpenseItem.date);
 const title = props.ExpenseItem.title;
  return (
    <Card className={classes}>
      <ExpenseDate ExpenseDate={date} />
      <div className="expense-item__discription">
        <p>{title}</p>
      </div>
      <Card className="expense-item__price"> {props.ExpenseItem.amount} &#8377;</Card>
      <div className="deletebtn">
        <button className="deletebtn"type="delete" title="Delete" onClick={deleteHandler}> <i class="fa fa-trash-o"></i></button>
       
      </div>
     
    </Card>
  );
}
export default ExpenseItem;


