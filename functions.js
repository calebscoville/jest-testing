module.exports = {
    // add function
    add: (num1, num2) => {
        return num1 + num2;
    },
    // return a null value
    isNull: () => null,
    // return an undefined value
    isUndefined: () => undefined,
    // return a truthy value
    isTruthy: () => true,
    // return a falsy value
    isFalsy: () => false,
    // return a number
    number: (num) => num,
    // return a user object
    newUser: () => {
        const user = {
            name: 'tayte',
            gender: 'male'
        }
        return user;
    },
    // return an array to check to see if it contains a value
    newArray: () => {
        return [1, 2, 3, 'tayte', 'stokes']
    },
};