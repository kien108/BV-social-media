import getLocalStorage from "./getLocalStorage";

const removeLocalStorage = (name: string) => {
   const data = getLocalStorage(name);
   if (!data) return;
   localStorage.removeItem(name);
};

export default removeLocalStorage;
