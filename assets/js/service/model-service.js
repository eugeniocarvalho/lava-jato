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

export const modelService = {
  createModel
}