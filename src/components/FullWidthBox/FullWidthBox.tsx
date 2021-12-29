import React, {
  FC,
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement,
  ReactElement,
  JSXElementConstructor,
} from "react";

import { FullWidthBox as StyledFullWidthBox } from "../../styled-components/components/Box";

// 寬度 100% 的容器
const FullWidthBox: FC = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // 初始化及螢幕大小改變時，重新取得寬度
    const resetWidth = (): void => {
      if (boxRef.current) {
        setWidth(boxRef.current.clientWidth);
      }
    };
    resetWidth();
    window.addEventListener("resize", resetWidth);

    return () => window.removeEventListener("resize", resetWidth);
  }, [boxRef]);

  return (
    <StyledFullWidthBox ref={boxRef} data-testid="full-box">
      {/* 將容器寬度以 props: width 傳給子元素 */}
      {Children.map(children, child =>
        cloneElement(
          child as ReactElement<any, string | JSXElementConstructor<any>>,
          { width }
        )
      )}
    </StyledFullWidthBox>
  );
};

export default FullWidthBox;
