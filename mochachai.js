const expect = chai.expect;

describe("Suits array of wardeck.js", () => {
  describe("Checking that suits array contains proper number for index.", () => {
    it("should contain 4 symbols", () => {
      expect(suits.length).to.equal(4);
    });
  });
});
