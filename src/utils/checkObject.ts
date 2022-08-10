export const isObject = (item: any) => {
   return typeof item === "object" && !Array.isArray(item) && item !== null;
};

export const isEmpty = (obj: any) => {
   return Object.keys(obj).length === 0;
};
