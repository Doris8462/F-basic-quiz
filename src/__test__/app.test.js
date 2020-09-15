import "../javascript/app";
import { getUser, getEducation } from "../javascript/request";

jest.mock("../javascript/request");
describe("app", () => {
  test("should called getUser get Education when enter page", () => {
    expect(getUser).toHaveBeenCalled();
    expect(getUser).toHaveBeenCalledTimes(1);
    expect(getEducation).toHaveBeenCalled();
    expect(getEducation).toHaveBeenCalledTimes(1);
  });
});
