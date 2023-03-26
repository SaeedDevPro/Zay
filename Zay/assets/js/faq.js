// Accrodions
let accrodions = document.querySelectorAll(".accrodion");
accrodions.forEach((accro) => {
  accro.onclick = function () {
    accrodions.forEach((subAccro) => {
      subAccro.classList.remove("active");
    });
    if (this.getAttribute("data-status") == "open") {
      this.classList.remove("active");
      this.setAttribute("data-status", " ");
    } else {
      this.classList.toggle("active");
      this.setAttribute("data-status", "open");
    }
  };
});
