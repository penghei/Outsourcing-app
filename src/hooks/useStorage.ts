export const setStorage = (key: string, v: any, type: string = 'session') => {
  const value = JSON.stringify(v);
  if (typeof key !== 'string') {
    console.warn('添加缓存键不是字符串');
    return;
  }
  if (type === 'session') {
    sessionStorage.getItem(key)
      ? (sessionStorage[key] = value)
      : sessionStorage.setItem(key, value);
  } else {
    localStorage.getItem(key)
      ? (localStorage[key] = value)
      : localStorage.setItem(key, value);
  }
};

export const getStorage = (key: string, type: string = 'session') => {
  let res: any;
  if (typeof key !== 'string') {
    console.warn('获取缓存键不是字符串');
    return;
  }
  if (type === 'session')
    res =
      sessionStorage.getItem(key) &&
      JSON.parse(sessionStorage.getItem(key) as string);
  else
    res =
      localStorage.getItem(key) &&
      JSON.parse(localStorage.getItem(key) as string);

  return res;
};
