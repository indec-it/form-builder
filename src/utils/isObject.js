const isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value);

export default isObject;
