const Manager = require('../lib/Manager');



test('check for intern name', () => {
    const i = new Manager('check name','hhhh','kkkk','ggggg');

    expect(i.name).toEqual(expect.any(String));
   
});

test('check for intern id', () => {
    const i = new Manager('id','hhhh','kkkk','ggggg');

   
    expect(i.employId).toEqual(expect.any(String));
    

});

test('check for intern email', () => {
    const i = new Manager('email','hhhh','kkkk','ggggg');

   
   
    expect(i.eMail).toEqual(expect.any(String));
   

});



test('checks for office number', () => {
    const m = new Manager('1234567','hhhh','kkkk','ggggg');

    expect(m.officeNum).toEqual(expect.any(String));

});