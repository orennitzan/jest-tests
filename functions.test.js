const functions = require('./functions');

// runs before each test
//beforeEach(() => initDatabase());
// runs after each test
//afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Initiating DB');
const closeDatabase = () => console.log('Closing DB');

const doSomeInit = () =>  console.log('Some init!!');

describe('Some tests that needs beforeEach. Only those will get beforeEach', () => {
    beforeEach(() => doSomeInit());

    test('some test', () => {
        expect('Oren').toBe('Oren');
    });

    
    test('some other test', () => {
        expect('Tomer').toBe('Tomer');
    });
});


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Check if a value is null', () => {
    expect(functions.isNull(null)).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.isNull(null)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.isNull(undefined)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.isNull(false)).toBeFalsy();
});

test('User shoulf be Oren Nitzan onject', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Oren', lastName: 'Nitzan' });
})

