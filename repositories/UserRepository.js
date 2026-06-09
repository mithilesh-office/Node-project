class UserRepository {

    constructor() { 
        this.users = [];
    }

    create(user) {
        this.users.push(user);
    }

    getById(id) {
        return this.users.find(user => user.id == id);
    }

    getAll() {
        return this.users;
    }

    update(id, updatedUser) {

        const user = this.getById(id);

        if (!user) {
            return null;
        }

        user.name = updatedUser.name;
        user.email = updatedUser.email;
        user.phone = updatedUser.phone;

        return user;
    }

    delete(id) {

        this.users = this.users.filter(user => user.id != id );
    }
}

export default UserRepository;