import { brandService } from "../service/brand-service.js";

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const addOptiontoTable = (name, id) => {
  const tr = document.createElement("tr");
  const content = `
            <td>${name}</td>
            <td class="icone-editar"><i class="fa-solid fa-pencil"></i></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;
}

const insertSelect = document.querySelector(".form-select");

brandService.listBrands()
  .then(data => {
    data.forEach(brand => {
      insertSelect.appendChild(createOption(brand.name, brand.id));
    });
  });
