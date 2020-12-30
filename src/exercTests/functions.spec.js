import {
  sum,
  mul,
  sub,
  div,
  uppercase,
  lowercase,
  ifPairNumberInArray,
  ifSecureWeb,
  getFruits,
  countArrayElements,
  getProfile,
  getProfileFail,
  validateUserCredential,
  sumNumbers,
} from './functions';
/**
* Example tests
*/
test('should return the sum of 2 numbers', () => {
  expect(sum(1, 1)).toBe(2);
});

test('should return the multiplication of 2 numbers', () => {
  expect(mul(2, 2)).toBe(4);
});

test('should return the subtraction of 2 numbers', () => {
  expect(sub(3, 2)).toBe(1);
});

test('should return the division of 2 numbers', () => {
  expect(div(4, 2)).toBe(2);
});

test('should return the string to uppercase', () => {
  expect(uppercase('pasto')).toBe('PASTO');
});

test('should return the string to lowercase', () => {
  expect(lowercase('PASTO')).toBe('pasto');
});

test('should return true if there is at least a par number on the array', () => {
  expect(ifPairNumberInArray([1, 3, 5, 2, 7])).toBeTruthy()
})

test('should return true if the url is not secure', () => {
  expect(ifSecureWeb('http://www.holamundo.com')).toBeFalsy()
})

test(`getFruits() should return array of fruits`, () => {
  expect(getFruits()).toStrictEqual(['apple','banana','kiwi','orange',])
  expect(getFruits()).toBeInstanceOf(Array)
})

test('should return the length of an array', () => {
  expect(countArrayElements(['a', 't', 'hola', 4])).toBe(4)
})

test('should return an object with a status and profile data', () => {
  expect(getProfile()).toBeInstanceOf(Object)
  expect(getProfile()).toHaveProperty('status', 200)
  expect(getProfile()).toHaveProperty('data')
})

test('should return an object with an error status and null data', () => {
  expect(getProfileFail()).toBeInstanceOf(Object)
  expect(getProfileFail()).toHaveProperty('status', 404)
  expect(getProfileFail()).toHaveProperty('data', null)
})

test('should return the user object if he or she is an allower user', () => {
  const user1 = {
    name: 'admin',
    age: 25
  }
  const user2 = {
    name: 'leandro',
    age: 32
  }
  expect(validateUserCredential(user1)).toBe(user1)
  expect(() => validateUserCredential(user2)).toThrowError('El usuario no esta autorizado')
})

test('Should return the sum of 2 number', () => {
  expect(sumNumbers(2,2)).toBe(4)
  expect(() => sumNumbers('a', 2)).toThrowError('Only number params are allowed')
  expect(() => sumNumbers('a', 'b')).toThrowError('Only number params are allowed')
  expect(() => sumNumbers(2, 'b')).toThrowError('Only number params are allowed')
})