export const fetchLocalStorageData = () => {
  const userInfo =
    JSON.stringify(localStorage["user"]) !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};
