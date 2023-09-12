import PropTypes from 'prop-types'

const Title = ({details}) => {
    return (
        <div>
            <h1 className="text-4xl mb-4 font-bold">{details.title}</h1>
            <p>{details.description}</p>
        </div>
    );
};
Title.propTypes = {
    details: PropTypes.object.isRequired,
    
    
}
export default Title;