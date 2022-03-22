const query = require("../config/mysql.config");
const bcrypt = require("bcrypt");

const login = async (res, username, password) => {
    try {
        const [user] = await query(
            "SELECT * FROM users WHERE users.username = ?",
            [username]
        );
        if (!user) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid username or password.",
            });
        }
        const passwordMatch = bcrypt.compare(password);
        if (!passwordMatch) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid username or password.",
            });
        }
        return res.send({
            data: { user: user.username },
            success: true,
            error: null,
        });
    } catch (err) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong, unable to process login.",
        });
    }
};

const signup = async (res, username, password) => {
    try {
        const [isUser] = await query(
            "SELECT * FROM users WHERE users.username = ?",
            [username]
        );
        if (isUser) {
            return res.send({
                data: null,
                success: false,
                error: "Username already in use.",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await query("INSERT INTO users (username, password) VALUES (?,?)", [
            username,
            hashedPassword,
        ]);
        return res.send({
            data: "Successfully signed up!",
            success: true,
            error: null,
        });
    } catch (err) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong. Unable to add new user to the database.",
        });
    }
};

module.exports = { login, signup };
