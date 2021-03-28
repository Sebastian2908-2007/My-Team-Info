const Manager = require('../lib/Manager');
test('checks for office number', () => {
    const m = new Manager('1234567');

    expect(m.officeNum).toEqual(expect.any(String));

});