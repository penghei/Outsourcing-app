export const setStorage = (key, v, type = "session") => {
  const value = JSON.stringify(v);
  if (typeof key !== "string") {
    console.warn("添加缓存键不是字符串");
  }
  if (type === "session") {
    sessionStorage.getItem(key)
      ? (sessionStorage[key] = value)
      : sessionStorage.setItem(key, value);
  } else {
    localStorage.getItem(key)
      ? (localStorage[key] = value)
      : localStorage.setItem(key, value);
  }
};

export const getStorage = (key, type = "session") => {
  let res;
  if (typeof key !== "string") {
    console.warn("获取缓存键不是字符串");
  }
  if (type === "session")
    res =
      sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key));
  else res = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));

  return res;
};

