import React, { FC } from "react";

import Title from "../../styled-components/components/Title";

interface Props {
  /**
   * 曲目名稱
   */
  name?: string;
  /**
   * 曲目藝術家
   */
  artist?: string;
}

// 曲目標題
const TrackTitle: FC<Props> = ({ name = "", artist = "" }) => (
  <>
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
  </>
);

export default TrackTitle;
