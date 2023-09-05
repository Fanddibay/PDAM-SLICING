// logic sidebar toggle

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  header = document.querySelector("header");

toggle.addEventListener("click", () => {
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    header.classList.add("d-flex");
  } else {
    header.classList.remove("d-flex");
    sidebar.classList.add("close");
  }
});

const openShow = document.getElementById("openShow");
const closeShow = document.getElementById("closeShow");

openShow.addEventListener("click", () => {
  if (closeShow.classList.contains("visually-hidden")) {
    closeShow.classList.remove("visually-hidden");
    openShow.classList.add("visually-hidden");
  } else {
    closeShow.classList.add("visually-hidden");
  }
});
closeShow.addEventListener("click", () => {
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    header.classList.add("d-flex");
  } else {
    header.classList.remove("d-flex");
    sidebar.classList.add("close");
    closeShow.classList.add("visually-hidden");
    openShow.classList.remove("visually-hidden");
  }
});
const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
    const content = button.nextElementSibling;
    content.classList.toggle("visually-hidden");
  });
});

// Fungsi untuk menyembunyikan semua elemen dengan kelas 'sidebar-dropdown-menu'
function hideAllDropdownMenus() {
  const dropdownMenus = document.querySelectorAll(".sidebar-dropdown-menu");
  dropdownMenus.forEach((menu) => {
    menu.style.display = "none";
  });
}
// sidebar-menu-item has-dropdown
// Mengambil semua elemen dengan kelas 'has-dropdown' yang merupakan item dengan dropdown
const dropdownItems = document.querySelectorAll(
  ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
);
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    // e.preventDefault(); // Hapus atau komentari baris ini

    const parent = this.parentElement;

    if (!parent.classList.contains("focused")) {
      hideAllDropdownMenus();
      const siblings = parent.parentElement.querySelectorAll(".has-dropdown");
      siblings.forEach((sibling) => {
        sibling.classList.remove("focused");
      });
    }

    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
    parent.classList.toggle("focused");
  });
});

// Memeriksa lebar layar dan menambahkan kelas 'collapsed' jika lebar kurang dari 768px
if (window.innerWidth < 768) {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("collapsed");
}

const showSidebar = document.getElementById("sidebarMenu");
const sidebarMenu = document.getElementById("showSidebarMenu");

showSidebar.addEventListener("click", () => {
  if (sidebarMenu.classList.contains("visually-hidden")) {
    sidebarMenu.classList.remove("visually-hidden");
  } else {
    sidebarMenu.classList.add("visually-hidden");
  }
});

const showSidebar4 = document.getElementById("sidebarMenu3");
const sidebarMenu4 = document.getElementById("showSidebarMenu3");

showSidebar4.addEventListener("click", () => {
  if (sidebarMenu4.classList.contains("visually-hidden")) {
    sidebarMenu4.classList.remove("visually-hidden");
  } else {
    sidebarMenu4.classList.add("visually-hidden");
  }
});

const showFilter = document.getElementById("showFilter");
const filters = document.getElementById("formHeader");
const showTextRemove = document.getElementById("hideFilter");

showFilter.addEventListener("click", () => {
  if (filters.classList.contains("visually-hidden")) {
    filters.classList.remove("visually-hidden");
    showFilter.classList.add("visually-hidden");
  } else {
    filters.classList.add("visually-hidden");
  }
});
showFilter.addEventListener("click", () => {
  if (showTextRemove.classList.contains("visually-hidden")) {
    showTextRemove.classList.remove("visually-hidden");
  } else {
    filters.classList.add("visually-hidden");
  }
});

showTextRemove.addEventListener("click", () => {
  if (filters.classList.contains("visually-hidden")) {
    filters.classList.remove("visually-hidden");
    showTextRemove.classList.add("visually-hidden");
  } else {
    filters.classList.add("visually-hidden");
    showTextRemove.classList.add("visually-hidden");
    showFilter.classList.remove("visually-hidden");
  }
});
