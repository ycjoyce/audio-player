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
