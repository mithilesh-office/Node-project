import { validateUser } from "../validators/userValidator.js";

class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }


    createUser(userData, notificationStrategy) {

        const validatedUser = validateUser(userData);
        this.userRepository.create(validatedUser);
        notificationStrategy.send(validatedUser);
        return validatedUser;
    }

    getUser(id) {
        return this.userRepository.getById(id);
    }

    getAllUsers() {
        return this.userRepository.getAll();
    }

    updateUser(id, userData) {
         const validatedUser = validateUser(userData);
         return this.userRepository.update(id,validatedUser);

    }
    deleteUser(id) {
        this.userRepository.delete(id);
    }
}

export default UserService;