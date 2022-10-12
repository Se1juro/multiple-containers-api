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
    page: Number(page),
  });
};

const createProducts = async (req, res) => {
  const result = await getNewProducts();

  for (const user of result.data) {
    await pool.query(
      `INSERT INTO users (name,lastname,address,email,phone) values($1,$2,$3,$4,$5)`,
      [user.name, user.lastName, user.address, user.email, user.phone]
    );
  }
  res.send(result.data);
};

const deleteAllProducts = async (req, res) => {
  await pool.query("DELETE FROM users WHERE 1=1");

  res.send({ message: "All users deleted" });
};

module.exports = {
  getAllProducts,
  createProducts,
  deleteAllProducts,
};
