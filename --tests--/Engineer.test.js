const Engineer = require('../lib/engineer');
const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    
// TEST INSTANTIATION OF OBJECT 
test('check if an engineer object has been created', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj@gmail.com';
    const testGithub = 'bprendaj'


    // TEST OUTPUT
    const resultName = engineer.name;
    const resultEid = engineer.eid;
    const resultEmail = engineer.email;
    const resultGithub = engineer.github;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
    expect(testGithub).toEqual(resultGithub);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testGithub = 'bprendaj'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultName = engineer.getName();
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testGithub = 'bprendaj'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultEid = engineer.getEid();
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testGithub = 'bprendaj'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultEmail = engineer.getEmail();
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION

test("getRole() should return \"Engineer\"", () => {
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultRole = engineer.getRole();
    expect('Engineer').toEqual(resultRole);
})

// TEST getGithub() FUNCTION
test("Can get GitHub username via getGithub()", () => {

    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultGithub = engineer.getGithub();
    expect(testGithub).toEqual(resultGithub);
})

// TEST getGithub() FUNCTION
test('check if getGithub() function returns the position', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testGithub = 'bprendaj'

    // OPERATION
    const engineer = new Engineer(testName, testEid, testEmail, testGithub);
    const resultGithub = engineer.getGithub();
    expect(testGithub).toEqual(resultGithub);
})