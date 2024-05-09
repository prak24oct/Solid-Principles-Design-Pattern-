# Single Responsibility Principle (SRP)

The Single Responsibility Principle (SRP) is one of the SOLID principles of object-oriented programming. It states that a class should have only one reason to change, meaning that a class should have only one responsibility or job.

## Explanation

- **Single Responsibility**: A class should be responsible for only one thing. It should encapsulate one and only one aspect of a program's functionality. This helps in making classes more focused, easier to understand, and maintainable.

## Benefits

- **Code Cohesion**: Classes with a single responsibility have higher cohesion, meaning that all the elements of the class are related and work together to achieve a single purpose.
- **Easier Maintenance**: When a class has a single responsibility, changes to that responsibility are localized. This makes it easier to modify and maintain the code without affecting other parts of the system.
- **Reusability**: Classes with single responsibilities are often more reusable in different contexts because they are focused and have clear boundaries.

## Example

Consider a `Product` class in an e-commerce application. Following SRP, it should be responsible only for managing product data such as name, price, and description. It should not be responsible for displaying the product, handling payments, or managing inventory. Instead, those responsibilities should be delegated to other classes.

```typescript
// Product class responsible for managing product data
class Product {
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  updateProduct() {
    // Implementation of updating product information
  }

  deleteProduct() {
    // Implementation of deleting product
  }
}
```