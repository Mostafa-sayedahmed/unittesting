const { User } = require("../../jasmineLab");
describe("User", function () {
  //   let usr;
  let product = {
    name: "pro1",
    price: 50,
  };

  describe("product", function () {
    it("product validation", function () {
      expect(product.name).toEqual(jasmine.any(String));
    });
    it("product validation", function () {
      expect(product.price).toEqual(jasmine.any(Number));
    });
  });
  describe("add to cart functions", function () {
    it("should add product to cart", function () {
      expect(User).toBeInstanceOf(Array);
    });
  });
});
