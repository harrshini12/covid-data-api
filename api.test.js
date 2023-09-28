const { app } = require("./server");
const supertest = require("supertest");
const request = supertest(app);

describe("API Tests", () => {
  it("should retrieve all countries information", async () => {
    const response = await request.get("/allcountriesinfo");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("should retrieve specific country information", async () => {
    const response = await request.get("/specificcountryinfo/India");
    expect(response.statusCode).toBe(200);
    expect(response.body.countryName).toBe("India");
  });

  it("should retrieve total cases", async () => {
    const response = await request.get("/cases");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.some((item) => item.hasOwnProperty("cases"))).toBe(
      true
    );
  });

  it("should retrieve total deaths", async () => {
    const response = await request.get("/deaths");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.some((item) => item.hasOwnProperty("deaths"))).toBe(
      true
    );
  });

  it("should perform a health check", async () => {
    const response = await request.get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message", "Health check passed");
  });
});
