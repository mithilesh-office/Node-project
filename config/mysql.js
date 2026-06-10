import mysql from "mysql2/promise";

const mysqlConnection = mysql.createPool({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "nodeapp",
    port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const connectMySQL = async () => {
    try {
        const connection = await mysqlConnection.getConnection();
        connection.release();
        console.log("MySQL Connected");
    } catch (error) {
        console.error("MySQL Connection Failed:", error.message);
    }
};

export default mysqlConnection;
