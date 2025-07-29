document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("myToggle");

  toggle.addEventListener("change", function () {
    // Toggle the body class based on checkbox state
    document.body.classList.toggle("dark-mode", toggle.checked);
    console.log("Toggle switched. Checked:", toggle.checked);
  });
});
