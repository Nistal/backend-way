import express from "express";
import { login, register } from "../controllers/register.controller.js";
import { loginSchemaValidator } from "../middlewares/loginValidation.middleware.js";
import { ValidationResultExpress } from "../middlewares/ValidationResultExpress.js";

const router = express.Router()

router.post('/login',loginSchemaValidator , login)
router.post('/register', ValidationResultExpress, register)

export default router