const {SVG, LogoText} = require('./svg');
const {Square} = require('./shapes');

test ('should render a 300 x 200 svg element', () => {

    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="teal"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
   
    const square = new Square('teal');
    const logoText = new LogoText('SVG', 'white');
   
    const svg = new SVG(square, logoText);

    expect(svg.render()).toEqual(expectedSvg);

});
