const createModel = (name, idBrand) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/model`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      idBrand: idBrand
    })
  }).then(response => {
    response.body;
  });
}

const listModels = () => {
  return fetch(`https://box3-lava-jato.herokuapp.com/model`)
  .then( response => {
    return response.json();
  });
}

// const getBrandById = (id) => {
//   return fetch(`https://box3-lava-jato.herokuapp.com/brand/${id}`)
//   .then(response => {
//     return response.json()
//   })
// }

const updateModel = (id, name, idBrand) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/model/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      idBrand: idBrand,
    })
  })
  .then(resposta => {
    return resposta.json();
  });
}

const detailsModel = (id) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/model/${id}`)
  .then( response => {
    return response.json();
  })
}

const deleteModel = (id) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/model/${id}`, {
    method: "DELETE"
  });
}

export const modelService = {
  createModel,
  listModels,
  // getBrandById
  updateModel,
  detailsModel,
  deleteModel
}