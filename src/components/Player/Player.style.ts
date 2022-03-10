import styled, { css } from "styled-components";

import spacing from "../../styled-components/abstract/spacing";

/** 播放器裡的各個區段 */
export const StyledPlayerSection = styled.div<{ disabled?: boolean }>`
  padding: ${spacing[4]}em;

  ${({ disabled }) =>
    disabled &&
    css`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;
      }
    `}
`;

export const StyledPlayerBackground = styled.div<{ img?: string }>`
  ${({ img }) => {
    if (img) {
      return css`
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        /*filter: blur(50px);
        -webkit-filter: blur(50px);*/
      `;
    }
    return css`
      background-color: #000;
    `;
  }}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledPlayerBox = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 90%;
  border: 1px solid red;
`;

const StyledPlayer = styled.div`
  position: relative;
  color: #fff;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export default StyledPlayer;
