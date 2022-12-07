import { Component } from 'react';
import { toast } from 'react-toastify';
import { GrSearch } from 'react-icons/gr';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase().trim() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      toast.warn('Enter a search query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <GrSearch />
            <span>Search...</span>
          </button>
          <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
