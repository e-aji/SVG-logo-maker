// Import the circle, square, and triangle classes from the shapes module
const {Circle, Square, Triangle} = require("./shapes");

// Test for circle class
describe ("Circle", () => {
    test ("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green"/>'

        const circle = new Circle("");
        circle.setColor('green');
        const actualSvg = circle.render();
        console.log(actualSvg);
        expect(actualSvg).toEqual(expectedSvg);
    }); 
    test ("should accept a fillColor parameter", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue"/>'

        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
  
});

// Test for triangle class
describe ("Triangle", () => {
    test("should render svg for a bisque polygon element", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque"/>'

        const triangle = new Triangle("");
        triangle.setColor("bisque");
        const actualSvg = triangle.render();
        console.log(actualSvg);
        expect(actualSvg).toEqual(expectedSvg);

    });

    test ("should accept a fillColor parameter", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple"/>'

        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);

    });


});

// Test for square class
describe ("Square", () => {
    test ("should render svg for a teal rect element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="teal"/>'

        const square = new Square("");
        square.setColor("teal");
        const actualSvg = square.render();
        console.log(actualSvg);
        expect(actualSvg).toEqual(expectedSvg);
    });

    test ("should accept a fillColor parameter", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red"/>';

        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);

    });

});