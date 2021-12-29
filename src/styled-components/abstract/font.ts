type headings = { [level: number]: number };

/**
 * 標題文字的尺寸
 */
const headingSizes: headings = {
  1: 2.2,
  2: 2,
  3: 1.8,
  4: 1.5,
  5: 1.2,
  6: 1,
};

/**
 * 文字尺寸
 */
const fontSizes: {
  headings: headings;
  normal: number;
  small: number;
} = {
  headings: { ...headingSizes },
  normal: 1,
  small: 0.8,
};

export default fontSizes;
