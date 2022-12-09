import PropTypes from 'prop-types';

export const Modal = ({ image: { largeImageURL, tags }, onClose }) => {
  return (
    <div>
      <img src={largeImageURL} alt={tags} onClick={onClose} />
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
