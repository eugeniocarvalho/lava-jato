import { brandService } from "../service/brand-service.js";

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const addnewBrandToTable = (name) => {
  const newTr = document.createElement("tr");
  const content = `
            <td>${name}</td>
            <td class="icone-editar"><i class="fa-solid fa-pencil"></i></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;

  return newTr;
}

const insertSelect = document.querySelector(".form-select");
const brandTable = document.querySelector("[data-table]");

brandService.listBrands()
  .then(data => {
    data.forEach(brand => {
      if (insertSelect != null) {
        insertSelect.appendChild(createOption(brand.name, brand.id));
      }

      if (brandTable != null)
        brandTable.appendChild(addnewBrandToTable(brand.name));

    });
  });