const connection = require('../database/connection');

module.exports = {
    async create(req, res) {

        const { email, password } = req.body;

        const user = await connection('users')
            .where('email', email)
            .select('*')
            .first();

        if (!user) {
            return res.status(404).json({ error: 'User not found!' });
        }

        if (password != user.password) {
            return res.status(401).json({ error: 'email or password invalid.' })
        }

        return res.status(200).json(user);

    }
}