const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const AuthHeader = req.headers["authorization"];
    if (!AuthHeader) {
        return res.status(403).json({ error: "No autorizado" });
    }

    const token = AuthHeader.split(" ")[1];

    if (!token) {
        return res.status(403).json({ error: "No autorizado" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "No autorizado" });
        }
        req.user = decoded.id;
        next();
    });
};
module.exports = authMiddleware