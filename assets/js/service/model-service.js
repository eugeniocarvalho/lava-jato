const createModel = (name, idBrand) => {
  return fetch(`http://localhost:3000/model`, {
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
  return fetch(`http://localhost:3000/model`)
  .then( response => {
    return response.json();
  });
}

// const getBrandById = (id) => {
//   return fetch(`http://localhost:3000/brand/${id}`)
//   .then(response => {
//     return response.json()
//   })
// }

const updateModel = (id, name, idBrand) => {
  return fetch(`http://localhost:3000/model/${id}`, {
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
  return fetch(`http://localhost:3000/model/${id}`)
  .then( response => {
    return response.json();
  })
}

const deleteModel = (id) => {
  return fetch(`http://localhost:3000/model/${id}`, {
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