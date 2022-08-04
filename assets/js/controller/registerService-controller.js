import { menuService } from "../service/menu-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value;
  const value = form.valor_unitario.value;

  menuService.registerService(name, parseInt(value));
  window.location.href="servicos.html"
});