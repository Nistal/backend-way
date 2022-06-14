import { loginSchema } from "../validators/register.validator.joi.js";

export const loginSchemaValidator = (req, res, next) => {
    const { error } = loginSchema.validate(req.body)
    if (error) {
        res.status(400).json({
            data: {
                error: error.message
            }
        })
    }
    next()
}