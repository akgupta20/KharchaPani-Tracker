
import './NoResultFound.css'

const NoResultFound = () => {
    return (
        <div className="no-result ">
            <img src={require("../../image/no_result.gif")}  alt="NO Result Found Image" width='100%' height='520px'object-fit='cover' />
            
        </div>
    );
}
export default NoResultFound;