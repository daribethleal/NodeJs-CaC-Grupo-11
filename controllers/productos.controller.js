const db = require("../db/db");

//Metodo GET// 
const index = (req, res) => {
    const sql = "SELECT * FROM productos";

    db.query(sql, (err, rows) => {
        if (err){
            return res.status (500).json({ error: "Error en la base de datos"});
        } 
        return res.json(rows);
    })
};

const show = (req, res) => {;
    const { id } = req.params;

    const sql = `SELECT * FROM productos WHERE id = ?`;
    db.query(sql, [id], (err, rows) => {
        if (err){
            return res.status (500).json({ error: "Error en la base de datos"});
        }

        if (rows.length == 0) {
            return res.status(404).json({ error: "Producto no encontrado"});
        }
        return res.json(rows [0]);
    });
};

//Metodo POST//
const store = (req, res) => {
    const { nombre, descripcion, precio, stock, estado, id_categoria, id_marca } = req.body;

    const sql = "INSERT INTO productos (nombre, descripcion, precio, stock, estado, id_categoria, id_marca) VALUES (?,?,?,?,?,?,?)";
    db.query(sql, [nombre, descripcion, precio, stock, estado, id_categoria, id_marca], (err, result) => {
        if (err){
            return res.status (500).json({ error: "Error en la base de datos"});
        }
        const producto = { ...req.body, id: result.insertId

        };         
        res.json(producto);
    
    });
};

//Metodo PUT//
const update = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, estado, id_categoria, id_marca } = req.body;
    
    const sql = "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, estado = ?, id_categoria = ?, id_marca = ? WHERE id = ?";

    db.query(sql, [nombre, descripcion, precio, stock, estado, id_categoria, id_marca, id], (err, result) => {
        if (err){
            return res.status (500).json({ error: "Error en la base de datos"});
        }
        if (result.affectedRows == 0) {
            return res.status(404).json({ error: "Producto no encontrado"});
        }
        const producto = { ...req.body, ...req.params
        };         
        res.json(producto);
    });
};

//Metodo DELETE//
const destroy = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM productos WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err){
            return res.status (500).json({ error: "Error en la base de datos"});
        }
        if (result.affectedRows == 0) {
            return res.status(404).json({ error: "Producto no encontrado"});
        }
        res.json({ message: `Producto ${id} eliminado`});
    });
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};