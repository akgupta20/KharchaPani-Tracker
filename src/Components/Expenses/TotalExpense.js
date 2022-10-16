import './TotalExpense.css';
import Card from '../UI/Card';

const TotalExpense = (props) => {

const classes='total-item'
    return (
        <Card className={classes}>
    
      <div className="total-item__discription">
        <h3>{props.title}</h3>
      </div>
      <Card className="total-item__price"> {props.amount} &#8377;</Card>
     
     
    </Card>
    );
}

export default TotalExpense;