import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };
  handleSubmit = query => {
    console.log(query);
    this.setState({ query });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={this.state.query} />
        <GlobalStyle />
        <ToastContainer position="top-center" autoClose={2500} />
      </>
    );
  }
}
