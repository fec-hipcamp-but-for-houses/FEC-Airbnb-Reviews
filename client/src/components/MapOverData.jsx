import React from 'react';
import EachReview from './EachRview.jsx';

class MappingOverData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        {this.props.reviews.map((review) => {
          console.log(review);
          review.firstHalf = review.message.slice(0, 40);
          review.lastHalf = review.message.slice(40);
          return <EachReview review={review} key={review.id} />;
        })}
      </div>
    );
  }
}
export default MappingOverData;
