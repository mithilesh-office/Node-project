import { describe, beforeEach, it, expect, jest } from "@jest/globals";
import UserService from "../../services/UserService.js";

describe("UserService", () => {
  let repository;
  let service;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
      getById: jest.fn(),
      getAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    service = new UserService(repository);
  });

  it("creates a user and sends notification", () => {
    const user = {
      name: "John",
      email: "john@test.com",
    };

    const notificationStrategy = {
      send: jest.fn(),
    };

    const result = service.createUser(user, notificationStrategy);

    expect(repository.create).toHaveBeenCalledWith(user);
    expect(notificationStrategy.send).toHaveBeenCalledWith(user);
    expect(result).toEqual(user);
  });

  it("gets a user by id", () => {
    const user = { id: 1, name: "John" };

    repository.getById.mockReturnValue(user);

    const result = service.getUser(1);

    expect(repository.getById).toHaveBeenCalledWith(1);
    expect(result).toEqual(user);
  });

 



 
});