const helpFuncs = require('./helpFuncs');

test('Cheks the dayInWeek num', () => {
    expect(helpFuncs.dayInWeek()).toBe(2);
});

test('Check if array contains Oren', () => {
    expect(['Oren', 'Tali', 'Emri']).toContain('Oren');
});

// testing async data async/await style
test('User fatched name should be Leanne Graham (async/await style)', async () => {
    expect.assertions(1);
    const data = await helpFuncs.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

});


// testing async data promis style
test('User fatched name should be Leanne Graham (promis style)', () => {
    expect.assertions(1);
    return helpFuncs.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});