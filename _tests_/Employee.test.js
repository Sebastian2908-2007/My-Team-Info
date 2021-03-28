const inquirer = require('inquirer');
const Employee = require('../lib/Employee')

test('test for checking weather or not name has  been answered', () => {
    const e = new Employee('test', '2', 'test@email.com')
  expect(e.name).toEqual(expect.any(String));
});
test('test for checking whether or not employee Id has been entered', () => {
    const e = new Employee('test', '2', 'test@email.com')
expect(e.employId).toEqual(expect.any(String));
});

test('test for email adress' , () => {
    const e = new Employee('test', '2', 'test@email.com');
    expect(e.eMail).toEqual(expect.any(String));
});