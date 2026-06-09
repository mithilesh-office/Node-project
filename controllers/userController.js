import User from "../models/User.js";
import InMemoryUserRepository from "../repositories/InMemoryUserRepository.js";
import MongoUserRepository from "../repositories/MongoUserRepository.js";
import UserService from "../services/UserService.js";
import EmailNotification from "../strategies/EmailNotification.js";
import SmsNotification from "../strategies/SmsNotification.js";

const repository = new MongoUserRepository();
const service = new UserService(repository);

export const createUser = async (req, res) => {
    try {
        const { name, email, phone, notificationType } = req.body;
        
        const userData = { name, email, phone };
        
        const strategy = notificationType === "sms" ? new SmsNotification() : new EmailNotification();
        
        const result = await service.createUser(userData, strategy);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
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

export const getAllUsers = async (req, res) => {
    try {
        const users = await service.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
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

export const deleteUser = async (req, res) => {
    try {
        await service.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
