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
          return <EachReview review={review} key={review.id} />;
        })}
      </div>
    );
  }
}
export default MappingOverData;
