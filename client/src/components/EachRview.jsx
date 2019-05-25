/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// --------------------- Styling ----------------------------------------

const ImageStyle = styled.img`
  border-radius: 100%;
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

const BorderDiv = styled.div`
    border-bottom: solid;
    border-bottom-width: var(--border-rule-border-width, 1px) !important;
    border-bottom-color: var(--color-divider, #EBEBEB) !important;
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
    if (this.props.review.firstHalf.length < 240) {
      return (
        <BorderDiv style={{ borderBottom: 'solid' }}>
          <div>
            <ImageStyle src={this.props.review.profile_picture} />
            <UsernamePosition>{this.props.review.username}</UsernamePosition>
            <DateSpan>{this.props.review.date}</DateSpan>
          </div>
          <div style={{ margin: 16 }}>
            {this.props.review.firstHalf}
          </div>
        </BorderDiv>
      );
    }
    if (this.state.clickedReadMore === false && this.props.review.firstHalf.length === 240) {
      return (
        <BorderDiv style={{ borderBottom: 'solid' }}>
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
        </BorderDiv>
      );
    }
    return (
      <BorderDiv style={{ borderBottom: 'solid' }}>
        <div>
          <ImageStyle src={this.props.review.profile_picture} />
          <UsernamePosition>{this.props.review.username}</UsernamePosition>
          <DateSpan>{this.props.review.date}</DateSpan>
        </div>
        <div style={{ margin: 16 }}>
          {this.props.review.firstHalf + this.props.review.lastHalf}
        </div>
      </BorderDiv>
    );
  }
}
export default EachReview;
