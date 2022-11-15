import { useState } from 'react';
import './FilterExpenses.css';

const isStringContainOnlySpaces = ourstr => {
    for (let i = 0; i < ourstr.length; i++)
        if (ourstr[i] !== ' ')
            return 0;
    return 1;// 1means containing
}

const FilterExpenses = (props) => {
    const [EnterText, setEnterText] = useState('');
    const filterFieldChagneHandler = (e) => {
        setEnterText(e.target.value);
    }
    const filterSubmitHandler = (e) => {


        e.preventDefault();
        if (!isStringContainOnlySpaces(EnterText)) {
            props.FromHeader(EnterText);
            setEnterText('');
        }
    }


    return (
        <div >
            <form onSubmit={filterSubmitHandler}>
                <div className='filter-expenses '> <input type="text" class="filter-field input-field" placeholder={props.searchingTitle} value={EnterText}
                    onChange={filterFieldChagneHandler} />
                </div>
            </form>
        </div>
    );
}
export default FilterExpenses;