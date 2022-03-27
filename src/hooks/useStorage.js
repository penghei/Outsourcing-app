export const setStorage = (key, v, type = "local") => {
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

export const getStorage = (key, type = "local") => {
  let res;
  if (typeof key !== "string") {
    console.warn("获取缓存键不是字符串");
  }

  if (type === "session") {
    if (!sessionStorage.getItem(key)) return false;
    res =
      sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key));
  } else {
    if (!localStorage.getItem(key)) return false;
    res = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  }

  return res;
};

export const emptyStorage = (key, type = "local") => {
  if (typeof key !== "string") {
    console.warn("查找缓存键不是字符串");
  }
  if (type === "session") {
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key);
      return true;
    } else {
      console.warn("session未找到");
      return false;
    }
  } else {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return true;
    } else {
      console.warn("local未找到");
      return false;
    }
  }
};
