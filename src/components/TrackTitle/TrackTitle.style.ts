import styled from "styled-components";

import spacing from "../../styled-components/abstract/spacing";
import { device } from "../../styled-components/abstract/breakpoint";
import { ThemeColors } from "../../styled-components/abstract/theme";

import { FlexBox } from "../../styled-components/components/Box";

/** 曲目標題 */
const StyledTrackTitle = styled(FlexBox)`
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;

  @media all and ${device.sm} {
    flex-direction: row;
    align-items: start;
    text-align: unset;
  }

  h6 {
    color: ${({ theme }) => theme[ThemeColors.secondary]};
  }
`;

/** 曲目標題中的專輯圖片 */
export const StyledTrackImgBox = styled.div`
  flex: 0 0 30%;
  max-width: 200px;
  min-width: 100px;
  margin-bottom: ${spacing[2]}em;

  @media all and ${device.sm} {
    margin-left: ${spacing[2]}em;
    margin-bottom: 0;
  }
`;

export default StyledTrackTitle;
