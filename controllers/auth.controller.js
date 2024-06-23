const db = require("../db/db");

const login = (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error en la base de datos" });
        }

        if (rows.length == 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        return res.json(rows[0]);
    });
};

const register = (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error en la base de datos: " + err.message});
        }
        const user = { ...req.body, id: result.insertId };
        return res.json(user);
    });
};

module.exports = { login, register };