import PropTypes from 'prop-types'

const Category = ({details}) => {
   
    return (
        <div className=' bg-[#9873FF0D] w-9/12 px-4 py-8'>
            <img  src={details.logo} alt="" />
            <h3>{details.category_name}</h3>
            <small>{details.availability}</small>

        </div>
    );
};
Category.propTypes = {
    details: PropTypes.object.isRequired,
    
}
export default Category;