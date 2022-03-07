import styled from "styled-components";

import { ShadowBox } from "../../styled-components/components/Box";

/** 播放器的容器 */
export const StyledPlayerBox = styled(ShadowBox)`
  width: 800px;
  max-width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
