import React from "react";

const FilterByDate=()=>{
    return (
        <div >
        <form >
            <div className='filter-expenses '> <input type="date" class="filter-field input-field" 
                />
                </div>
                <li><hr className="dropdown-divider" /></li>
                <div className='filter-expenses '> <input type="date" class="filter-field input-field"  />
                </div>
        </form>
    </div>
    );
}

export default FilterByDate;