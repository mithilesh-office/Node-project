import User from "../models/User.js";
import InMemoryUserRepository from "../repositories/InMemoryUserRepository.js";
import UserService from "../services/UserService.js";
import EmailNotification from "../strategies/EmailNotification.js";
import SmsNotification from "../strategies/SmsNotification.js";

const repository = new InMemoryUserRepository();
const service = new UserService(repository);

export const createUser = (req, res) => {
      try {
            const {id,name,email, phone, notificationType} = req.body;
            const user = new User(id, name, email, phone);
            const strategy = notificationType === "sms"? new SmsNotification(): new EmailNotification();
            const result = service.createUser(user,strategy );
            res.status(201).json(result);
        } 
        catch (error) {
            res.status(400).json({ message: error.message});
        }
    };

export const getUser =(req, res) => {

        const user =service.getUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    };


export const getAllUsers =  (req, res) => {
    res.json( service.getAllUsers() );
};


export const updateUser =(req, res) => {

        try {
            const result =service.updateUser(req.params.id,req.body);
            if (!result) {
                return res.status(404).json({ message:"User not found"});
            }
            res.json(result);
        } 
        catch (error) {
            res.status(400).json({ message: error.message});
        }
    };

export const deleteUser = (req, res) => {

        service.deleteUser(req.params.id);
        res.status(204).send();
    };