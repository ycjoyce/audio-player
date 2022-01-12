import React, { FC } from "react";

import StyledError from "../Error/Error.style";

const Empty: FC = () => (
  <StyledError>
    <p>
      <i className="icon fas fa-exclamation-circle" />
      The audio source must be provided
    </p>
  </StyledError>
);

export default Empty;
