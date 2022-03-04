function addZero(i) {
  return i < 10 ? `0${i}` : i;
}
export function useFormatTime(st, et) {
  let leftTime = parseInt((et.getTime() - st.getTime()) / 1000);
  
  let d = parseInt(leftTime / (24 * 60 * 60));
  let h = parseInt((leftTime / (60 * 60)) % 24);
  let m = parseInt((leftTime / 60) % 60);
  let s = parseInt(leftTime % 60);
  
  d = addZero(d);
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  
  return `${d}天 ${h} 时 ${m} 分 ${s} 秒`;
}
