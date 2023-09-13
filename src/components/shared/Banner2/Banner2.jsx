import PropTypes from 'prop-types'
import './Banner2.css'
const Banner2 = ({title}) => {
    return (
        <div className="banner-image banner-image2 bg-slate-50 h-80 flex justify-center items-center">
            <h1 className='text-3xl font-bold'>{title}</h1>
        </div>
    );
};

Banner2.propTypes = {
    title: PropTypes.string.isRequired,
    
    
}
export default Banner2;