const joi = required('joi');

class ProductValidate {


    static async validateProduct (req, res, next) {
        const schema = joi.object({

            title: joi.string()
                .required()
                .trim(),

            desc: joi.string()
                .required()
                .trim(),

            img: joi.string()
                .required(),

            categories: joi.array(),

            size: joi.string(),

            color: joi.string(),

            price: joi.number()
                .required()
        })
    }
}


module.exports = ProductValidate