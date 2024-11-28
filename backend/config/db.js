import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/",
        {
          useNewUrlParser: true,        // Використовує новий парсер URI
          useUnifiedTopology: true,    // Забезпечує стабільніше підключення
        }
      );
      console.log("MongoDB Connected Successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Завершення програми у разі помилки
    }
};
