document.addEventListener("DOMContentLoaded", function () {
    const close = document.querySelector(".close");
    const open = document.querySelector(".ham");
    const menu = document.querySelector(".menu");
  
    close.addEventListener("click", () => {
      menu.style.visibility = "hidden";
    });
  
    open.addEventListener("click", () => {
      menu.style.visibility = "visible";
    });
  
    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll(".menu ul li a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menu.style.visibility = "hidden";
      });
    });
  });
  