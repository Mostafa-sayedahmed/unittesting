var expect = require("chai").expect;
const { capitalizeText } = require("./mochaLab");
const { createArray } = require("./mochaLab");

describe("capitalizeText", function () {
  it("should return a string", function () {
    expect(capitalizeText("string")).to.be.a("string");
  });
  it("should return a string after capitalize", function () {
    expect(capitalizeText("mostafa")).to.equal("MOSTAFA");
  });
  it("should throw error when passing number", function () {
    expect(function () {
      capitalizeText(8);
    }).to.throw(TypeError);
  });
});

describe("createArray", function () {
  it("should return an array", function () {
    expect(createArray(3)).to.be.an.instanceof(Array);
  });
  it("should return an array of length 2 and includes 1", function () {
    expect(createArray(2))
      .to.include(1)
      .to.be.an.instanceof(Array)
      .to.be.lengthOf(2);
  });
  it("should return an array of length 3 and dosent include 3", function () {
    expect(createArray(3))
      .to.be.an.instanceof(Array)
      .to.be.lengthOf(3)
      .to.not.include(3);
  });
});
