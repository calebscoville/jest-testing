// WHAT IS UNIT TESTING?
    // Unit testing is a software testing method where indivual units of code are tested to do what they are supposed to do
    // In other words, we write code to test our code
    // Unit tests isolate specific units of your code
    // A unit test is not dependent on an outside environment
    // These units of code that we will be testing are functions
    // The core idea of testing functions is this: Given a specific input, we will expect a specific output. We will test for that output

// Test Driven Development
    // TDD is more of a design proccess and the flow we follow rather than an actual testing proccess
    // TDD is a software development proccess of writing tests before writing our code
    //     Steps we follow:
    //     Write the test
    //     Run test, it should fail
    //     Write enough code to make the test pass
    //     Run test, it should now pass
    //     Refactor code to be more performant
    //     Repeat process

// JEST
    // Jest is a Javascript testing library, that we can use to write unit tests for our code.
    // Jest was created by Facebook and is very popular (because it's good)
    // Jest helps test for:
        // Vanilla JS
        // React
        // React Native
        // Other JS frameworks
    
    // Syntax Example:
    test('2 equals 2', function() {
        expect(2).toBe(2);
    });

    // we invoke a function called test, jest will know what to do since it lives inside the test file
    // the first argument is a string of the description that this test will do
    // the second argument is the callback function that will be executed to test
    // we then call expect passing in the function we want to test, passing in any params tha we want
    // after the invocation of expect, we will invoke a matcher function
    // the matcher function is where we can define what we expect to receive from our function and let us know if it passes or fails



// Let's Get Started
// run `npm install jest -D' the -D is saving it as a dev-dependency
// change the test script in the package.json to 'test'
// create a file to create functions
// create a file to test the functions, jest will look for a file that looks like *.test.js

// Test for primitive types
    // strings, numbers, etc
    // use toBe()
// Test for complex types
    // arrays, objects, etc
    // use toEqual()

// Grouped Unit Tests
    // we can use the describe function to groupe together unit tests
    // the first agument is a description of what this group will be testing
    // the second argument is the function that invokes the tests

    const mySnowcone = {
        delicious: true,
        sour: false
    }

    // Syntax Example:
    describe('my snowcone object', () => {
        test('my snowcone is not sour', () => {
            expect(mySnowcone.sour).toBeFalsy();
        });

        test('my snowcone to be delicious', () => {
            expect(mySnowcone.delicious).toBeTruthy();
        });
    })