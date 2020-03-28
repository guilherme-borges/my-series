const connection = require('../database/connection');

module.exports = {
    async create(req, res) {

        const { title, image, description } = req.body;

        const [id] = await connection('series').insert({
            title, 
            image, 
            description
        });

        return res.status(201).json({ id });

    }
}