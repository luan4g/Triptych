import { Request, Response } from "express";
import knex from "../database/connection";
import crypto from "crypto";

class UsersController {
  async create(req: Request, res: Response) {
    const { user_name, password } = req.body;

    const id = crypto.randomBytes(4).toString("hex");

    const user = {
      id,
      user_name,
      password,
    };

    const [tableUser] = await knex("users")
      .where("user_name", user_name)
      .select("user_name");

    if (tableUser) {
      return res.json({ error: "Este usuário ja está sendo usado" });
    }

    await knex("users").insert(user);

    return res.json(user);
  }

  async index(req: Request, res: Response) {
    const users = await knex("users").select("*");

    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const { user_name, password } = req.query;

    const [passUser] = await knex("users")
      .where("user_name", String(user_name))
      .andWhere("password", String(password))
      .select("user_name");

    if (!passUser) {
      return res.json({
        error: "Dados enviados inválidos, usuário ou senha incorretos",
      });
    }

    return res.json({ message: "Login feito com sucesso" });
  }
}

export default UsersController;
