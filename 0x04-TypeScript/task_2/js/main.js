"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = createEmployee;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
function createEmployee(salary) {
    if (salary < 500) {
        return { workTeacherTasks: () => "Getting to work" };
    }
    else {
        return { workDirectorTasks: () => "Getting to director tasks" };
    }
}
// ✅ Type predicate
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// ✅ Must return, not console.log
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
//# sourceMappingURL=main.js.map