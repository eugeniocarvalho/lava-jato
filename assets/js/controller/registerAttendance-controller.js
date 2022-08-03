import { attendanceService } from "../service/attendance-service.js";

const formServices = document.querySelector("[data-formulario-servico]");
const tableServices = document.querySelector("[data-table-servico]");
const valueTotal = document.querySelector("[data-valor]");

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


  valueTotal.textContent = parseFloat(parseFloat(valueTotal.textContent) + parseFloat(serviceValue)).toFixed(2);
  tableServices.appendChild(addnewServiceToTableOfService(id, nameService, serviceValue));
})

tableServices.addEventListener("click", event => {
  const deleteButton = event.target.className == "fa-regular fa-trash-can";

  if (deleteButton) {
    event.target.parentNode.parentNode.remove()
  }
});