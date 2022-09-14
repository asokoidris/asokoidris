const joi = ('joi');

class CartValidate {

    static async validateCart ( req, res, next) {
        const schema = joi.object({

            productId: joi.string()
            .required(),

            productId: joi.string(),

            quantity: joi.number()
            .default(1)
        })

    }
}

module.exports = CartValidate