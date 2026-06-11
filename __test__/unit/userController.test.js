import { jest, describe, beforeEach, it, expect } from "@jest/globals";

jest.unstable_mockModule("../../strategies/NotificationFactory.js", () => ({
  default: {
    createNotification: jest.fn(),
  },
}));
 
const { default: NotificationFactory } = await import(
  "../../strategies/NotificationFactory.js"
);

const { createUserController } = await import(
  "../../controllers/userController.js"
);

describe("UserController", () => {
  let service;
  let controller; 
  let req;
  let res;
 
  beforeEach(() => {
    service = {
      createUser: jest.fn(),
      getUser: jest.fn(),
      getAllUsers: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
    };

    controller = createUserController(service);

    req = {
      body: {},
      params: {},
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    jest.clearAllMocks();
  });

  it("creates a user", async () => {
    const strategy = { send: jest.fn() };

    NotificationFactory.createNotification.mockReturnValue(strategy);

    req.body = {
      name: "John",
      email: "john@test.com",
      phone: "1234567890",
      notificationType: "email",
    };

    const user = { id: 1, name: "John" };
    service.createUser.mockResolvedValue(user);

    await controller.createUser(req, res);

    expect(NotificationFactory.createNotification).toHaveBeenCalledWith(
      "email"
    );

    expect(service.createUser).toHaveBeenCalledWith(
      {
        name: "John",
        email: "john@test.com",
        phone: "1234567890",
      },
      strategy
    );

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("returns a user", async () => {
    const user = { id: 1, name: "John" };

    req.params.id = "1";
    service.getUser.mockResolvedValue(user);

    await controller.getUser(req, res);

    expect(service.getUser).toHaveBeenCalledWith("1");
    expect(res.json).toHaveBeenCalledWith(user);
  });

});