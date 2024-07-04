const db = require("../db/db");

const addUser = (name, email, password, res) => {
    const user = null
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) { 
            return { error: "Error en la base de datos: " + err.sqlMessage, status: 500 };
        }
        return { id: result.insertId };
    });
    db.commit();
};

module.exports = { addUser };