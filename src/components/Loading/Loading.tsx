import React, { FC } from "react";
import { Loading as StyledLoading } from "../../styled-components/components/Loading";

const Loading: FC = () => (
  <StyledLoading>
    <i className="fas fa-spinner spinner" />
  </StyledLoading>
);

export default Loading;
