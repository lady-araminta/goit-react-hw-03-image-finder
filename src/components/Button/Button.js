import PropTypes from 'prop-types';

export const Button = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  loading: PropTypes.bool,
};
