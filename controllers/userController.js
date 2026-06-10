import { userService } from "../container.js";
import NotificationFactory from "../strategies/NotificationFactory.js";

function createUserController(service) {
    const createUser = async (req, res) => {
        try {
            const { name, email, phone, notificationType } = req.body;
            const userData = { name, email, phone };
            const strategy = NotificationFactory.createNotification(notificationType);
            const result = await service.createUser(userData, strategy);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    const getUser = async (req, res) => {
        try {
            const user = await service.getUser(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    const getAllUsers = async (req, res) => {
        try {
            const users = await service.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    const updateUser = async (req, res) => {
        try {
            const result = await service.updateUser(req.params.id, req.body);
            if (!result) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    const deleteUser = async (req, res) => {
        try {
            await service.deleteUser(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
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

