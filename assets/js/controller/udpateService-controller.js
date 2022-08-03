import { menuService } from "../service/menu-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");

menuService.detailsService(parseInt(id))
.then( data => {
  form.name.value = data.name;
  form.valor_unitario.value = data.value;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name;
  const value = form.valor_unitario;

  console.log(value)

  menuService.updateService(id, name.value, parseFloat(value.value));
  window.location.href="servicos.html"
});
