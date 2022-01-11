import styled from "styled-components";

import fontSizes from "../abstract/font";
import spacing from "../abstract/spacing";

const Error = styled.div`
  font-size: ${fontSizes.headings[2]}rem;
  text-align: center;
  font-weight: lighter;
  padding: ${spacing[3]}rem;

  .icon {
    margin-right: ${spacing[3]}rem;
  }
`;

export default Error;
