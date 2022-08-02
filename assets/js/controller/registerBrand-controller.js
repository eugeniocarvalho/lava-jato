import { brandService } from "../service/brand-service.js";

const saveButton = document.querySelector("[data-form]");


saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.className === "btn btn-danger button")
    window.location.href = "../../../index.html";
  
  if (event.target.className === "btn btn-success button") {
    const name = document.querySelector(".form-control").value;
    
    if (name.length > 0)
      brandService.registerBrand(name);
  }

    

});
