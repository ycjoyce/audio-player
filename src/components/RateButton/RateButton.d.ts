import { FC } from "react";
export interface RateButtonProps {
    /** 播放速度 */
    rates: number[];
    /**
     * 更新播放速度的事件處理
     * @param rate 更新的速度
     */
    onUpdate(rate: number): void;
}
/**
 * 播放速度按鈕
 * @param param0
 * @returns
 */
declare const RateButton: FC<RateButtonProps>;
export default RateButton;
