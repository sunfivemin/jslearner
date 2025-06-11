// 일반적인 직원 정보
// let empName: string;
// let age: number;
// let empJop: string;
// function printEmp(empName: string, age: number, empJop: string): void {
//   console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJop}입니다.`);
// }
// printEmp('Min', 20, 'developer');
// 멤버변수 == 속성 == 프로퍼티
var Employee = /** @class */ (function () {
    function Employee(name, age, job) {
        this.empName = name;
        this.age = age;
        this.empJob = job;
    }
    Employee.prototype.printEmp = function () {
        console.log("".concat(this.empName, "\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(this.empJob, "\uC785\uB2C8\uB2E4."));
    };
    return Employee;
}());
var employee1 = new Employee('kim', 20, '개발자');
employee1.printEmp();
