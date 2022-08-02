import { brandService } from "../service/brand-service.js";

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const addnewBrandToTable = (name, id) => {
  const newTr = document.createElement("tr");
  const content = `
            <td>${name}</td>
            <td class="icone-editar"><a href="edit_brand.html?id=${id}"><i class="fa-solid fa-pencil"></i></a></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id
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
        brandTable.appendChild(addnewBrandToTable(brand.name, brand.id));
    });
  });

brandTable.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";
  
  if (deleteButton) {
    const brand = event.target.closest("[data-id]");
    const id = brand.dataset.id;

    brandService.deleteBrand(id);
  }
});