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

export const modelService = {
  createModel
}