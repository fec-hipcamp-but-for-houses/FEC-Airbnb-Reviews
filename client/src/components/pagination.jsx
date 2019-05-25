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
    display: inline-block !important;
    vertical-align: middle !important;
    margin-left: 8px !important;
    margin-right: 8px !important;
    line-height: 10px !important;
`;

const StyledDiv = styled.div`
    width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
    text-align: center !important;
    border-radius: 16px !important;
`;

const StyledButton = styled.button`
    display: inline-block !important;
    background-color: transparent !important;
    color: rgb(0, 132, 137) !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    font: inherit inherit inherit inherit inherit inherit inherit inherit inherit !important;
    text-decoration: none !important;
`;

const SelectedPage = styled.div`
    width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
    text-align: center !important;
    background-color: rgb(0, 132, 137) !important;
    color: rgb(255, 255, 255) !important;
    border-radius: 16px !important;
`;

const GoUpOne = styled.button`
    display: inline-block !important;
    background-color: transparent !important;
    color: rgb(0, 132, 137) !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    font: inherit inherit inherit inherit inherit inherit inherit inherit inherit !important;
    text-decoration: none !important;
`;

const CircleDiv = styled.div`
      -webkit-box-pack: center !important;
    -webkit-box-align: center !important;
    align-items: center !important;
    background-color: transparent !important;
    box-shadow: rgb(0, 132, 137) 0px 0px 0px 1px inset !important;
    color: rgb(0, 132, 137) !important;
    display: flex !important;
    height: 32px !important;
    justify-content: center !important;
    width: 32px !important;
    border-radius: 50% !important;
`;
// --------------------------- COMPONENT ------------------------------------------

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onClickForward = this.onClickForward.bind(this);
  }

  onClickHandler(e, page) {
    e.preventDefault();
    console.log(e.target.value);
    this.props.changePage(page);
  }

  onClickBack(e) {
    e.preventDefault();
    this.props.goBack();
  }

  onClickForward(e) {
    e.preventDefault();
    this.props.goForward();
  }

  render() {
    const { page } = this.props;
    const buttons = [];
    for (let i = 1; i <= this.props.pages.length; i += 1) {
      if (i === page + 1) {
        const selectedPage = (
          <StyledLi key={i}>
            <StyledButton type="button" value={i} onClick={e => this.onClickHandler(e, i)}>
              <SelectedPage>{i}</SelectedPage>
            </StyledButton>
          </StyledLi>
        );
        buttons.push(selectedPage);
      } else {
        const pageNumber = (
          <StyledLi key={i}>
            <StyledButton type="button" value={i} onClick={e => this.onClickHandler(e, i)}>
              <StyledDiv>{i}</StyledDiv>
            </StyledButton>
          </StyledLi>
        );
        buttons.push(pageNumber);
      }
    }
    // --------------------------- GROUP OF PAGES -----------------------------
    const firstButton = buttons[0];
    const first3Buttons = buttons.slice(0, 3);
    const first4Buttons = buttons.slice(0, 4);
    const first5Buttons = buttons.slice(0, 5);
    const last3Buttons = buttons.slice(-3);
    const last4Buttons = buttons.slice(-4);
    const last5Buttons = buttons.slice(-5);
    const lastButton = buttons[buttons.length - 1];
    // --------------------------- SVG ARROWS -----------------------------------
    const forwardArrow = (
      <CircleDiv>
        <svg
          viewBox="0 0 18 18"
          role="img"
          aria-label="Next"
          focusable="false"
          style={{
            height: '0.75em',
            width: '0.75em',
            display: 'block',
            fill: 'currentcolor',
          }}
        >
          <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
        </svg>
      </CircleDiv>
    );

    const backArrow = (
      <CircleDiv>
        <svg
          viewBox="0 0 18 18"
          role="img"
          aria-label="Previous"
          focusable="false"
          style={{
            height: '0.75em',
            width: '0.75em',
            display: 'block',
            fill: 'currentcolor',
          }}
        >
          <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
        </svg>
      </CircleDiv>
    );
    // --------------------------- PAGINATION RENDERING -----------------------
    if (page === 0) {
      return (
        <span>
          <StyledUl>
            {first3Buttons}
            ...
            {lastButton}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === 1) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {first3Buttons}
            ...
            {lastButton}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === 2) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {first4Buttons}
            ...
            {lastButton}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === 3) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {first5Buttons}
            ...
            {lastButton}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === this.props.pages.length - 3) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {firstButton}
            ...
            {last5Buttons}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === this.props.pages.length - 2) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {firstButton}
            ...
            {last4Buttons}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
    if (page === this.props.pages.length - 1) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {firstButton}
            ...
            {last3Buttons}
          </StyledUl>
        </span>
      );
    }
    if (page !== 0 && page !== this.props.pages.length - 1) {
      return (
        <span>
          <StyledUl>
            <GoUpOne type="button" onClick={this.onClickBack}>
              {backArrow}
            </GoUpOne>
            {firstButton}
              ...
            {buttons[this.props.page - 1]}
            {buttons[this.props.page]}
            {buttons[this.props.page + 1]}
              ...
            {lastButton}
            <GoUpOne type="button" onClick={this.onClickForward}>
              {forwardArrow}
            </GoUpOne>
          </StyledUl>
        </span>
      );
    }
  }
}
export default Pagination;
