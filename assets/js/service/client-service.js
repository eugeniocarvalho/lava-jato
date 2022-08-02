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
          console.log('Não foi possivel buscar o cep');
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

export const clientService = {
  fillZipCode,
}