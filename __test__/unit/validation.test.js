import { describe, it, expect, jest } from "@jest/globals";
import validateBody from "../../middlewares/validateBody.js";

describe("validateBody", () => {
  it("should validate body and call next", () => {
    const parsedData = {
      name: "John",
      email: "john@test.com",
    };

    const schema = {
      safeParse: jest.fn().mockReturnValue({
        success: true,
        data: parsedData,
      }),
    };

    const req = {
      body: {
        name: "John",
      },
    };

    const next = jest.fn();

    validateBody(schema)(req, {}, next);

    expect(schema.safeParse).toHaveBeenCalledWith({
      name: "John",
    });

    expect(req.body).toEqual(parsedData);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it("should pass validation error to next", () => {
    const error = new Error("Validation failed");

    const schema = {
      safeParse: jest.fn().mockReturnValue({
        success: false,
        error,
      }),
    };

    const req = {
      body: {},
    };

    const next = jest.fn();

    validateBody(schema)(req, {}, next);

    expect(schema.safeParse).toHaveBeenCalledWith({});
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
  });
});