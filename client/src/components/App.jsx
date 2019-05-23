/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ReviewList from './MapOverData.jsx';
import ReviewStars from './ReviewStars.jsx';
import Pagination from './pagination.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsData: [],
      pages: [],
      displayedReviews: [],
      query: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.changePage = this.changePage.bind(this);
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
        });
      })
      .catch(() => {
        console.log('THIS IS AN ERROR');
      });
  }

  // place function definitions here
  onChangeHandler(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }

  changePage(page) {
    const currentPages = this.state.pages;
    this.setState({ displayedReviews: currentPages[page - 1] });
  }

  render() {
    return (
      <div style={{ padding: 24 }}>
        <div>
          {this.state.reviewsData.length}
          {' '}
          Reviews
          <form style={{ position: 'relative' }}>
            <input type="text" value={this.state.query} onChange={this.onChangeHandler} />
          </form>
        </div>

        <ReviewStars style={{ borderBottom: 'solid' }} ratings={this.state.reviewsData} />
        <div>
          <ReviewList reviews={this.state.displayedReviews} />
        </div>
        <nav>
          <Pagination pages={this.state.pages} changePage={this.changePage} />
        </nav>
      </div>
    );
  }
}
export default App;
