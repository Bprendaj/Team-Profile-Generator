const Manager = require('../lib/manager');
const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);

// TEST INSTANTIATION OF OBJECT 
test('check if an intern object has been created', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'
    
    // TEST OUTPUT
    const resultName = manager.name;
    const resultEid = manager.eid;
    const resultEmail = manager.email;
    const resultOfficeNumber = manager.officeNumber;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
    expect(testOfficeNumber).toEqual(resultOfficeNumber);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'

    // OPERATION
    const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);
    
    // TEST OUTPUT
    const resultName = manager.getName();

    // TEST
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'

    // OPERATION
    const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);
    const resultEid = manager.getEid();
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'

    // OPERATION
    const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);
    const resultEmail = manager.getEmail();
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test('check if getRole() function returns the position', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'

    // OPERATION
    const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);
    const resultRole = manager.getRole();
    expect('Manager').toEqual(resultRole);
})

// TEST getOfficeNumber() FUNCTION
test('check if getOfficeNumber() function returns the position', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';
    const testOfficeNumber = '1234'

    // OPERATION
    const manager = new Manager(testName, testEid, testEmail, testOfficeNumber);
    const resultOfficeNumber = manager.getOfficeNumber();
    expect(testOfficeNumber).toEqual(resultOfficeNumber);
})