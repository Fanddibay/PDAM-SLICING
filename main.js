const showFilter = document.getElementById("showFilter");
const filters = document.getElementById("formHeader");

showFilter.addEventListener("click", () => {
  if (filters.classList.contains("visually-hidden")) {
    filters.classList.remove("visually-hidden");
  } else {
    filters.classList.add("visually-hidden");
  }
});
