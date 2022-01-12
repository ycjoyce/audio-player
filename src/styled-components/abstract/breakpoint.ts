export enum Breakpoints {
  sm = "576px",
  md = "768px",
  lg = "992px",
  xl = "1200px",
  xxl = "1400px",
}

export const device = {
  sm: `(min-width: ${Breakpoints.sm})`,
  md: `(min-width: ${Breakpoints.md})`,
  lg: `(min-width: ${Breakpoints.lg})`,
  xl: `(min-width: ${Breakpoints.xl})`,
  xxl: `(min-width: ${Breakpoints.xxl})`,
};
