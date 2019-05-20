import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  border-radius: 40%;
   width: 48px;
    height: 48px;
    margin-right: 16px;
`;

const DateSpan = styled.span`
  position: relative;
`;

const UsernamePosition = styled.div`
  display: inline-box;
  position: absolute;
`;
class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div style={{ borderBottom: 'solid' }}>
        <div>
          <ImageStyle src={this.props.review.profile_picture} />
          <UsernamePosition>{this.props.review.username}</UsernamePosition>
          <DateSpan>{this.props.review.date}</DateSpan>
        </div>
        <div style={{ margin: 16 }}>
        {this.props.review.message}
        </div>
      </div>
    );
  }
}
export default EachReview;
