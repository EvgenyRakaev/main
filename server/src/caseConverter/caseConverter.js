export function snakeToCamel(key){
    return key.replace(/_([a-z])/g, (_, char) => char.toUpperCase())
}

export function objectSnakeToCamel(obj){
    const result = {}
    for(let key in obj) {
        const camelKey = snakeToCamel(key)
        result[camelKey] = obj[key]
    }
    return result;
}