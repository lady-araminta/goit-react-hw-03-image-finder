import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

export class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=hours&page=1&key=30416408-c6842ca729ef5a51b1af270dd&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <>
        {this.state.data && <div>Здесь будут картинки</div>}
        <GlobalStyle />
      </>
    );
  }
}
