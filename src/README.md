# Task Manager API

Простой учебный проект на **Node.js + Express + PostgreSQL**.  
Реализован API для управления задачами с авторизацией пользователей.

---

## 🚀 Функционал
- Регистрация и авторизация пользователей (JWT)
- CRUD для задач
- Связь «пользователь — задачи»
- Логирование запросов (morgan)
- ORM Sequelize

---

## 🛠️ Технологии
- Node.js, Express
- PostgreSQL
- Sequelize ORM
- JWT, bcrypt
- Jest + Supertest (тесты)
- Docker (опционально)

---

## ⚙️ Установка и запуск
```bash
# клонировать проект
git clone https://github.com/yourname/task-manager-api.git
cd task-manager-api

# установить зависимости
npm install

# создать базу данных PostgreSQL (пример)
createdb taskdb

# заполнить .env (пример в .env)
# запустить сервер
npm run dev
