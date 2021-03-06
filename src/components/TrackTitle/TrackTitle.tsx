import React, { FC } from "react";

import Title from "../../styled-components/components/Title";
import StyledTrackTitle, { StyledTrackImgBox } from "./TrackTitle.style";

export interface TrackTitleProps {
  /** 曲目名稱 */
  name?: string;
  /** 曲目藝術家 */
  artist?: string;
  /** 專輯圖片 */
  img?: string;
}

/**
 * 曲目標題
 * @param param0
 * @returns
 */
const TrackTitle: FC<TrackTitleProps> = ({
  name = "",
  artist = "",
  img = "",
}) => (
  <StyledTrackTitle>
    <div>
      {name && (
        <Title as="h5" level={5} marginBottom="10px">
          {name}
        </Title>
      )}
      {artist && (
        <Title as="h6" level={6}>
          {artist}
        </Title>
      )}
    </div>
    <StyledTrackImgBox>
      {img && <img src={img} alt={name || ""} style={{ width: "100%" }} />}
    </StyledTrackImgBox>
  </StyledTrackTitle>
);

export default TrackTitle;
