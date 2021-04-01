import { Request, Response } from "express";
import Model from "./model";

class Controller {
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;

      const model = await Model.show(id);
      if (!model) return res.status(404).json({ msg: "Resource not found" });

      return res.status(200).json(model);
    } catch ({ code, message }) {
      return res.status(422).json({ code: code, msg: message });
    }
  }

  async put(req: Request, res: Response): Promise<Response> {
    try {
      let model: any = {};
      if (req.body.name) model.name = req.body.name;
      if (req.body.namusernamee) model.username = req.body.username;
      if (req.body.password) model.password = req.body.password;

      const newModel = await Model.put(req.params.id, model);
      if (!newModel) return res.status(404).json({ msg: "Resource not found" });

      return res.status(200).json(newModel);
    } catch ({ code, message }) {
      return res.status(422).json({ code: code, msg: message });
    }
  }

  async signUp(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.name) return res.status(400).json({ msg: "uame required" });
      if (!req.body.username)
        return res.status(400).json({ msg: "username required" });
      if (!req.body.password)
        return res.status(400).json({ msg: "password required" });

      const newModel = await Model.signUp({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
      });
      if (!newModel)
        return res.status(422).json({ msg: "Resource was not created" });

      return res.status(201).json(newModel);
    } catch ({ code, message }) {
      return res.status(422).json({ code: code, msg: message });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      if (!req.body.username)
        return res.status(400).json({ msg: "username required" });
      if (!req.body.password)
        return res.status(400).json({ msg: "password required" });

      const model = await Model.signIn(req.body.username, req.body.password);
      if (!model)
        return res.status(404).json({ msg: "The data does not match" });

      return res.status(200).json(model);
    } catch ({ code, message }) {
      return res.status(422).json({ code: code, msg: message });
    }
  }
}

export default new Controller();
