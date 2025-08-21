import Task from "../models/Task.js";

export async function createTask(req, res) {
  const task = await Task.create({ ...req.body, UserId: req.user.id });
  res.json(task);
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll({ where: { UserId: req.user.id } });
  res.json(tasks);
}

export async function updateTask(req, res) {
  const task = await Task.findOne({ where: { id: req.params.id, UserId: req.user.id } });
  if (!task) return res.status(404).json({ message: "Не найдено" });

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  await task.save();
  res.json(task);
}

export async function deleteTask(req, res) {
  const task = await Task.destroy({ where: { id: req.params.id, UserId: req.user.id } });
  res.json({ deleted: task });
}
