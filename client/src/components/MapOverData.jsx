/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
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
          // -------------- GETTING MY DATE FORMATTED CORRECTLY -------------------------
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          let theMonth = '';
          console.log(review.date.slice(5, 7));
          if (review.date.slice(5, 7) === '01') {
            theMonth = months[0];
          }
          if (review.date.slice(5, 7) === '02') {
            theMonth = months[1];
          }
          if (review.date.slice(5, 7) === '03') {
            theMonth = months[2];
          }
          if (review.date.slice(5, 7) === '04') {
            theMonth = months[3];
          }
          if (review.date.slice(5, 7) === '05') {
            theMonth = months[4];
          }
          if (review.date.slice(5, 7) === '06') {
            theMonth = months[5];
          }
          if (review.date.slice(5, 7) === '07') {
            theMonth = months[6];
          }
          if (review.date.slice(5, 7) === '08') {
            theMonth = months[7];
          }
          if (review.date.slice(5, 7) === '09') {
            theMonth = months[8];
          }
          if (review.date.slice(5, 7) === '10') {
            theMonth = months[9];
          }
          if (review.date.slice(5, 7) === '11') {
            theMonth = months[10];
          }
          if (review.date.slice(5, 7) === '12') {
            theMonth = months[11];
          }
          const year = review.date.slice(0, 4);
          const finalDate = `${theMonth} ${year}`;
          console.log(finalDate);
          review.date = finalDate;
          // ---------------------------- SPLITING MESSAGE INTO TWO PARTS --------------------------
          review.firstHalf = review.message.slice(0, 240);
          review.lastHalf = review.message.slice(240);
          return <EachReview review={review} key={review.id} />;
        })}
      </div>
    );
  }
}
export default MappingOverData;
