const Intern = require('../lib/Intern');

test('check for intern school', () => {
    const i = new Intern('clyde high School');

    expect(i.school).toEqual(expect.any(String));
});