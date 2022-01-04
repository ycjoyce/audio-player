import styled from "styled-components";

import fontSizes from "../abstract/font";

interface Props {
  /** 標題等級 */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** 下方 margin */
  marginBottom?: string;
}

/** 標題文字 */
const Title = styled.div<Props>`
  font-size: ${({ level }) =>
    fontSizes.headings[level || 6] || fontSizes.headings[6]}em;
  margin: 0 0 ${({ marginBottom }) => marginBottom || "0"} 0;
`;

export default Title;
