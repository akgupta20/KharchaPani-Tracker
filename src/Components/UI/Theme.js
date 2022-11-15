import "./Theme.css"
import { useState } from "react";

const Theme = (props) => {

    const [themeClaases,setThemeClasses] = useState(' theme-btn-light ');
    const ThemeClickHandler = () => {
        if (themeClaases === 'theme-btn-light ')
            setThemeClasses('theme-btn-dark ')
        else setThemeClasses('  theme-btn-light ');
        props.FromHeader();
       
    }
    
    const themeChangeBtnClasses =  { themeClaases }+" form-check-input " ;

    return (
      
       
           
            
            <div className="form-check form-switch themeContainer" >
            <input title="Change theme" className={themeChangeBtnClasses}   type="checkbox" id="flexSwitchCheckDefault" onClick={ThemeClickHandler}/>
             
            </div>

      
    );
    
}
export default Theme;
