import userService from "../service/user.service.js";

class UserController {
  async createUser(req, res) {
    try {
      const { name, surname } = req.body;
      const newPerson = await userService.createUser(name, surname);
      res.json(newPerson.rows);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.getOneUser(id);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req, res) {
    try {
      const { id, name, surname } = req.body;
      const user = await userService.updateUser(id, name, surname);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.deleteUser(id);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
