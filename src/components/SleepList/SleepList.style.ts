import styled from "styled-components";
import { List, ListItem } from "../../styled-components/components/List";

/** 睡眠模式列表 */
export const StyledSleepList = styled(List)`
  text-align: center;
  background-color: transparent;
  color: #fff;

  position: fixed;
  width: 80vw;
  max-width: 300px;
  max-height: 70vh;
  max-height: calc(var(--vh, 1vh) * 70);
  overflow-y: scroll;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 5;

  & ${ListItem} {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    &:hover,
    &.active {
      background-color: #000;
    }
  }
`;

export const StyledBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  opacity: 0.7;
`;
