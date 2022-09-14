const joi = require('joi');

class UserValidate {

    static async validateUser(req, res, next) {
        try {
            const schema = await joi.object({
                username: joi.string()
                    .required()
                    .unique()
                    .trim(),

                    email: joi.string()
                    .required()
                    .unique()
                    .trim(),

                    password: joi.string()
                    .required()
                    .min(6),

                    isAdmin: joi.string()
                    .default('false')

            })

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserValidate