// 일반적인 직원 정보
// let empName: string;
// let age: number;
// let empJop: string;

// function printEmp(empName: string, age: number, empJop: string): void {
//   console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJop}입니다.`);
// }
// printEmp('Min', 20, 'developer');

// 멤버변수 == 속성 == 프로퍼티

class Employee {
  empName: string;
  age: number;
  empJob: string;

  constructor(name: string, age: number, job: string) {
    this.empName = name;
    this.age = age;
    this.empJob = job;
  }

  printEmp(): void {
    console.log(
      `${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`
    );
  }
}

const employee1 = new Employee('kim', 20, '개발자');
employee1.printEmp();
