import dotenv from "dotenv"
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async() =>{
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        await connectDB();

        app.on("error", (error) => {
            console.log("error occurred", error);
            throw error;
            
        });


        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running on port ${process.env.PORT || 5000}`);
        });
        
    } catch (error) {
        console.log("failed to start server", error);
        
    }
}

startServer();