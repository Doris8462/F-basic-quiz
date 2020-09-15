import * as request from "../javascript/request";

describe("introduce", () => {
  test("should return introduce when given name and age", () => {
    const result = request.introduce("Jack", 20);
    expect(result).toEqual("MY NAME IS Jack 20YO AND THIS IS MY RESUME");
  });
});
