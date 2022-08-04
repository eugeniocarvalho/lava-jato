import { attendanceService } from "../service/attendance-service.js";

const formServices = document.querySelector("[data-formulario-servico]");
const tableServices = document.querySelector("[data-table-servico]");
const valueTotal = document.querySelector("[data-valor]");
const formAttendance = document.querySelector("[data-form-atendimento]");
const serviceItems = [];
const mesageErro = document.querySelector(".message-erro");

const addnewServiceToTableOfService = (id, name, value) => {
  const newTr = document.createElement("tr");

  const content = `
            <td>${name}</td>
            <td>${value}</td>
            <td class="icone-deletar"><i class="fa-regular fa-trash-can"></i></td>
          `;

  newTr.innerHTML = content;
  newTr.dataset.id = id
  return newTr;
}

formServices.addEventListener("submit", event => {
  event.preventDefault();

  const select = document.querySelector(".form-select-servico");
  const nameService = select.options[select.selectedIndex].textContent;
  const id = select.options[select.selectedIndex].value;
  const serviceValue = document.querySelector(".form-input-value").value;

  const service = {
    "name": nameService,
    "id": id,
    "value": serviceValue
  };

  serviceItems.push(service)

  valueTotal.textContent = parseFloat(parseFloat(valueTotal.textContent) + parseFloat(serviceValue)).toFixed(2);
  tableServices.appendChild(addnewServiceToTableOfService(id, nameService, serviceValue));
})

tableServices.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";

  if (deleteButton) {
    event.target.parentNode.parentNode.remove()
  }
});

formAttendance.addEventListener("submit", event => {
  event.preventDefault();

  if (serviceItems.length == 0) {
    mesageErro.style.display = "block"
    return
  }
  else {
    mesageErro.style.display = "none";

    const attendanceItem = {
      "dateRegister": formAttendance.dateregister.value,
      "dateFinal": formAttendance.datefinal.value,
      "clientName": formAttendance.cliente.options[formAttendance.cliente.selectedIndex].textContent,
      "phone": formAttendance.phone.value,
      "status": formAttendance.status.value,
      "brand": formAttendance.brand.options[formAttendance.brand.selectedIndex].textContent,
      "model": formAttendance.model.options[formAttendance.model.selectedIndex].textContent,
      "plate": formAttendance.plate.value,
      "zipCode": formAttendance.zipCode.value,
      "street": formAttendance.street.value,
      "number": formAttendance.number.value,
      "complement": formAttendance.complement.value,
      "district": formAttendance.district.value,
      "city": formAttendance.city.value,
      "state": formAttendance.state.value,
      "services": serviceItems
    }

    attendanceService.createAttendance(attendanceItem);
  }


});
