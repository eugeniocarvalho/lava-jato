import { menuService } from "../service/menu-service.js";

const addnewServiceToTable = (id, name, value) => {
  const newTr = document.createElement("tr");

  const content = `
            <td>${name}</td>
            <td>${value}</td>
            <td class="icone-editar"><a href="edit_service.html?id=${id}"><i class="fa-solid fa-pencil"></i></a></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id
  return newTr;
}

const serviceTable = document.querySelector("[data-table]");

menuService.listServices()
.then(data => {
  data.forEach(service => {
    serviceTable.appendChild(addnewServiceToTable(service.id, service.name, service.value));
  });
});

serviceTable.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";
  
  if (deleteButton) {
    const brand = event.target.closest("[data-id]");
    const id = brand.dataset.id;

    menuService.deleteService(id);
  }
});