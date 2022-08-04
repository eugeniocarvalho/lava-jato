import { attendanceService } from "../service/attendance-service.js";
import { menuService } from "../service/menu-service.js";
import { modelService } from "../service/model-service.js"
import { clientService } from "../service/client-service.js";
import { brandService } from "../service/brand-service.js";

const addNewAttendanceToTable = (id, name, clientName) => {
  const newTr = document.createElement("tr");

  const content = `
            <td>${name}</td>
            <td>${clientName}</td>
            <td class="icone-editar"><a href="edit_atendimento.html?id=${id}"><i class="fa-solid fa-pencil"></i></a></td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id;

  return newTr;
}

const attendanceTable = document.querySelector("[data-table]");

if (attendanceTable != null) {
  attendanceService.listAttendances()
    .then(data => {
      data.forEach(attendance => {
        attendanceTable.appendChild(addNewAttendanceToTable(attendance.id, `Atendimento #${attendance.id}`, attendance.clientName))
      });
    });

  attendanceTable.addEventListener("click", event => {
    const deleteButton = event.target.className == "fa-regular fa-trash-can";

    if (deleteButton) {
      const client = event.target.closest("[data-id]");
      const id = client.dataset.id;

      attendanceService.deleteAttendance(id);
    }
  });
}

const createOption = (name, id) => {
  const option = document.createElement("option");

  option.textContent = name;
  option.value = id;

  return option;
}

const selectClient = document.querySelector("[data-form-cliente]");

if (selectClient != null)
  clientService.listClients()
    .then(data => {
      data.forEach(client => {
        selectClient.appendChild(createOption(client.name, client.id));
      });
    });

const selectBrand = document.querySelector("[data-form-marca]");

if (selectBrand != null)
  brandService.listBrands()
    .then(data => {
      data.forEach(brand => {
        selectBrand.appendChild(createOption(brand.name, brand.id))
      });
    });

const selectModel = document.querySelector("[data-form-modelo]");

if (selectModel != null)
  modelService.listModels()
    .then(data => {
      data.forEach(model => {
        selectModel.appendChild(createOption(model.name, model.id));
      });
    });

const selectService = document.querySelector("[data-form-servico]");

if (selectService != null)
  menuService.listServices()
    .then(data => {
      data.forEach(service => {
        selectService.appendChild(createOption(service.name, service.id))
      });
    });

