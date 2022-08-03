import { clientService } from "../service/client-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get("id");
const form = document.querySelector("[data-form]");

clientService.detailsClient(parseInt(id))
  .then(data => {
    form.name.value = data.name;
    form.phone.value = data.phone;
    form.doc.value = data.doc;
    form.zipCode.value = data.zipCode;
    form.street.value = data.street;
    form.number.value = data.number;
    form.complement.value = data.complement;
    form.district.value = data.district;
    form.city.value = data.city;
    form.state.value = data.state;
  });

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
  
    clientService.updateClient(id, client);
    window.location.href="clientes.html"
  });