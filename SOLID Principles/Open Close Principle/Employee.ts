interface Employee {
    calculateSalary(): number;
  }
  
  class FullTimeEmployee implements Employee {
    constructor(private baseSalary: number, private bonus: number) {}
  
    calculateSalary(): number {
      return this.baseSalary + this.bonus;
    }
  }
  
  class PartTimeEmployee implements Employee {
    constructor(private hoursWorked: number, private hourlyRate: number) {}
  
    calculateSalary(): number {
      return this.hoursWorked * this.hourlyRate;
    }
  }
  
  class Contractor implements Employee {
    constructor(private projectHours: number, private hourlyRate: number) {}
  
    calculateSalary(): number {
      return this.projectHours * this.hourlyRate;
    }
  }
  
  class SalaryCalculator {
    private employees: Employee[];
  
    constructor(employees: Employee[]) {
      this.employees = employees;
    }
  
    totalSalary(): number {
      return this.employees.reduce((total, employee) => total + employee.calculateSalary(), 0);
    }
  }
  
  // Example usage
  const fullTimeEmployee = new FullTimeEmployee(3000, 500);
  const partTimeEmployee = new PartTimeEmployee(20, 30);
  const contractor = new Contractor(100, 25);
  
  const salaryCalculator = new SalaryCalculator([fullTimeEmployee, partTimeEmployee, contractor]);
  
  console.log(salaryCalculator.totalSalary());

  

  //To adhere to the Open/Closed Principle, we can refactor the code to make it open for extension but closed for modification:

  class Intern implements Employee {
    constructor(private monthlyStipend: number) {}
  
    calculateSalary(): number {
      return this.monthlyStipend;
    }
  }
  
  