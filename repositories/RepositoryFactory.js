import MongoUserRepository from "./MongoUserRepository.js";
import MySQLUserRepository from "./MySQLUserRepository.js";
import mysqlConnection from "../config/mysql.js";

class RepositoryFactory {
    static createUserRepository(config) {
        const dbType = config.DATABASE_TYPE;

        switch (dbType.toLowerCase()) {
            case "mongodb":
                return new MongoUserRepository();
            
            case "mysql":
                return new MySQLUserRepository(mysqlConnection);
            
            default:
                throw new Error(`Unknown database type: ${dbType}`);
        }
    }
}

export default RepositoryFactory;
