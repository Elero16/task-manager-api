import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export async function register(req, res) {
  const { username, password } = req.body;
  const candidate = await User.findOne({ where: { username } });
  if (candidate) return res.status(400).json({ message: "Пользователь уже существует" });

  const hash = await bcrypt.hash(password, 7);
  const user = await User.create({ username, password: hash });
  res.json(user);
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(404).json({ message: "Не найден" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Неверный пароль" });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
}
