import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ onClick, loading }) => {
  return (
    <LoadButton type="button" onClick={onClick} disabled={loading}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  loading: PropTypes.bool,
};
