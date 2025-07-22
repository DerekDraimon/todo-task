import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

        const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=TaksList`;

        if (!mongoURI) {
            throw new Error("MONGO_URI no está definida en el archivo .env");
        }

        await mongoose.connect(mongoURI);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};
