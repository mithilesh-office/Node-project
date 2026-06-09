import { validateUser }from "../validators/userValidator.js";

class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUser(user,notificationStrategy) {

        validateUser(user);
        this.userRepository.create(user);
        notificationStrategy.send(user);
        return user;
    }

    getUser(id) {
        return this.userRepository.getById(id);
    }

    getAllUsers() {
        return this.userRepository.getAll();
    }

    updateUser(id, user) {

        validateUser(user);
        return this.userRepository.update(id, user);
    }

    deleteUser(id) {
        this.userRepository.delete(id);
    }
}

export default UserService;