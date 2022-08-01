import { brandService } from "../service/brand-service.js";

const saveButton = document.querySelector("[data-form]");


saveButton.addEventListener("click", (event) => {
  
  if (event.target.className === "btn btn-success button") {
    event.preventDefault();
    const name = document.querySelector(".form-control").value;
    
    if (name.length > 0)
      brandService.registerBrand(name);
  }

});