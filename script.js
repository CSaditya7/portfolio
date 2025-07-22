window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("intro-logo").style.display = "none";
    const main = document.getElementById("main-content");
    main.style.display = "block";
  }, 2000);
});
