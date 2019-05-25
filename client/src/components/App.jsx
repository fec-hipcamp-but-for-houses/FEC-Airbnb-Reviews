/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './MapOverData.jsx';
import ReviewStars from './ReviewStars.jsx';
import Pagination from './pagination.jsx';
import SearchBar from './SearchBar.jsx';

// ------------------------- STYLED COMPONENTS -------------------------
const ReviewsBack = styled.button`
  color: var(--color-text-link, #008489) !important;
  font-family: var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  text-decoration-line: var(--font-link-text-decoration-line, none) !important;
`;

// ------------------------ COMPONENT ----------------------------------

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsData: [],
      pages: [],
      displayedReviews: [],
      pageNumber: 0,
      searched: false,
      searchReviews: [],
      startData: [],
      startChunks: [],
    };
    this.changePage = this.changePage.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/reviews?randomListing=${Math.floor(Math.random() * 100) + 1}`)
      .then((data) => {
        const groupedData = [];
        for (let i = 0; i < data.data.length; i += 5) {
          const myChunk = data.data.slice(i, i + 5);
          groupedData.push(myChunk);
        }
        console.log(groupedData);
        this.setState({
          reviewsData: data.data,
          pages: groupedData,
          displayedReviews: groupedData[0],
          pageNumber: 0,
        });
      })
      .catch(() => {
        console.log('THIS IS AN ERROR');
      });
  }
  // ------------------------ Search functions ------------------------

  onSearchHandler(chunksArray, filteredData, oldData, oldChunks) {
    this.setState({
      pages: chunksArray,
      displayedReviews: chunksArray[0],
      pageNumber: 0,
      searched: true,
      searchReviews: filteredData,
      startData: oldData,
      startChunks: oldChunks,
    });
  }

  onClickHandler(e) {
    e.preventDefault();
    const startingChunks = this.state.startChunks;
    console.log('Button is working!!!');
    this.setState({
      pages: startingChunks,
      displayedReviews: startingChunks[0],
      pageNumber: 0,
      searchReviews: [],
      searched: false,
    });
  }
  // ------------------------ Pagination Functions --------------------------

  changePage(page) {
    const currentPages = this.state.pages;
    const newPage = page - 1;
    this.setState({
      displayedReviews: currentPages[newPage],
      pageNumber: newPage,
    });
  }

  goBack() {
    let currentPage = this.state.pageNumber;
    currentPage -= 1;
    this.setState({
      displayedReviews: this.state.pages[currentPage],
      pageNumber: currentPage,
    });
  }

  goForward() {
    let currentPage = this.state.pageNumber;
    currentPage += 1;
    this.setState({
      displayedReviews: this.state.pages[currentPage],
      pageNumber: currentPage,
    });
  }
  // ----------------------- Render function -------------------------

  render() {
    if (this.state.searched === false) {
      return (
        <div style={{ padding: 24 }}>
          <div>
            <div style={{ display: 'block' }}>
              {this.state.reviewsData.length}
              {' '}
            Reviews
            </div>
            <div style={{ position: 'absolute' }}>
              <SearchBar
                search={this.onSearchHandler}
                reviews={this.state.reviewsData}
                pages={this.state.pages}
              />
            </div>
          </div>

          <ReviewStars style={{ borderBottom: 'solid' }} ratings={this.state.reviewsData} />

          <div>
            <ReviewList reviews={this.state.displayedReviews} />
          </div>

          <nav>
            <Pagination
              pages={this.state.pages}
              changePage={this.changePage}
              goBack={this.goBack}
              goForward={this.goForward}
              page={this.state.pageNumber}
            />
          </nav>
        </div>
      );
    }
    return (
      <div style={{ padding: 24 }}>

        <div>
          <div>
            {this.state.reviewsData.length}
            {' '}
          Reviews
          </div>
          <div>
            <SearchBar search={this.onSearchHandler} />
          </div>
        </div>

        <div>
          {this.state.searchReviews.length}
          {' '}
          guests have mentioned
        </div>

        <div>
          <span>
            <ReviewsBack
              type="button"
              onClick={e => this.onClickHandler(e)}
            >
              Back to all reviews
            </ReviewsBack>
          </span>
        </div>

        <div>
          <ReviewList reviews={this.state.displayedReviews} />
        </div>

        <nav>
          <Pagination
            pages={this.state.pages}
            changePage={this.changePage}
            goBack={this.goBack}
            goForward={this.goForward}
            page={this.state.pageNumber}
          />
        </nav>

      </div>
    );
  }
}
export default App;
