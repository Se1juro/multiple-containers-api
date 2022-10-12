const generateRows = document.getElementById("generate-rows");
const deleteRows = document.getElementById("delete-rows");

const createNewUsers = async () => {
  await axios.post("http://localhost:3006/api/products");

  window.location.href = "index.html";
};

const deleteUsers = async () => {
  await axios.delete("http://localhost:3006/api/products");

  window.location.href = "index.html";
};

generateRows.addEventListener("click", (e) => {
  e.preventDefault();
  createNewUsers();
});

deleteRows.addEventListener("click", (e) => {
  e.preventDefault();
  deleteUsers();
});
