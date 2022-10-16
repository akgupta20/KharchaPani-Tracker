import { useState } from 'react';
import RequiredField from '../NewExpense/RequiredField';
import Card from '../UI/Card';
import './FilterExpenses.css';

const FilterExpenses = (props) => {
    const [EnterText, setEnterText] = useState('');
   
    const filterFieldChagneHandler = (e) => {
        setEnterText(e.target.value);

    }


    const filterSubmitHandler = (e) => {

       
        e.preventDefault();
        if (EnterText === '' || EnterText === ' ');
        else {
            props.FromApp(EnterText);
           

        }
    }
 

    return (
        <Card className='filter-expenses '> <form onSubmit={filterSubmitHandler}>
            <div> <input type="text" class="filter-field input-field" placeholder={props.searchingTitle} value={EnterText}
                onChange={filterFieldChagneHandler} />
                

            </div>
        </form>
        </Card>
    );
}
export default FilterExpenses;