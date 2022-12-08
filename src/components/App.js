import { GlobalStyle } from './GlobalStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Component } from 'react';
import { imagesFind } from './utils/pixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    query: '',
    data: null,
    page: 1,
    images: [],
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      imagesFind(query, page)
        .then(data => {
          if (data.total === 0) {
            this.setState({ loading: false });
            return toast.info('Sorry, nothing was found for your search');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            loading: false,
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }
  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      loading: true,
    });
  };
  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery>
            {images.map(image => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
          </ImageGallery>
        )}
        {loading && <Loader />}
        <GlobalStyle />
        <ToastContainer position="top-center" autoClose={2500} />
      </>
    );
  }
}
