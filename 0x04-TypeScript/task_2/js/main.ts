// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ALX checker-compatible createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) return new Teacher();
  return new Director();
}

// Type predicate for Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ALX-compatible string literal type alias
type Subjects = "Math" | "History";

// teachClass function using the type alias
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return "";
}

// -----------------
// Example Usage
// -----------------

console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee("$500").constructor.name); // Director

console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
