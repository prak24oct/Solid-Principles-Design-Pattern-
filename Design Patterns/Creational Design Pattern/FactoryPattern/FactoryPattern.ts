abstract class PaymentProcessor {
  constructor(public amount: number) {}
  abstract processPayment(): void;
}

class PayPalProcessor extends PaymentProcessor {
  processPayment() {
    console.log(
      `Processing Paypal payment of ${this.amount}!`
    );
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayment() {
    console.log(
      `Processing Stripe payment of ${this.amount}!`
    );
  }
}

class BankTransferProcessor extends PaymentProcessor {
  processPayment() {
    console.log(
      `Processing BankTransfer payment of ${this.amount}!`
    );
  }
}

class PaymentProcessorFactory {
  public createProcessor(
    type: string,
    amount: number
  ): PaymentProcessor | null {
    switch (type) {
      case "paypal":
        return new PayPalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "banktransfer":
        return new BankTransferProcessor(amount);
    }
    return null;
  }
}


const paymentProcessorFactory = new PaymentProcessorFactory();

const payPalProcessor = paymentProcessorFactory.createProcessor("paypal",500)
payPalProcessor?.processPayment();

const stripeProcessor = paymentProcessorFactory.createProcessor("stripe", 1000);
stripeProcessor?.processPayment();

const bankTransferProcessor = paymentProcessorFactory.createProcessor("banktransfer",1500);
bankTransferProcessor?.processPayment();

