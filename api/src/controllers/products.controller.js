const { getNewProducts } = require("../services/products.service");
const pool = require("../db.config");

const getAllProducts = async (req, res) => {
  const { page = 1 } = req.query;
  const totalRows = await pool.query(`SELECT COUNT(id) from users`);
  const limit = 5;
  const offset = limit * page - limit;

  const { rows } = await pool.query(
    `SELECT * FROM Users ORDER BY id ASC LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  res.send({
    totalRows: Number(totalRows.rows[0].count),
    rows,
    totalPages: Math.ceil(Number(totalRows.rows[0].count) / limit),
    page,
  });
};

const createProducts = async (req, res) => {
  const result = await getNewProducts();
  for (const user of result.data.names) {
    await pool.query(`INSERT INTO users (name) values($1)`, [user]);
  }
  res.send(result.data);
};

const deleteAllProducts = async (req, res) => {
  await pool.query("DELETE FROM users WHERE 1=1");

  res.send({ message: "All users deleted" });
};

const getRandomProducts = async (req, res) => {
  return await getNewProducts();
};

module.exports = {
  getAllProducts,
  createProducts,
  deleteAllProducts,
};
