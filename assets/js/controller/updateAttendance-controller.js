import { attendanceService } from "../service/attendance-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");
const formServices = document.querySelector("[data-formulario-servico]");
const tableServices = document.querySelector("[data-table-servico]");
const valueTotal = document.querySelector("[data-valor]");
const formAttendance = document.querySelector("[data-form-atendimento]");
let serviceItems = [];
const mesageErro = document.querySelector(".message-erro");

attendanceService.detailsAttendance(parseInt(id))
  .then(data => {
    console.log(formAttendance.cliente.selectedIndex)
    formAttendance.dateregister.value = data.dateRegister;
    formAttendance.datefinal.value = data.dateFinal;
    formAttendance.cliente.value = parseInt(data.clientName);
    formAttendance.phone.value = data.phone;
    formAttendance.status.value = data.status;
    formAttendance.brand.value = parseInt(data.brand);
    formAttendance.model.value = parseInt(data.model);
    formAttendance.plate.value = data.plate;
    formAttendance.zipCode.value = data.zipCode;
    formAttendance.street.value = data.street;
    formAttendance.number.value = data.number;
    formAttendance.complement.value = data.complement;
    formAttendance.district.value = data.district;
    formAttendance.city.value = data.city;
    formAttendance.state.value = data.state;

    if (serviceItems.length == 0) {
      data.services.forEach(service => {
        const select = document.querySelector(".form-select-servico");
        const nameService = service.name;
        const id = service.id;
        const serviceValue = service.value;

        const serviceItem = {
          "name": nameService,
          "id": id,
          "value": serviceValue
        };

        serviceItems.push(serviceItem)

        valueTotal.textContent = parseFloat(parseFloat(valueTotal.textContent) + parseFloat(serviceValue)).toFixed(2);
        tableServices.appendChild(addnewServiceToTableOfService(id, nameService, serviceValue));
      });
    }

  });

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

tableServices.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";
  
  if (deleteButton) {
    const client = event.target.closest("[data-id]");
    const id = client.dataset.id;

    serviceItems = serviceItems.filter((item) => item.id !== id.toString());
    client.remove();
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
      "clientName": formAttendance.cliente.options[formAttendance.cliente.selectedIndex].value,
      "phone": formAttendance.phone.value,
      "status": formAttendance.status.value,
      "brand": formAttendance.brand.options[formAttendance.brand.selectedIndex].value,
      "model": formAttendance.model.options[formAttendance.model.selectedIndex].value,
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

    attendanceService.updateAttendance(id, attendanceItem);
  }


});


