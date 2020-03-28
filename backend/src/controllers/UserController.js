const connection = require('../database/connection');

module.exports = {
    async index(req, res) {

        const users = await connection('users').select('*');

        return res.json(users);
    },

    async create(req, res) {
        const { name, last_name, email, password } = req.body;

        const [id] = await connection('users').insert({
            name,
            last_name,
            email,
            password
        });

        return res.status(201).json({ id });
    }
}