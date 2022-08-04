import { modelService } from "../service/model-service.js";
import { brandService } from "../service/brand-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");
const name = document.querySelector(".form-control");

modelService.detailsModel(parseInt(id))
  .then(data => {
    name.value = data.name;
  });

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".form-control").value;

  const isSelected = document.querySelector("[data-form-select]");
  const idBrand = isSelected.options[isSelected.selectedIndex].value


  modelService.updateModel(id, name, idBrand);
  window.location.href = "modelos.html"
});

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const selectBrand = document.querySelector("[data-form-select]")

brandService.listBrands()
    .then(data => {
      data.forEach(brand => {
        selectBrand.appendChild(createOption(brand.name, brand.id))
      });
    });