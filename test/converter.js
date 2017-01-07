var expect = require("chai").expect;

describe("A front end developer", function() {
  it.skip("should be able to reverse a string", function() {
    const reverse = require("../app/reverse")
    expect(reverse("hello world")).to.equal("dlrow olleh")
  });

  it.skip("should be able to calculate basic addition", function() {
    const math = require("../app/math")
    expect(math("1 + 1")).to.equal(2)
    expect(math("1 + 3")).to.equal(4)
    expect(math("1000 + 1")).to.equal(1001)
    expect(math("6 + 7")).to.equal(13)
  });

  it.skip("should be able to calculate basic subtraction", function() {
    const math = require("../app/math")
    expect(math("1 - 1")).to.equal(0)
    expect(math("1 - 3")).to.equal(-2)
    expect(math("1000 - 1")).to.equal(999)
    expect(math("6 - 7")).to.equal(-1)
    expect(math("-1000 - 1")).to.equal(-1001)
    expect(math("6 - -7")).to.equal(13)
  });

  it.skip("should be able to calculate basic multiplication", function() {
    const math = require("../app/math")
    expect(math("1 * 1")).to.equal(1)
    expect(math("1 * 3")).to.equal(3)
    expect(math("1000 * 1")).to.equal(1000)
    expect(math("6 * 7")).to.equal(42)
  });

  it.skip("should be able to calculate basic division", function() {
    const math = require("../app/math")
    expect(math("6 / 3")).to.equal(2)
    expect(math("12 / 3")).to.equal(4)
    expect(math("-1000 / 1")).to.equal(-1000)
    expect(math("16 / 2")).to.equal(8)
  });

  it.skip("should be able to throw error for non math expressions", function() {
    const math = require("../app/math")
    expect(math("this isn't math")).to.throw(new Error('Invalid expression'));
    expect(math("1 + 1;console.log('XSS')")).to.throw(new Error('Invalid expression'));
    expect(math("console.log('XSS');1 + 1")).to.throw(new Error('Invalid expression'));
  });

  it.skip("should be able to transform an object", function() {
    const transform = require("../app/transform")
    const originalObject = [
      {id: "1111", type:"circle", x: 5, y: 17, position: "center"},
      {id: "2222", type:"circle", x: 5, y: 17, position: "center"}, 
      {id: "3333", type:"circle", x: 5, y: 17, position: "center"}, 
      {id: "4444", type:"rectangle", x: 5, y: 17, position: "center"},
      {id: "5555", type:"rectangle", x: 5, y: 17, position: "center"}, 
      {id: "6666", type:"rectangle", x: 5, y: 17, position: "center"}, 
    ]
    const expectedObject = {
      "circle": {
        "1111": {x: 5, y: 17, position: "center"},
        "2222": {x: 5, y: 17, position: "center"},
        "3333": {x: 5, y: 17, position: "center"},
      },
      "rectangle": {
        "4444": {x: 5, y: 17, position: "center"},
        "5555": {x: 5, y: 17, position: "center"},
        "6666": {x: 5, y: 17, position: "center"},
      }
    }
    expect(transform(originalObject)).to.deep.equal(expectedObject);
  });

  it.skip("should be able to transform only whats given", function() {
    const transform = require("../app/transform")
    const originalObject = [
      {id: "1111", type:"circle", x: 5, y: 17, position: "center"},
    ]
    const expectedObject = {
      "circle": {
        "1111": {x: 5, y: 17, position: "center"},
      }
    }
    expect(transform(originalObject)).to.deep.equal(expectedObject);
  });

});
