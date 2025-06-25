describe("env config", () => {
  it("should load config without throwing", () => {
    expect(() => {
      const config = require("../env");
      expect(config).toHaveProperty("PORT");
      expect(config).toHaveProperty("NASA_API_KEY");
      expect(config).toHaveProperty("NASA_BASE_URL");
    }).not.toThrow();
  });
});
