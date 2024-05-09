// Product class responsible for product data management
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
      console.log("Updating product:", this.name);
    }
  
    deleteProduct() {
      // Implementation of deleting product
      console.log("Deleting product:", this.name);
    }
  }
  
  // ProductCatalog class responsible for displaying product information
  class ProductCatalog {
    products: Product[];
  
    constructor(products: Product[]) {
      this.products = products;
    }
  
    displayCatalog() {
      let catalogHTML = "<h2>Product Catalog</h2>";
      this.products.forEach((product) => {
        catalogHTML += `<div>
                          <h3>${product.name}</h3>
                          <p><strong>Price:</strong> $${product.price}</p>
                          <p>${product.description}</p>
                        </div>`;
      });
      return catalogHTML;
    }
  }
  
  // Creating some sample products
  const products = [
    new Product("Laptop", 999, "Powerful laptop for professional use"),
    new Product("Smartphone", 599, "Latest smartphone with advanced features"),
    new Product("Headphones", 99, "High-quality headphones for immersive audio experience"),
  ];
  
  // Displaying product catalog
  const productCatalog = new ProductCatalog(products);
  const catalogHTML = productCatalog.displayCatalog();
  console.log("Product Catalog HTML:", catalogHTML);
  