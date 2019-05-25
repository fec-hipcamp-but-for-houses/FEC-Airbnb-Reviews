/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if (this.state.query === '') {
      return;
    }
    const { query } = this.state;
    const chunks = [];
    const allReviews = this.props.reviews;
    const oldPages = this.props.pages;
    const filtered = allReviews.filter((review) => {
      if (review.message.includes(this.state.query)) {
        return review;
      }
    });
    for (let i = 0; i < filtered.length; i += 5) {
      const myChunk = filtered.slice(i, i + 5);
      chunks.push(myChunk);
    }
    this.props.search(chunks, filtered, allReviews, oldPages, query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <form
        style={{ position: 'relative' }}
        onSubmit={this.onSubmitHandler}
      >
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChangeHandler}
          submit="Hello"
        />
      </form>
    );
  }
}
export default SearchBar;
