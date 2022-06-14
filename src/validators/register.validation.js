import { body } from 'express-validator'

export const emailValidation = [
    body('email', 'Formato de email es incorrecto')
        .isEmail()
        .normalizeEmail()
]

export const passValidation = [
    body('password', 'Contrasena: min 2')
        .trim()
        .isLength({ min: 2 }),
    body('password', 'Contrasena: max 5')
        .isLength({ max: 5 })
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
                throw new Error('Las contrasenas no coinciden')
            }
            return value
        })
]

export const registerValidation = [emailValidation, passValidation]