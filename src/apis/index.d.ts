/**
 * 請求排名在前面的曲目
 * @param limit 要請求排名前幾的曲目？默認為 5
 * @returns 請求實例
 */
export declare const getTopTracks: (limit?: number) => Promise<any>;
/**
 * 請求指定專輯的資料
 * @param albumId 要請求的專輯的 ID
 * @returns 請求實例
 */
export declare const getAlbumData: (albumId?: string) => Promise<any>;
