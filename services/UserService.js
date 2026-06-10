class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUser(userData, notificationStrategy) {
        this.userRepository.create(userData);
        notificationStrategy.send(userData);
        return userData;
    }

    getUser(id) {
        return this.userRepository.getById(id);
    }

    getAllUsers() {
        return this.userRepository.getAll();
    }

    updateUser(id, userData) {
        return this.userRepository.update(id, userData);
    }

    deleteUser(id) {
        this.userRepository.delete(id);
    }
}

export default UserService;