
const Engineer =require('../lib/Engineer');

test('checks for GitHub profile', () => {
    const e = new Engineer('sebastian2908-2007');

    expect(e.gitHub).toEqual(expect.any(String));
});
