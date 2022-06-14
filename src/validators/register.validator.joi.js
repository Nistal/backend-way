import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi
        .string()
        .trim()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi
        .string()
        .min(8)
        .max(20)
        .required()
})

export const registerSchema = Joi.object({
    email: Joi
        .string()
        .trim()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi
        .string()
        .trim()
        .min(8)
        .required()
        .max(20),
    confirmPassword: Joi
        .ref('password')
})