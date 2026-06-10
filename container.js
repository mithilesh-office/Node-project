import "./config/env.js";
import RepositoryFactory from "./repositories/RepositoryFactory.js";
import UserService from "./services/UserService.js";

const config = {
    DATABASE_TYPE: process.env.DATABASE_TYPE || "mongodb"
};

const repository = RepositoryFactory.createUserRepository(config);
export const userService = new UserService(repository);
