import { modelService } from "../service/model-service.js";

const addnewModelToTable = (name, id, idBrand) => {
  const newTr = document.createElement("tr");

  const content = `
            <td>${name}</td>
            <td>${idBrand}</td>
            <td class="icone-editar"><a href="edit_brand.html?id=${id}"><i class="fa-solid fa-pencil"></i></a></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id
  return newTr;
}

const modelTable = document.querySelector("[data-table]");


modelService.listModels()
.then(data => {
  data.forEach(model => {
    modelTable.appendChild(addnewModelToTable(model.name, model.id, model.idBrand))
  });
});

modelTable.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";
  
  if (deleteButton) {
    const brand = event.target.closest("[data-id]");
    const id = brand.dataset.id;

    modelService.deleteModel(id);
  }
});