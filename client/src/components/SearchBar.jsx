/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

// ----------------- STYLED COMPONENTS ------------------------
const FormPicDiv = styled.div`
  ${'' /* border: solid;
  border-radius: 5px;
  border-width: thin; */}
`;

const InputTag = styled.input`
    border: none;
    background-color: transparent !important;
    font-size: var(--font-form-element-small-font-size, 14px) !important;
    line-height: var(--font-form-element-small-line-height, 22px) !important;
    letter-spacing: var(--font-form-element-small-letter-spacing, normal) !important;
    font-family: var(--font-form-element-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
    text-transform: var(--font-form-element-small-text-transform, undefined) !important;
    color: #484848 !important;
    padding-top: var(--spacing-form-element-small-vertical, 6px) !important;
    padding-bottom: var(--spacing-form-element-small-vertical, 6px) !important;
    font-weight: var(--font-book-font-weight, 600) !important;
    padding-left: var(--spacing-form-element-small-horizontal, 7px) !important;
    padding-right: var(--spacing-form-element-small-horizontal, 7px) !important;
`;
// ----------------- COMPONENT -------------------------------
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
    const copiedData = Object.assign({}, this.props.state);
    const { query } = this.state;
    const chunks = [];
    const allReviews = copiedData.reviewsData;
    const oldPages = copiedData.pages;
    // --------------------------- Filter Through all Reviews ----------------------------
    const filtered = allReviews.filter((review) => {
      if (review.message.includes(` ${query} `)
       || review.message.includes(`${query} `)
       || review.message.includes(` ${query}.`)
       || review.message.includes(` ${query}?`)
       || review.message.includes(` ${query},`)) {
        return review;
      }
    });
    // --------------------------Break Reviews into Chunks for pagination -----------------
    for (let i = 0; i < filtered.length; i += 5) {
      const myChunk = filtered.slice(i, i + 5);
      chunks.push(myChunk);
    }
    // -------------------------SEND DATA BACK TO APP ---------------------------------
    this.props.search(chunks, filtered, allReviews, oldPages, query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <FormPicDiv>
        <svg
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{
            height: '15px',
            width: '15px',
            display: 'table-cell',
            fill: 'rgb(72, 72, 72)',
            float: 'left',
            paddingTop: '10px',
          }}
        >
          <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fillRule="evenodd" />
        </svg>
        <form
          style={{ position: 'relative', display: 'initial' }}
          onSubmit={this.onSubmitHandler}
        >
          <InputTag
            type="text"
            value={this.state.query}
            onChange={this.onChangeHandler}
            submit="Hello"
            placeholder="Search reviews"
          />
        </form>
      </FormPicDiv>
    );
  }
}
export default SearchBar;
