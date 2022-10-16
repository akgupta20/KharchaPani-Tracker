import "./Theme.css"
import { useState } from "react";

const Theme = (props) => {

    const [themeClaases,setThemeClasses] = useState('btn theme-btn-light');
    const ThemeClickHandler = () => {
        if (themeClaases === 'btn theme-btn-light')
            setThemeClasses('btn theme-btn-dark')
        else setThemeClasses('btn theme-btn-light');
        props.FromApp();
       
}

    return (
        <div className="themeContainer">
            <button title="Change theme"className={themeClaases} onClick={ThemeClickHandler}></button>
        </div>);
}
export default Theme;
