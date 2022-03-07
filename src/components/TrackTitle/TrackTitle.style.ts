import styled from "styled-components";

import spacing from "../../styled-components/abstract/spacing";

import { FlexBox } from "../../styled-components/components/Box";

/** 曲目標題 */
const StyledTrackTitle = styled(FlexBox)`
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  margin-bottom: ${spacing[3]}em;

  h5 {
    margin-bottom: 5px;
  }

  h6 {
    font-weight: normal;
  }
`;

/** 曲目標題中的專輯圖片 */
export const StyledTrackImgBox = styled.div`
  flex: 0 0 30%;
  max-width: 200px;
  min-width: 100px;
  margin-bottom: ${spacing[3]}em;
`;

export default StyledTrackTitle;
