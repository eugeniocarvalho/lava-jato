import { modelService } from "../service/model-service.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const select = document.querySelector(".form-select");
  const name = document.querySelector(".form-control").value;
  const idBrand = select.options[select.selectedIndex].value;

  if (name.length > 0)
    modelService.createModel(name, parseInt(idBrand));
});