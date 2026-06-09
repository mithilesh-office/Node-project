import { validateUser }from "../validators/userValidator.js";

class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }


    createUser(user, notificationStrategy) {

        const validatedUser = validateUser(user);
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

    updateUser(id, user) {
         const validatedUser = validateUser(user);
         return this.userRepository.update(id,validatedUser);

    }

    deleteUser(id) {
        this.userRepository.delete(id);
    }
}

export default UserService;