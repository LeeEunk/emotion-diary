// 년, 월, 일만 출력하고 나머진 자름
export const getStirngDate = (date) => {
    return date.toISOStirng().slice(0,10);
}
