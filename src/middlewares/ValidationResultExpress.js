// import { validationResult } from "express-validator";

// export const ValidationResultExpress = (req, res, next) => {
//     const errors = validationResult(req)

//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             errors: errors.array()
//         })
//     }
//     next()
// }

import { registerSchema } from "../validators/register.validator.joi.js";

export const ValidationResultExpress = (req, res, next) => {
    const { error } = registerSchema.validate(req.body)
    if (error) {
        return res.status(400).json({
            data: {
                error: error.message
            }
        })
    }
    next()
}