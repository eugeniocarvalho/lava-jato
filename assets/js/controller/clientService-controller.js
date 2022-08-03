import { clientService } from "../service/client-service.js";

const form = document.querySelector("[data-form]");
const zipCode = form.zipCode;

if (form != null)
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const client = {
      "name": form.name.value,
      "phone": form.phone.value,
      "doc": form.doc.value,
      "street": form.street.value,
      "zipCode": form.zipCode.value,
      "number": form.number.value,
      "complement": form.complement.value,
      "district": form.district.value,
      "city": form.city.value,
      "state": form.state.value
    }

    clientService.createClient(client);
    window.location.href="clientes.html";
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

