interface ICustomerBuilder {
  setFirstName(firstname: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

interface ICustomer {
  firstname: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

class Customer implements ICustomer {
  firstname: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(
    firstname: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

class CustomerBuilder implements ICustomerBuilder {
  firstname: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";

  setFirstName(firstname: string): ICustomerBuilder {
    this.firstname = firstname;
    return this;
  }
  setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }
  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }
  build(): ICustomer {
    return new Customer(
      this.firstname,
      this.lastName,
      this.email,
      this.phoneNumber
    );
  }
}

class CustomerDirector {
  builder: ICustomerBuilder;
  constructor(builder: ICustomerBuilder) {
    this.builder = builder;
  }

  buildMinimal(firstname: string, lastName: string, email: string): ICustomer {
    return this.builder
      .setFirstName(firstname)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const builder: ICustomerBuilder = new CustomerBuilder();
const director: CustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = director.buildMinimal(
  "Prakhar",
  "Srivastava",
  "prakharatdit@gmail.com"
);

console.log(customer);
