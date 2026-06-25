class Shape {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }
    descibe() {
        return `Name: ${this.name}, Colour: ${this.colour}`;
    }
    compare(a, b) {
        return a.area > b.area ? a : b;
    }
}

class Circle extends Shape {
    constructor(radius, ...parentArgs) {
        super(...parentArgs);
        this.radius = parseFloat(radius);
        this.area();
        this.perimeter();
    }
    area() {
        this.areaValue = Math.PI * this.radius * this.radius;
        return this.areaValue;
    }
    perimeter() {
        this.perimeterValue = 2 * Math.PI * this.radius;
        return this.perimeterValue;
    }
    descibe() {
        this.area();
        this.perimeter();
        return `Name: ${this.name}, Colour: ${this.colour}, Radius: ${this.radius}, Area: ${this.areaValue}, Perimeter: ${this.perimeterValue}`;
    }
}

class Rectangle extends Shape {
    constructor(w, h, ...parentArgs) {
        super(...parentArgs);
        this.w = parseFloat(w);
        this.h = parseFloat(h);
        this.area();
        this.perimeter();
    }

    area() {
        this.areaValue = this.w * this.h;
        return this.areaValue;
    }

    perimeter() {
        this.perimeterValue = 2 * (this.w + this.h);
        return this.perimeterValue;
    }
    descibe() {
        this.area();
        this.perimeter();
        return `Name: ${this.name}, Colour: ${this.colour}, Width: ${this.w}, Height: ${this.h}, Area: ${this.areaValue}, Perimeter: ${this.perimeterValue}`;
    }
}

class Triangle extends Shape {
    constructor(base, height, ...parentArgs) {
        super(...parentArgs);
        this.base = parseFloat(base);
        this.height = parseFloat(height);
        this.area();
    }

    area() {
        this.areaValue = 0.5 * this.base * this.height;
        return this.areaValue;
    }

    descibe() {
        this.area();
        return `Name: ${this.name}, Colour: ${this.colour}, Base: ${this.base}, Height: ${this.height}, Area: ${this.areaValue}`;
    }
}

class ShapeCollection {
    constructor(...collections) {
        this.collections = [...collections];
    }
    add(shape) {
        this.collections.push(shape);
    }
    removeById(id) {
        this.collections.pop(id);
    }
    getByType(type) {
        return this.collections.filter((item) => typeof item === type);
    }
    sortByArea() {
        return this.collections.sort((a, b) => a.area() - b.area());
    }
    getTotalArea() {
        let total = 0;
        this.collections.map((item) => {
            total = item.area() + total;
        });
        return total;
    }
}

const circle = new Circle(2, "circle", "red");
const rectangle = new Rectangle(2, 4, "rectangle", "green");
const triangle = new Triangle(2, 4, "triangle", "yellow");

console.log(circle.descibe());
console.log(rectangle.descibe());
console.log(triangle.descibe());

const collections = new ShapeCollection(circle, rectangle, triangle);

console.log(collections.sortByArea());
console.log(collections.getTotalArea());
console.log(circle instanceof Circle);
console.log(rectangle instanceof Shape);
console.log(Object.getPrototypeOf(rectangle));
console.log(triangle.name);
