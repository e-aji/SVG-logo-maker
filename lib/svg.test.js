const {SVG, LogoText, logoText} = require("./svg");
const {Square} = require("./shapes");

test ('should render a 300 x 200 svg element', () => {

    const color = "red";
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"/></svg>';
   
    const Square = new Square(color);
    const logoText = new LogoText("Hello World", color);
   
    const svg = new SVG(Square, logoText);
    expect(svg.render()).toEqual(expectedSvg);

});
   