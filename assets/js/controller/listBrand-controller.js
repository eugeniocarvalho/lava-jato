import { brandService } from "../service/brand-service.js";

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const insertSelect = document.querySelector(".form-select");

brandService.listBrands()
  .then(data => {
    data.forEach(brand => {
      insertSelect.appendChild(createOption(brand.name, brand.id));
    });
  });
