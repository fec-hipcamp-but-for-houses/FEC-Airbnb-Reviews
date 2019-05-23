/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

// --------------------------- Styled Components ---------------------------------
const StyledUl = styled.ul`
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  `;

const StyledLi = styled.li`
  display: inline-flex;
`;

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    console.log('BUTTON CLICK IS WORKING!!!! ', e.target.value);
    this.props.changePage(e.target.value);
  }

  render() {
    const buttons = [];
    for (let i = 1; i <= this.props.pages.length; i += 1) {
      const pageNumber = (
        <StyledLi key={i}>
          <button type="button" value={i} onClick={this.onClickHandler}>
            {i}
          </button>
        </StyledLi>
      );
      buttons.push(pageNumber);
    }
    return (
      <span>
        <StyledUl>
          {buttons}
        </StyledUl>
      </span>
    );
  }
}
export default Pagination;
