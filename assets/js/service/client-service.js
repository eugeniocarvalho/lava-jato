const createClient = (client) => {
  return fetch(`http://localhost:3000/client`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "name": client.name,
      "phone": client.phone,
      "doc": client.doc,
      "zipCode": client.zipCode,
      "street": client.street,
      "number": client.number,
      "complement": client.complement,
      "district": client.district,
      "city": client.city,
      "state": client.state
    })
  }).then(response => {
    return response.body;
  })
}

const fillZipCode = (zipCodeValue) => {
  const zipCode = zipCodeValue.replace(/\D/g, "");

  const url = `https://viacep.com.br/ws/${zipCode}/json/`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  }

  if (zipCode.length > 0) {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          return;
        }

        fillAddressFields(data);
        return;
      });
  }
}

function fillAddressFields(data) {
  const form = document.querySelector("[data-form]");

  form.street.value = data.logradouro;
  form.complement.value = data.complemento;
  form.district.value = data.bairro;
  form.city.value = data.localidade;
  form.state.value = data.uf;
}

const listClients = () => {
  return fetch(`http://localhost:3000/client`)
    .then(response => {
      return response.json();
    });
}

const detailsClient = (id) => {
  return fetch(`http://localhost:3000/client/${id}`)
    .then(response => {
      return response.json();
    })
}

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/client/${id}`, {
    method: "DELETE"
  });
}

const updateClient = (id, client) => {
  return fetch(`http://localhost:3000/client/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      "name": client.name,
      "phone": client.phone,
      "doc": client.doc,
      "zipCode": client.zipCode,
      "street": client.street,
      "number": client.number,
      "complement": client.complement,
      "district": client.district,
      "city": client.city,
      "state": client.state
    })
  })
    .then(resposta => {
      return resposta.json();
    });
}

export const clientService = {
  createClient,
  fillZipCode,
  listClients,
  detailsClient,
  deleteClient,
  updateClient
}