const request = require("supertest");
const app = require("../app");

describe("Healthcheck Test", () => {
  it("should return status OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("OK");
  });
});
