import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, tags },
    } = this.props;
    return (
      <>
        <li>
          <img src={webformatURL} alt={tags} onClick={this.openModal} />
        </li>
        {isModalOpen && (
          <Modal image={this.props.image} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
