/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import EachReview from './EachRview.jsx';
import EachSearchReview from './eachSearchedReview.jsx';

class MappingOverData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    if (this.props.searched) {
      return (
        <div>
          {this.props.reviews.map((review) => {
            review.firstHalf = review.message.slice(0, 240);
            review.lastHalf = review.message.slice(240);
            return <EachSearchReview review={review} key={review.id} />;
          })}
        </div>
      );
    }
    return (
      <div>
        {this.props.reviews.map((review) => {
          review.firstHalf = review.message.slice(0, 240);
          review.lastHalf = review.message.slice(240);
          return <EachReview review={review} key={review.id} />;
        })}
      </div>
    );
  }
}
export default MappingOverData;
