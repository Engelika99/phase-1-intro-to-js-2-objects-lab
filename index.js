// Write your solution in this file!
const employee = {
    name: "Elmo",
    streetAddress: "La la la la Elmo's World",
};

function updateEmployeeWithKeyAndValue(employee, name, value){
    const employee2 = {...employee};
    employee2[name] = value;
    return employee2;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee[streetAddress] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const employee3 = {...employee};
    employee3[name];
    delete employee3.name;
    return employee3;
}
function destructivelyDeleteFromEmployeeByKey(employee, streetAddress){
    delete employee[streetAddress];
    return employee;
}