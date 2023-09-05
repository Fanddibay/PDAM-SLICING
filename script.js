// Fungsi untuk menyembunyikan semua elemen dengan kelas 'sidebar-dropdown-menu'
function hideAllDropdownMenus() {
  const dropdownMenus = document.querySelectorAll(".sidebar-dropdown-menu");
  dropdownMenus.forEach((menu) => {
    menu.style.display = "none";
  });
}

// Mengambil semua elemen dengan kelas 'has-dropdown' yang merupakan item dengan dropdown
const dropdownItems = document.querySelectorAll(
  ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
);
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

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

// // Mengambil elemen dengan kelas 'sidebar-toggle'
// const sidebarToggle = document.querySelector(".sidebar-toggle");
// sidebarToggle.addEventListener("click", function () {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.classList.toggle("collapsed");

//   if (sidebar.classList.contains("collapsed")) {
//     sidebar.addEventListener("mouseleave", function () {
//       hideAllDropdownMenus();
//       const dropdownItems = document.querySelectorAll(
//         ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
//       );
//       dropdownItems.forEach((item) => {
//         item.classList.remove("focused");
//       });
//     });
//   }
// });

// // Mengambil elemen dengan kelas 'sidebar-overlay'
// const sidebarOverlay = document.querySelector(".sidebar-overlay");
// sidebarOverlay.addEventListener("click", function () {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.classList.add("collapsed");
//   hideAllDropdownMenus();
//   const dropdownItems = document.querySelectorAll(
//     ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
//   );
//   dropdownItems.forEach((item) => {
//     item.classList.remove("focused");
//   });
// });

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

const showSidebar2 = document.getElementById("sidebarMenu1");
const sidebarMenu2 = document.getElementById("showSidebarMenu1");

showSidebar2.addEventListener("click", () => {
  if (sidebarMenu2.classList.contains("visually-hidden")) {
    sidebarMenu2.classList.remove("visually-hidden");
  } else {
    sidebarMenu2.classList.add("visually-hidden");
  }
});

const showSidebar3 = document.getElementById("sidebarMenu2");
const sidebarMenu3 = document.getElementById("showSidebarMenu2");

showSidebar3.addEventListener("click", () => {
  if (sidebarMenu3.classList.contains("visually-hidden")) {
    sidebarMenu3.classList.remove("visually-hidden");
  } else {
    sidebarMenu3.classList.add("visually-hidden");
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
