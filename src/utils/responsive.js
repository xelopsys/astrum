import { css } from "styled-components";
export const macbook = (props) => {
    return css`
    @media only screen and (max-width: 1280px) {
      ${props}
    }
  `;
};
export const ipad = (props) => {
    return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 650px) {
      ${props}
    }
  `;
};
export const miniMobile = (props) => {
    return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};