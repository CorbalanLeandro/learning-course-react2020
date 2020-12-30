/**
* This function sum two numbers.
*
* @param a
* @param b
*/
export const sum = (a, b) => {
  return a + b;
}
/**
* This function mul two numbers.
*
* @param a
* @param b
*/
export const mul = (a, b) => {
  return a * b;
}
/**
* This function sub two numbers.
*
* @param a
* @param b
*/
export const sub = (a, b) => {
  return a - b;
}
/**
* This function div two numbers.
*
* @param a
* @param b
*/
export const div = (a, b) => {
  return a / b;
}
/**
* Transform string to upperCase
* @param str
*/
export const uppercase = (str) => {
  return str.toUpperCase();
}
/**
* Transform string to lowerCase
* @param str
*/
export const lowercase = (str) => {
  return str.toLowerCase();
}
/**
* Check if there are any even numbers
* @param array
*/
export const ifPairNumberInArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return true
    }
  }
  return false;
}
/**
* Check if web protocol is secure
* @param web
*/
export const ifSecureWeb = (web) => {
  if (web.indexOf("https") === 0) {
    return true
  }
  return false;
}
/**
* Get some fruits array
*/
export const getFruits = () => {
  return [
    'apple',
    'banana',
    'kiwi',
    'orange',
  ]
}
/**
* Get some fruits array
*/
export const countArrayElements = (array) => {
  return array.length
}
/**
* Get success profile
*/
export const getProfile = () => {
  return {
    status: 200,
    data: {
      name: 'José',
      lastname: 'Barrozo',
      age: 20,
      status: 'active',
    }
  }
}
/**
* Get failed response
*/
export const getProfileFail = () => {
  return {
    status: 404,
    data: null
  }
}
/**
* Validate user credentials, throw error if user is not allowed
* @param user
* @return {*}
*/
export const validateUserCredential = (user) => {
  const allowedUsers = ['admin', 'jdrets', 'keanuReeves', 'chayanne'];
  if (allowedUsers.find(allowedUser => user.name === allowedUser)) {
    return user;
  } else {
    throw new Error("El usuario no esta autorizado");
  }
}
/**
* This function sum two numbers.
*
* @param a
* @param b
*/
export const sumNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Only number params are allowed");
  }
  return a + b;
}