const Intern = require('../lib/intern');

// TEST INSTANTIATION OF OBJECT 
test('check if an intern object has been created', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testSchool = 'Fordham'

    // OPERATION
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    
    // TEST OUTPUT
    const resultName = intern.name;
    const resultEid = intern.eid;
    const resultEmail = intern.email;
    const resultSchool = intern.school;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
    expect(testSchool).toEqual(resultSchool);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testValue = 'brikena';
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    const resultName = intern.getName();
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT

    const testValue = '888';
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    const resultEid = intern.getEid();
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    const testValue = 'bprendaj2@gmail.com';
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    const resultEmail = intern.getEmail();
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    const resultRole = intern.getRole();
    expect('Intern').toEqual(resultRole);
})

// TEST getSchool() FUNCTION
test("Can get school via getSchool()", () => {
    const testValue = 'Fordham';
    const intern = new Intern(testName, testEid, testEmail, testSchool);
    const resultSchool = intern.getSchool();
    expect(testSchool).toEqual(resultSchool);
})