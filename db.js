import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  password: "123456Qwe",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

export default pool;
