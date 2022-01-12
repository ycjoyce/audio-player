import React, { FC } from "react";

import StyledLoading from "./Loading.style";

const Loading: FC = () => (
  <StyledLoading>
    <i className="fas fa-spinner spinner" />
  </StyledLoading>
);

export default Loading;
