/**
 * 將秒數格式化
 * @param sec
 * @returns 格式化後的時間（hh:mm:ss）
 */
function formatTime(sec: number): string {
  const hour = Math.floor(sec / 3600);
  const minute = Math.floor((sec % 3600) / 60);
  const second = Math.floor((sec % 3600) % 60);
  return `${
    hour < 1 ? "" : `${`${hour}`.padStart(2, "0")}:`
  }${`${`${minute}`.padStart(2, "0")}:`}${`${second}`.padStart(2, "0")}`;
}

export default formatTime;
