import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const {
      image: { webformatURL, tags },
    } = this.props;
    return (
      <li>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
