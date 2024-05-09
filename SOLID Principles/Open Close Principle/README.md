# Open/Closed Principle (OCP) in TypeScript

The Open/Closed Principle (OCP) is a fundamental design principle in object-oriented programming. It suggests that software entities (classes, modules, functions) should be open for extension but closed for modification. This means that the behavior of a system can be extended without altering its existing codebase.

## Explanation

- **Open for Extension**: The system should allow for new functionality to be added without changing the existing code.
- **Closed for Modification**: Existing code should not need to be modified when extending the system's functionality.

## Example

In our example, we have an employee management system with different types of employees and their corresponding salary calculation logic.

```typescript
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
```

## Refactored Implementation

To adhere to the Open/Closed Principle, we can refactor the code to make it open for extension but closed for modification:

```typescript
class Intern implements Employee {
  constructor(private monthlyStipend: number) {}

  calculateSalary(): number {
    return this.monthlyStipend;
  }
}
```