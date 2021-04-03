
const Engineer =require('../lib/Engineer');


test('check for intern name', () => {
    const i = new Engineer('check name','hhhh','kkkk','ggggg');

    expect(i.eName).toEqual(expect.any(String));
   
});

test('check for intern id', () => {
    const i = new Engineer('id','hhhh','kkkk','ggggg');

   
    expect(i.eEmployId).toEqual(expect.any(String));
    

});

test('check for intern email', () => {
    const i = new Engineer('email','hhhh','kkkk','ggggg');

   
   
    expect(i.eEMail).toEqual(expect.any(String));
   

});


test('checks for GitHub profile', () => {
    const e = new Engineer('sebastian2908-2007','hhhh','kkkk','ggggg');

    expect(e.gitHub).toEqual(expect.any(String));
});
