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

  const client = {
    "name": form.name.value,
    "phone": form.phone.value,
    "document": form.document.value,
    "street": form.street.value,
    "number": form.number.value,
    "complement": form.complement.value,
    "district": form.district.value,
    "city": form.city.value,
    "state": form.state.value
   }

   clientService.createClient(client);
});

zipCode.addEventListener("input", event => {
  if (!event.target.validity.patternMismatch) {
    clientService.fillZipCode(zipCode.value);
  }
  else {
    form.street.value = "";
    form.complement.value = "";
    form.district.value = "";
    form.city.value = "";
    form.state.value = "";
  }
})


