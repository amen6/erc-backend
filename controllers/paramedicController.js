import Paramedic from "../models/paramedicModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class ParamedicController {
  async getAllParamedics(req, res, next) {
    try {
      const paramedics = await Paramedic.find({});
      res.status(200).send({ success: true, data: paramedics });
    } catch (error) {
      next(error);
    }
  }

  async getParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findOne({ _id: id });
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res.status(200).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }

  async deleteParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findByIdAndDelete(id);
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res
        .status(200)
        .send({ success: true, message: "Paramedic deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  async editParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res.status(200).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }

  async addParamedic(req, res, next) {
    try {
      const { nick_name } = req.body;
      const oldParamedic = await Paramedic.findOne({ nick_name });

      if (oldParamedic) {
        return res.status(409).send("Paramedic Already Exist. Please Login");
      }
      req.body.nick_name = nick_name.toLowerCase();
      let encryptedPass = "";
      await bcrypt.hash(req.body.password, 10).then(function (hash) {
        encryptedPass = hash;
      });
      req.body.password = encryptedPass;
      const paramedic = await Paramedic.create(req.body);
      res.status(201).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { nick_name, password } = req.body;

      if (!(nick_name && password)) {
        res.status(400).send("All input are required");
      }

      const user = await Paramedic.findOne({ nick_name });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          {
            user_id: user._id,
            nick_name,
            is_super_paramedic: user.is_super_paramedic,
          },
          process.env.USER_TOKEN_KEY,
          {
            expiresIn: "12h",
          }
        );

        user.token = token;

        return res
          .status(200)
          .json({ super: user.is_super_paramedic, nick_name, token });
      } else {
        return res.status(500).json({ error: "Invalid Credentials" });
      }
    } catch (error) {
      if (error) return next(error);
      return res.status(400).send(`Error: ${error}`);
    }
  }
}

const paramedicController = new ParamedicController();
export default paramedicController;
