const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = {
    async create(req, res) {

        const { email, password } = req.body;

        const user = await connection
            .select()
            .from('users')
            .where('email', email)
            .first();

        if (!user) {
            return res.status(401).json({ error: 'email or password invalid.' });
        }

        if (password != user.password) {
            return res.status(401).json({ error: 'email or password invalid.' });
        }

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        });
        
        return res.status(200).json({ user, token });

    }
}