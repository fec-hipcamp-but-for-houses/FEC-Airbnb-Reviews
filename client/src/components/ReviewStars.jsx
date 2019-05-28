/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import stars from './styleSheet.css';


// ---------------------- Styling ------------------------------------
const ReviewsDiv = styled.div`
  clear: both;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
  width: 50%;
  position: inherit;
  justify-content: center;
  display: table;
  box-sizing: border-box;
  font-size: 14px;
  display: table-cell;
  padding-bottom: 16px;
`;

const EachSection = styled.div`
  margin-bottom: 8px
`;

const SeparateRight = styled.div`
  padding-right: 16px;
  float: left;
`;

const SeparateLeft = styled.div`
  float: left;
  padding-left: 5px;
`;

const StyledSpan = styled.span`
  padding-right: 112px;
  padding-left: 8px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
  font-size: 16px;
  font-weight: 400;
`;

const StarSpan = styled.span`
  float: right;
  padding-left: 10px;
  padding-right: 10px;
`;
// ------------------------------------ COMPONENT -------------------------------

class ReviewStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let accuracy = 0;
    let communication = 0;
    let cleanliness = 0;
    let checkIn = 0;
    let location = 0;
    let value = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.props.ratings.length; i++) {
      const review = this.props.ratings[i];
      accuracy += review.accuracy;
      communication += review.communication;
      cleanliness += review.cleanliness;
      checkIn += review.check_in;
      location += review.location;
      value += review.value;
    }


    return (
      <ReviewsDiv>

        <SeparateRight>

          <EachSection>

            <StyledSpan>
              Accuracy
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(accuracy / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

          <EachSection>

            <StyledSpan>
              Communication
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(communication / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

          <EachSection>

            <StyledSpan>
              Cleanliness
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(cleanliness / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

        </SeparateRight>

        <SeparateLeft>

          <EachSection>

            <StyledSpan>
              Location
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(location / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

          <EachSection>

            <StyledSpan>
              Check-in
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(checkIn / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

          <EachSection>

            <StyledSpan>
              Value
            </StyledSpan>

            <StarSpan>
              <div className={stars.starRating} title="70%">
                <div className={stars.backStars}>
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />
                  <i className="fas fa-star" aria-hidden="true" />

                  <div className={stars.frontStars} style={{ width: `${(value / this.props.ratings.length) * 20}%` }}>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </StarSpan>

          </EachSection>

        </SeparateLeft>

      </ReviewsDiv>
    );
  }
}
export default ReviewStars;
