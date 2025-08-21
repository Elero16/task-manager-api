import dotenv from "dotenv";
import { sequelize } from "./config/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
  } catch (e) {
    console.error("Ошибка запуска:", e);
  }
}

start();
