import styled, { css } from "styled-components";

// a completely new different way of styling using new Styled (!(!(!(components)!)!)!)!)

// css function from styled-components
// simple example

/*
const test = css`
  text-align: center;
  ${10 > 5 ? "background-color: blue;" : "background-color: yellow;"}
`;
*/
// and but this in styled.h1`${test}`

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 3rem;
      text-align: center;
    `}
`;

export default Heading;
