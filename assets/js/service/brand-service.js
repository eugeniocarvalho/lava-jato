const listBrands = () => {
  return fetch(`http://localhost:3000/brand`)
  .then( response => {
    return response.json();
  });
}

const registerBrand = (name) => {
  return fetch(`http://localhost:3000/brand`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name
    })
  }).then(response => {
    response.body;
  });
}

const deleteBrand = (id) => {
  return fetch(`http://localhost:3000/brand/${id}`, {
    method: "DELETE"
  });
}

const updateBrand = (id, name) => {
  return fetch(`http://localhost:3000/brand/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    })
  })
  .then(resposta => {
    return resposta.json();
  });
}

const detailsBrand = (id) => {
  return fetch(`http://localhost:3000/brand/${id}`)
  .then( response => {
    return response.json();
  })
}

export const brandService = {
  listBrands,
  registerBrand,
  deleteBrand,
  updateBrand,
  detailsBrand
}