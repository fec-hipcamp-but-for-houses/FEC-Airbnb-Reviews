import React from 'react';
import axios from 'axios';
import ReviewList from './MapOverData.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsData: [],
      query: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/reviews?randomListing=${Math.floor(Math.random() * 100) + 1}`)
      .then((data) => {
        console.log(Array.isArray(data.data));
        this.setState({ reviewsData: data.data });
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
    console.log(this.state.query);
  }

  render() {
    return (
      <div>
        {this.state.reviewsData.length}
        {' '}
          Reviews
        <form>
          <input type="text" value={this.state.query} onChange={this.onChangeHandler} />
        </form>
        <div>
          6 reviews in the another div!!!!!!!
        </div>
        <div>
          <ReviewList reviews={this.state.reviewsData} />
        </div>
      </div>
    );
  }
}
export default App;
