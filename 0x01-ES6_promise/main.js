// import getResponseFromAPI from "./0-promise.js";

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);

import getFullResponseFromAPI from './1-promise.js';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
// getFullResponseFromAPI(false)