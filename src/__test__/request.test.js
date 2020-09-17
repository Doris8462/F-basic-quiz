import * as request from "../javascript/request";

jest.mock("../javascript/request.js");
describe("request", () => {
  test("should get user info when getUser called", async () => {
    // TODO feedback: 手动调用了request.getUser，然后再测试被调用，意义不大
    request.getUser.mockImplementation(() => {});
    request.getUser(1);
    expect(request.getUser).toHaveBeenCalled();
    expect(request.getUser).toHaveBeenCalledTimes(1);
  });
  test("should get Educations info when getEducation called", async () => {
    request.getEducation.mockImplementation(() => {});
    request.getEducation(1);
    expect(request.getEducation).toHaveBeenCalled();
    expect(request.getEducation).toHaveBeenCalledTimes(1);
  });
});
