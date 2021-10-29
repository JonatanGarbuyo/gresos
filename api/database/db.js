import mysql from "mysql";
import { promisify } from "util";

import database from "./keys.js";

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
  if (error) {
    console.error("ERROR: ", error);
  }

  if (connection) connection.release();
  console.log("DB is connected");
  return;
});

// convert callbacks to promises
pool.query = promisify(pool.query);

export default pool;
