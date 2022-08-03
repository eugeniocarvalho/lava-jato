import { clientService } from "../service/client-service.js";

const addNewClientToTable = (id, name, clientDocument) => {
  const newTr = document.createElement("tr");

  const content = `
            <td>${name}</td>
            <td>${clientDocument}</td>
            <td class="icone-editar"><a href="edit_cliente.html?id=${id}"><i class="fa-solid fa-pencil"></i></a></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id;

  return newTr;
}

clientService.listClients()
.then(data => {
  data.forEach(client => {
    clientTable.appendChild(addNewClientToTable(client.id, client.name, client.doc));
  });
});

const clientTable = document.querySelector("[data-table]");

clientTable.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";
  
  if (deleteButton) {
    const client = event.target.closest("[data-id]");
    const id = client.dataset.id;

    clientService.deleteClient(id);
  }
});