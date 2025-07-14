const localStorageSet = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}
const localStorageDelete = (key) => {
    localStorage.removeItem(key);
}
const localStorageGet = (key) => {
    try {
        const value = JSON.parse(localStorage.getItem(key)) || null;
        return typeof value === "object" && !Array.isArray(value) ? value : null
    } catch {
        localStorageDelete(key)
        return null;
    }
}

export {localStorageSet, localStorageDelete, localStorageGet};