const request = require("supertest");

let app;
const mockMorgan = jest.fn((req, res, next) => next());

beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);
  jest.mock("./", () => require("./homepage"));
  app = request(require("../app"));
});

afterAll(() => {
  jest.unmock("morgan");
  jest.unmock("./");
});

describe("GET", () => {
  it('should contain the word "test-restaurant"', async () => {
    const response = await app.get("/").expect(200);

    expect(response.text).toContain("test-restaurant");
  });
});

describe("DELETE", () => {
  it("should fail to delete the homepage", () => {
    return app.delete("/").expect(500);
  });
});
