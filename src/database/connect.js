import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.DB_URI_MONGO);
    console.log('DB Mongo conectada');
} catch (error) {
    console.log(`Error de conexion mongo: ${error}`)
}