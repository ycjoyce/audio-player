import styled from "styled-components";
import parseColor from "parse-color";

import { ThemeColors } from "../../models";

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

/** 遮罩容器 */
export const MaskBox = styled.div<{
  color?: keyof typeof ThemeColors;
  opacity?: number;
}>`
  background-color: rgba(
    ${({ theme, color = ThemeColors.white }) =>
      parseColor(theme[color]).rgb.join(" ,")},
    ${({ opacity = 0.5 }) => opacity}
  );
`;
