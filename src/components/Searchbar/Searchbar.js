import { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { query } = this.state;
    event.preventDefault();
    if (query === '') {
      toast.warn('Enter a search query!');
      return;
    }
    if (this.props.query === query) {
      toast.warn(
        'We have already found pictures for this request. Enter something else!'
      );
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

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
};
