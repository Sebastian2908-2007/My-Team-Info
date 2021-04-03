const Intern = require('../lib/Intern');

test('check for intern name', () => {
    const i = new Intern('check name','hhhh','kkkk','ggggg');

    expect(i.iName).toEqual(expect.any(String));
   
});

test('check for intern id', () => {
    const i = new Intern('id','hhhh','kkkk','ggggg');

   
    expect(i.iEmployId).toEqual(expect.any(String));
    

});

test('check for intern email', () => {
    const i = new Intern('email','hhhh','kkkk','ggggg');

   
   
    expect(i.iEMail).toEqual(expect.any(String));
   

});

test('check for intern school', () => {
    const i = new Intern('check school','hhhh','kkkk','ggggg');

   
   
   
    expect(i.school).toEqual(expect.any(String));

});