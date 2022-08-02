import { brandService } from "../service/brand-service.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".form-control").value;

  brandService.registerBrand(name);
});
