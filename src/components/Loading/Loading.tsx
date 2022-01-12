import React, { FC } from "react";

// eslint-disable-next-line max-len
import { Loading as StyledLoading } from "../../styled-components/components/Loading";

const Loading: FC = () => (
  <StyledLoading>
    <i className="fas fa-spinner spinner" />
  </StyledLoading>
);

export default Loading;
