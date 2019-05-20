import React from 'react';
import styled from 'styled-components';

// --------------------- Styling ----------------------------------------

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

const ReadMoreSpan = styled.span`
  color: #008489;
`;
// ------------------------------------ COMPONENT -------------------------------
class EachReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedReadMore: false };
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle(e) {
    e.preventDefault();
    console.log('THIS IS CLICKED');
    this.setState({ clickedReadMore: true });
  }

  render() {
    if (this.state.clickedReadMore === false) {
      return (
        <div style={{ borderBottom: 'solid' }}>
          <div>
            <ImageStyle src={this.props.review.profile_picture} />
            <UsernamePosition>{this.props.review.username}</UsernamePosition>
            <DateSpan>{this.props.review.date}</DateSpan>
          </div>
          <div style={{ margin: 16 }}>
            {this.props.review.firstHalf}
            <ReadMoreSpan onClick={this.onClickHandle}>
              ...Read More
            </ReadMoreSpan>
          </div>
        </div>
      );
    }
    return (
      <div style={{ borderBottom: 'solid' }}>
        <div>
          <ImageStyle src={this.props.review.profile_picture} />
          <UsernamePosition>{this.props.review.username}</UsernamePosition>
          <DateSpan>{this.props.review.date}</DateSpan>
        </div>
        <div style={{ margin: 16 }}>
          {this.props.review.firstHalf + this.props.review.lastHalf}
        </div>
      </div>
    );
  }
}
export default EachReview;
