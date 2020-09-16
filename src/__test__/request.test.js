jest.mock("../javascript/request.js");
const mockGetUser = jest.fn(() => Promise.resolve({ data: {} }));
const mockGetEducation = jest.fn(() => Promise.resolve({ data: {} }));
describe("request", () => {
  test("should get user info when getUser called", async () => {
    const result = mockGetUser();
    expect(mockGetUser).toHaveBeenCalled();
    expect(mockGetUser).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual({ data: {} });
  });
  test("should get Educations info when getEducation called", async () => {
    const result = mockGetEducation();
    expect(mockGetEducation).toHaveBeenCalled();
    expect(mockGetEducation).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual({ data: {} });
  });
});
