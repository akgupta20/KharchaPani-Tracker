import './TotalExpense.css' ;
import Card from '../UI/Card';

const TotalExpense = (props) => {

const classes='total-item'
    return (
        <Card className={classes}>     
          <h3 className="total-item__discription">{props.title}</h3>
          <Card className="total-item__price"> {props.amount} &#8377;</Card>
    </Card>
    );
}

export default TotalExpense;