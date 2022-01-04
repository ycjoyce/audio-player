import styled from "styled-components";

/** 寬度 100% 的容器 */
export const FullWidthBox = styled.div<{ marginBottom?: string }>`
  width: 100%;
`;

/** display 為 flex 的容器 */
export const FlexBox = styled.div<{ justifyContent?: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;

/** 有陰影的容器 */
export const ShadowBox = styled.div`
  box-shadow: 0 0 20px #ccc;
`;
