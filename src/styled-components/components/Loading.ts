import styled from "styled-components";
import { MaskBox } from "./Box";

export const Loading = styled(MaskBox)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;

  .spinner {
    color: red;
  }
`;
