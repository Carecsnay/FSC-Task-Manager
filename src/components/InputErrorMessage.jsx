import PropTypes from 'prop-types';

const InputErrorMessage = ({ children }) => {
  return (
    <span className="pl-1 text-left text-xs text-brand-danger">{children}</span>
  );
};

InputErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputErrorMessage;
