document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-button");
  const body = document.body;
  const container = document.querySelector(".container");
  const main = document.querySelector("main");
  const aside = document.querySelector("aside");
  const sidebar = document.getElementById("sidebar");

  // Toggle dark mode
  darkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
    aside.classList.toggle("dark-mode");
    sidebar.classList.toggle("dark-mode");
  });

  // Simple transitions on mouse over and mouse out for posts and materials
  const posts = document.querySelectorAll(".post");
  const materials = document.querySelectorAll(".material");

  function handleMouseOver(element) {
    element.style.transform = "scale(1.05)";
  }

  function handleMouseOut(element) {
    element.style.transform = "scale(1)";
  }

  posts.forEach((post) => {
    post.addEventListener("mouseover", function () {
      handleMouseOver(post);
    });

    post.addEventListener("mouseout", function () {
      handleMouseOut(post);
    });
  });

  materials.forEach((material) => {
    material.addEventListener("mouseover", function () {
      handleMouseOver(material);
    });

    material.addEventListener("mouseout", function () {
      handleMouseOut(material);
    });
  });
});
