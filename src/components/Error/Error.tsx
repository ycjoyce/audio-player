import React, { FC } from "react";

import StyledError from "./Error.style";

const Error: FC = () => (
  <StyledError>
    <p>
      <i className="icon fas fa-exclamation-circle" />
      Something went wrong
    </p>
  </StyledError>
);

export default Error;
