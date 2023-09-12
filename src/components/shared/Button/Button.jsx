import PropTypes from 'prop-types'
const Button = ({title}) => {
    return (
        <div>
            <button className="btn  text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">{title}</button>
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    
}
export default Button;