interface Teacher {
    workTeacherTasks: () => string;
}
interface Director {
    workDirectorTasks: () => string;
}
export declare function createEmployee(salary: number): Teacher | Director;
export declare function isDirector(employee: Teacher | Director): employee is Director;
export declare function executeWork(employee: Teacher | Director): string;
export {};
//# sourceMappingURL=main.d.ts.map