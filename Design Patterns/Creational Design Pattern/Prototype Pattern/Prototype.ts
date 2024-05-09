interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  public properties: ShapeProperties;
  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(propertise: ShapeProperties, width: number, height: number) {
    super(propertise);
    this.width = width;
    this.height = height;
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  radius: number;
  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
    this.radius = radius;
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}


let redRectangle: Shape = new Rectangle({color:'red',
    x:0,y:0
}, 10,20)

let anotherRectangle: Shape = redRectangle.clone();

anotherRectangle.properties.color = 'blue';

console.log(redRectangle);
console.log(anotherRectangle);