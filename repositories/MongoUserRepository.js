import UserModel
    from "../models/User.js";

class MongoUserRepository {

    async create(user) {

        return await UserModel.create(
            user
        );
    }

    async getById(id) {

        return await UserModel
            .findById(id);
    }

    async getAll() {

        return await UserModel
            .find();
    }

    async update(id, user) {

        return await UserModel
            .findByIdAndUpdate(
                id,
                user,
                { new: true }
            );
    }

    async delete(id) {

        return await UserModel
            .findByIdAndDelete(id);
    }
}

export default MongoUserRepository;