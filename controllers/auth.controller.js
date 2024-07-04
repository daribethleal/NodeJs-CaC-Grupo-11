const db = require("../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const users = require("../models/user.model");

const register = (req, res) => { 
    const { name, email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (err) {
            db.end();
            return res.status(500).json({ error: "Error en la base de datos" });
        }
            
        if (result.length > 0) {
            db.end();
            return res.status(422).json({ error: "El correo ya existe" });
        } 
        
        const hashedPassword = bcrypt.hashSync(password, 10);

        db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword], (err2, result2) => {
            if (err2) {
                db.end();
                return res.status(500).json({ error: "Error en la base de datos" });
            }
            const token = jwt.sign({ id: result2.insertId }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            res.status(201).json({ token: token, message: "Usuario creado" });
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Error en la base de datos" });
        }

        if (rows.length == 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        let Data = rows[0];

        if (!bcrypt.compareSync(password, Data.password)) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        return res.json({
            token: jwt.sign({ id: Data.id }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            }),
        });
    });
};

module.exports = { login, register };