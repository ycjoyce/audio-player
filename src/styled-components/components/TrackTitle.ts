import styled from "styled-components";

import spacing from "../abstract/spacing";

import { FlexBox } from "./Box";

/** 曲目標題 */
export const TrackTitle = styled(FlexBox)``;

/** 曲目標題中的專輯圖片 */
export const ImgBox = styled.div`
  flex: 0 0 30%;
  max-width: 200px;
  min-width: 100px;
  margin-left: ${spacing[2]}em;
`;
