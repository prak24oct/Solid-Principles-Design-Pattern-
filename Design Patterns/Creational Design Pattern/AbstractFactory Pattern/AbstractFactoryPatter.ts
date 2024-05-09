interface Button {
  render(): void;
  onClick(f: Function): void;
}

class WindowsButton implements Button {
  onClick(f: Function): void {
    console.log(
      "Windows Button onClicked called!"
    );
    f();
  }
  render() {
    console.log("Windows Button Rendered!");
  }
}

class MacOSButton implements Button {
  render(): void {
    console.log("Mac OS Button Rendered!");
  }
  onClick(f: Function): void {
    console.log("Mac OS Button onClick called!");
    f();
  }
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

class WindowsCheckboc implements Checkbox {
    private button: Button;
    constructor(button: Button){
        this.button = button;
    }
  render(): void {
    console.log("Windows checkbox rendered!");
  }
  toggle(): void {
    console.log("Windows toggle clicked!");
  }
}

class MacOSCheckbox implements Checkbox {
    private button : Button;
    constructor(button:Button){
        this.button = button
    }
  render(): void {
    console.log("MacOS checkbox rendered!");
  }
  toggle(): void {
    console.log("MacOS toggle clicked!");
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton()
    }
    createCheckbox(button: Button): Checkbox {
       return new WindowsCheckboc(button)
    }
    
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton()
    }
    createCheckbox(button: Button): Checkbox {
       return new MacOSCheckbox(button)
    }
    
}


/* USAGES */

function renderUI(factory: GUIFactory){
    const button = factory.createButton();
    const checkbox = factory.createCheckbox(button);

    button.render();
    button.onClick(()=>{
        console.log("Button Clicked!!!!!")
    });
    checkbox.render();
    checkbox.toggle();
}

console.log("App: Launched with the Windows factory.");
renderUI(new WindowsFactory());

console.log("App: Launched with the MacOS factory.");
renderUI(new MacOSFactory());
