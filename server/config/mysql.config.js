const mysql = require("mysql");
const util = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was lost.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database connection limit exceeded.");
        }
        if (err.code === "ECONNREFUSED") {
            console.log("Database connection was refused.");
        }
    }
    if (connection) connection.release();
});

const query = util.promisify(pool.query).bind(pool);

module.exports = query;
