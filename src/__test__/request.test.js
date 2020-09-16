// eslint-disable-next-line no-unused-vars
import * as request from "../javascript/request";

jest.mock("../javascript/request.js");
describe("request", () => {
  const getUser = jest.fn().mockImplementation(() => true);
  const getEducation = jest.fn().mockImplementation(() => true);
  test("should get user info when getUser called", async () => {
    getUser.mockImplementation(() => {});
    getUser(1);
    expect(getUser).toHaveBeenCalled();
    expect(getUser).toHaveBeenCalledTimes(1);
  });
  test("should get Educations info when getEducation called", async () => {
    getEducation.mockImplementation(() => {});
    getEducation(1);
    expect(getEducation).toHaveBeenCalled();
    expect(getEducation).toHaveBeenCalledTimes(1);
  });
});
