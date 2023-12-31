import db from "../db.js";

class UserService {
  async createUser(name, surname) {
    const newPerson = await db.query(
      `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
      [name, surname]
    );
    return newPerson;
  }

  async getUsers() {
    const users = await db.query(`SELECT * FROM person`);
    return users.rows;
  }

  async getOneUser(id) {
    const user = await db.query(`SELECT * FROM person where id = $1`, [id]);
    return user.rows[0];
  }

  async updateUser(id, name, surname) {
    const user = await db.query(
      `UPDATE person set name=$1, surname=$2 where id=$3 RETURNING *`,
      [name, surname, id]
    );
    return user.rows;
  }

  async deleteUser(id) {
    const user = await db.query(`DELETE FROM person where id = $1`, [id]);
    return user.rows[0];
  }
}

export default new UserService();
