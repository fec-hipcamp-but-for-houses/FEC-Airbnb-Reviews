import React from 'react';

class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.review.profile_picture}  />
          <div>{this.props.review.username}</div>
          <div>{this.props.review.date}</div>
          <div>{this.props.review.message}</div>
        </div>
      </div>
    );
  }
}
export default EachReview;
