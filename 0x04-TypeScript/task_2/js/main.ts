interface Teacher {
  workTeacherTasks: () => string;
}

interface Director {
  workDirectorTasks: () => string;
}

export function createEmployee(salary: number): Teacher | Director {
  if (salary < 500) {
    return { workTeacherTasks: () => "Getting to work" };
  } else {
    return { workDirectorTasks: () => "Getting to director tasks" };
  }
}

// ✅ Type predicate
export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ✅ Must return, not console.log
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
