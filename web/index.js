let users = [];
let currentPage = 1;
let maxPage = 1;

const nextButton = document.getElementById("next-page");
const prevButton = document.getElementById("prev-page");
const container = document.querySelector(".container-users");
const currentPageIndicator = document.getElementById("current-page");
const userTotals = document.getElementById("users-total");

if (currentPage == 1) prevButton.disabled = true;

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  currentPageIndicator.innerText = currentPage;
  if (currentPage > 1) prevButton.disabled = false;
  if (currentPage == 1) prevButton.disabled = true;
  if (maxPage == currentPage) nextButton.disabled = true;
  if (maxPage != currentPage) nextButton.disabled = false;

  getUsers(currentPage);
});

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage--;
  currentPageIndicator.innerText = currentPage;

  if (currentPage > 1) prevButton.disabled = false;
  if (currentPage == 1) prevButton.disabled = true;
  if (maxPage != currentPage) nextButton.disabled = false;

  getUsers(currentPage);
});

const renderUsers = async () => {
  const nodes = container.childNodes;
  for (const node of nodes) {
    container.removeChild(node);
  }
  for (const user of users) {
    const cardName = document.createElement("div");
    cardName.innerText = user.name;
    container.append(cardName);
  }
};

const getUsers = async (page = 1) => {
  const result = await axios.get("http://localhost:3006/api/products", {
    params: {
      page,
    },
  });
  users = [...result.data.rows];
  currentPage = result.data.page;
  maxPage = result.data.totalPages;

  userTotals.innerHTML = result.data.totalRows;

  renderUsers();
};

getUsers();
