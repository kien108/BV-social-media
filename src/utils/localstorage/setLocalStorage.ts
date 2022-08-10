const setLocalStorage = (name: string, value: any) => {
   localStorage.setItem(name, JSON.stringify(value));
};

export default setLocalStorage;
