const listBrands = () => {
  return fetch(`https://box3-lava-jato.herokuapp.com/brand`)
  .then( response => {
    return response.json();
  });
}

const registerBrand = (name) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/brand`, {
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
  return fetch(`https://box3-lava-jato.herokuapp.com/brand/${id}`, {
    method: "DELETE"
  });
}

const updateBrand = (id, name) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/brand/${id}`, {
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
  return fetch(`https://box3-lava-jato.herokuapp.com/brand/${id}`)
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