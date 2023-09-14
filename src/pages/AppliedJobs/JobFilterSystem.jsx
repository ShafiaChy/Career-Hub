import PropTypes from 'prop-types'
import { FaAngleDown } from "react-icons/fa6";
// https://daisyui.com/components/dropdown/
// # Dropdown / aligns to end
const JobFilterSystem = ({handleJobPositions}) => {
    return (
        <div className="mt-24 mb-5 flex justify-end px-48">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">Filter By <FaAngleDown/></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-4 px-4">
                <li><button onClick={()=> handleJobPositions('Remote')}>Remote</button></li>
                <li><button onClick={()=> handleJobPositions('Onsite')}>Onsite</button></li>
                
            </ul>
           
            </div>
           
        </div>
    );
};

JobFilterSystem.propTypes = {
    handleJobPositions: PropTypes.func.isRequired,
    
}
export default JobFilterSystem;