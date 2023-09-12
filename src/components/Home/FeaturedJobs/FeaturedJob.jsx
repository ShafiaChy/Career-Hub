import PropTypes from 'prop-types'
import Button from '../../shared/Button/Button';
import { Link } from 'react-router-dom';

const FeaturedJob = ({details}) => {
    return (
        <div className='w-9/12 h-96 px-4 py-7 space-y-4 border-2 border-gray-200'>
           <img className='w-40' src={details.logo} alt="" /> 
           <h1 className='text-xl font-bold'>{details.job_title}</h1>
           <h2 >{details.company_name}</h2>
           <div className='flex space-x-4'>
            <button className='rounded-md px-3 py-1 bg-transparent border-2 border-[#7E90FE] text-[#7E90FE]'>{details.remote_or_onsite}</button>
            <button className='rounded-md px-3 py-1  bg-transparent border-2 border-[#7E90FE] text-[#7E90FE]'>{details.job_type}</button>
           </div>
           <div className='flex space-x-4'>
            <h2>{details.location}</h2>
            <h2>Salary: {details.salary}</h2>
           </div>
           <Link to={`details/${details.id}`}><Button title='View Details'></Button></Link>
        </div>
    );
};
FeaturedJob.propTypes = {
    details: PropTypes.object.isRequired,
    
}
export default FeaturedJob;