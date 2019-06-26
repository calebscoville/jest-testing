// bring in the module with our functions
const functions = require('./functions');


// Check to be a specific value
test('Adds two and two to return four', () => {
    expect(functions.add(2,2)).toBe(4);
});

// Check to not be a specific value
test('Adds two and two to not equal five', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// Check for null value
test('isNull should return a null value', () => {
    expect(functions.isNull()).toBeNull();
});

// Check for value to be undefined
test('isUndefined should return an undefined value', () => {
    expect(functions.isUndefined()).toBeUndefined();
});

// Check for a truthy value
test('isTruthy should return a truthy value', () => {
    expect(functions.isTruthy()).toBeTruthy();
});

// Check for a falsy value
test('isFalsy should return a falsy value', () => {
    expect(functions.isFalsy()).toBeFalsy();
});

// Check if the number is greater than
test('number func should return a number grater than 5', () => {
    expect(functions.number(6)).toBeGreaterThan(5);
});

// Check if a number is greater than or equal to
test('number func should return a num greater than or equal to 5', () => {
    expect(functions.number(5)).toBeGreaterThanOrEqual(5);
})

// Check if a number is less than
test('number func should return a n umber less than 5', () => {
    expect(functions.number(3)).toBeLessThan(5);
});

// Check if a number is less than or equal to
test('number func should return a number less than or equal to 5', () => {
    expect(functions.number(5)).toBeLessThanOrEqual(5);
});


// COMPLEX TYPES
// toEqual
test('newUser should return a new user object with a name prop equal to tayte and gender prop equal to male', () => {
    expect(functions.newUser()).toEqual({
        name: 'tayte',
        gender: 'male'
    });
});

// toContain
test('newArray should contain an elemenet of 2', () => {
    expect(functions.newArray()).toContain(2);
});