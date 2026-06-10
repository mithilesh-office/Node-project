import { userService } from "../container.js";
import NotificationFactory from "../strategies/NotificationFactory.js";
import AppError from "../errors/AppError.js";

function createUserController(service) {
    const createUser = async (req, res) => {
        const { name, email, phone, notificationType } = req.body;
        const userData = { name, email, phone };
        const strategy = NotificationFactory.createNotification(notificationType);
        const result = await service.createUser(userData, strategy);
        res.status(201).json(result);
    };

    const getUser = async (req, res) => {
        const user = await service.getUser(req.params.id);
        if (!user) {
            throw new AppError("User not found", 404);
        }
        res.json(user);
    };

    const getAllUsers = async (req, res) => {
        const users = await service.getAllUsers();
        res.json(users);
    };

    const updateUser = async (req, res) => {
        const result = await service.updateUser(req.params.id, req.body);
        if (!result) {
            throw new AppError("User not found", 404);
        }
        res.json(result);
    };

    const deleteUser = async (req, res) => {
        await service.deleteUser(req.params.id);
        res.status(204).send();
    };

    return {
        createUser,
        getUser,
        getAllUsers,
        updateUser,
        deleteUser
    };
}

export const userController = createUserController(userService);

