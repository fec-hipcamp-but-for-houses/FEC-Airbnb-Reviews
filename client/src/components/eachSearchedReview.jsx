/* eslint-disable class-methods-use-this */
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
  margin: 0px;
  word-wrap: break-word;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 600; 
  line-height: 1.375em; 
  color: #484848; 
`;

const ReadMoreSpan = styled.span`
  color: #008489;
`;

const BorderDiv = styled.div`
    border-bottom: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--color-divider, #EBEBEB);
    margin-bottom: 35px;
    margin-left: 70px; 
    max-width: 696px;
`;
// ------------------------------------ COMPONENT -------------------------------
class EachSearchReview extends React.Component {
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

  breakUpString(string, query) {
    const index = string.indexOf(query);
    const firstHalf = string.slice(0, index);
    console.log('this is firstHalf', firstHalf);
    const rightWord = string.slice(index, index + query.length);
    console.log('this is the word', rightWord);
    const lastHalf = string.slice(index + query.length);
    console.log('THIS IS THE LAST HALF', lastHalf);
  }

  render() {
    // ------------------------- Changing things inside of the message ------------------------

    const index = this.props.review.firstHalf.indexOf(this.props.query);
    const firstPart = (this.props.review.firstHalf.slice(0, index));
    console.log('this is firstHalf', firstPart);
    const rightWord = this.props.review.firstHalf.slice(index, index + this.props.query.length);
    const boldRightWord = (<b>{rightWord}</b>);
    console.log('this is the word', boldRightWord);
    const lastPart = this.props.review.firstHalf.slice(index + this.props.query.length);
    console.log('THIS IS THE LAST HALF', lastPart);
    const wholeNew = (
      <p>
        {firstPart}
        {boldRightWord}
        {lastPart}
      </p>
    );

    // ----------------------- Render function ---------------------------
    if (this.props.review.firstHalf.length < 240) {
      return (
        <BorderDiv>
          <div>
            <ImageStyle src={this.props.review.profile_picture} />
            <UsernamePosition>{this.props.review.username}</UsernamePosition>
            <DateSpan>{this.props.review.date}</DateSpan>
          </div>
          <div style={{ margin: 16 }}>
            {wholeNew}
          </div>
        </BorderDiv>
      );
    }
    if (this.state.clickedReadMore === false && this.props.review.firstHalf.length === 240) {
      return (
        <BorderDiv>
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
      <BorderDiv>
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
export default EachSearchReview;
