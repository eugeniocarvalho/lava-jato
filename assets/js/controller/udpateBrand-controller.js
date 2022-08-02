import { brandService } from "../service/brand-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");
const name = document.querySelector(".form-control");

brandService.detailsBrand(parseInt(id))
.then( data => {
  name.value = data.name;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".form-control").value;

  brandService.updateBrand(id, name);
  window.location.href="marcas.html"
});
