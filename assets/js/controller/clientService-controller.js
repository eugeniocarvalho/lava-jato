import { clientService } from "../service/client-service.js";

const form = document.querySelector("[data-form]");
const zipCode = form.zipCode;
const name = form.name.value;
const phone = form.phone.value;
const clientDocument = form.document.value;
const street = form.street.value;
const number = form.number.value;
const complement = form.complement.value;
const district = form.district.value;
const city = form.city.value;
const state = form.state.value;

form.addEventListener("submit", (event) => {
  event.preventDefault();

});

zipCode.addEventListener("input", event => {
  if (!event.target.validity.patternMismatch)
    clientService.fillZipCode(zipCode.value);
  else {
    form.street.value = "";
    form.complement.value = "";
    form.district.value = "";
    form.city.value = "";
    form.state.value = "";
  }
})


