const Employee = require('../lib/employee');
const employee = new Employee('brikena', '888', "bprendaj2@gmail.com")
g
// create employee object
test('check if an employee object has been created', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com';

    // TEST OUTPUT
    const resultName = employee.name;
    const resultEid = employee.eid;
    const resultEmail = employee.email;

    // TEST
    expect(testName).toEqual(resultName);
    expect(testEid).toEqual(resultEid);
    expect(testEmail).toEqual(resultEmail);
})

// TEST getName() FUNCTION
test('check if getName() function returns the name', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    const resultName = employee.getName();
    expect(testName).toEqual(resultName);
})

// TEST getEid() FUNCTION
test('check if getEid() function returns the eid', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    const resultEid = employee.getEid();
    expect(testEid).toEqual(resultEid);
})

// TEST getEmail() FUNCTION
test('check if getEmail() function returns the email', () => {
    // TEST INPUT
    const testName = 'brikena';
    const testEid = '888';
    const testEmail = 'bprendaj2@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    const resultEmail = employee.getEmail();
    expect(testEmail).toEqual(resultEmail);
})

// TEST getRole() FUNCTION
test('check if getRole() function returns the position', () => {

        // TEST INPUT
        const testName = 'brikena';
        const testEid = '888';
        const testEmail = 'bprendaj2@gmail.com'

    // OPERATION
    const employee = new Employee(testName, testEid, testEmail);
    const resultRole = employee.getRole();
    expect(e.getRole()).toBe(testValue);
    })
