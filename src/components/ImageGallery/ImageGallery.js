import { Component } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '30416408-c6842ca729ef5a51b1af270dd';
    const params = `?key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;
    if (prevProps.query !== this.props.query) {
      console.log('prevProps.query', prevProps.query);
      console.log('this.props.query', this.props.query);
      console.log('Изменился запрос');
      this.setState({ loading: true });
      fetch(`${BASE_URL}${params}&q=${this.props.query}&page=1`)
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    return (
      <ul>
        Gallery
        {this.state.loading && <ThreeCircles />}
        {this.state.data && <p>{this.props.query}</p>}
      </ul>
    );
  }
}
