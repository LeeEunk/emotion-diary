// 년, 월, 일만 출력하고 나머진 자름
export const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
}