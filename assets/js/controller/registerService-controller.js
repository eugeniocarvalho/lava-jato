import { menuService } from "../service/menu-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.cancel.className)

  if (event.target.cancel.className === "btn btn-danger button") {
    window.location.href = "../../../index.html";
  }
  
  const name = form.name.value;
  const value = form.valor_unitario.value;

  menuService.registerService(name, parseInt(value));
});