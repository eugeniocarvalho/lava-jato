import { modelService } from "../service/model-service.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.cancel.className === "btn btn-danger button") {
    window.location.href = "../../../index.html";
  }

  const select = document.querySelector(".form-select");
  const name = document.querySelector(".form-control").value;
  const idBrand = select.options[select.selectedIndex].value;

  if (name.length > 0)
    modelService.createModel(name, idBrand);
});